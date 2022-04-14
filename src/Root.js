import React, { useState, useEffect } from "react";
import Router from "./routing/Router";
import RootContext from "./context/RootContext";
import { GlobalStyle } from "./globalStyles/globalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes/themes";
import { getProductsInCartFromLocalStorage } from "./helpers/localStorage";
import { client } from "./contentful/client";
import { StylesProvider } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { auth } from "./firebase/firebaseConfig";
import { getUserByUid } from "./firebase/firestoreUtils";

const Root = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [cart, setCart] = useState(getProductsInCartFromLocalStorage());
  const [cartTotal, setCartTotal] = useState(0);
  const [orderValue, setOrderValue] = useState(0);
  const [categorySelectValue, setCategorySelectValue] = useState("all");
  const [productNameInputValue, setProductNameInputValue] = useState("");
  const [onOffMenu, setOnOffMenu] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [genderChoice, setGenderChoice] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [isOrderPaid, setIsOrderPaid] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const showNotification = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleOrderPaid = (value) => {
    setIsOrderPaid(value);
  };

  useEffect(() => {
    if (cart.length !== 0) {
      const mapedP = products.map((p) => {
        cart.forEach((c) => {
          if (p.id === c.id) {
            p.inCartQuantity = c.inCartQuantity;
          }
        });
        return p;
      });
      setProducts(mapedP);
    }
  }, [cart]);

  useEffect(() => {
    handleOrderValue();
  }, [deliveryMethod, cartTotal]);

  const handleOrderValue = () => {
    setOrderValue(cartTotal + parseFloat(deliveryMethod));
  };

  const handleDeliveryMethod = (event) => {
    setDeliveryMethod(event.target.value);
  };

  // const handleNotification = () => {
  //   setOpenNotification(true);
  // };

  // const handleNotificationClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpenNotification(false);
  // };

  const setMaxAndMinPrice = (contentfulData) => {
    const productsPrices = contentfulData.map((product) => product.price);
    const maxPrice = Math.max(...productsPrices);
    const minPrice = Math.min(...productsPrices);
    setPriceRange([minPrice, maxPrice]);
  };

  const setContentfulData = (data) => {
    const contentfulData = data.map((item) => {
      const id = item.sys.id;
      const image = item.fields.image.fields.file.url;
      const itemFromLSCart = JSON.parse(localStorage.getItem("cart"));
      const cartItem = itemFromLSCart.find((e) => e.id === id);

      return {
        ...item.fields,
        id,
        image,
        inCartQuantity: cartItem ? cartItem?.inCartQuantity : 1,
      };
    });
    setInitialProducts([...contentfulData]);
    setMaxAndMinPrice(contentfulData);
    setProducts([...contentfulData]);
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((res) => {
        setContentfulData(res.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContentfulData();

    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.uid);
        getUserByUid(user.uid, (value) => setUserData(value));
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  useEffect(() => {
    setProductsInCartToLocalStorage();
  }, [cart]);

  const setProductsInCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleGenderChoiceValue = (e) => {
    setGenderChoice(e.target.value);
  };

  useEffect(() => {
    handleCartTotalCalculate();
  }, [cart]);

  const filterProducts = () => {
    let tempProducts = [...initialProducts];

    if (productNameInputValue.length !== 0) {
      tempProducts = tempProducts.filter(
        (product) =>
          product.name.toLowerCase().slice(0, productNameInputValue.length) ===
          productNameInputValue
      );
    }

    if (categorySelectValue !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === categorySelectValue
      );
    }

    tempProducts = tempProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
  }, [categorySelectValue, productNameInputValue, priceRange]);

  const handlePriceRange = (e, newPrice) => {
    setPriceRange(newPrice);
  };

  const menuToggle = () => {
    setOnOffMenu(!onOffMenu);
  };

  const menuOff = () => {
    setOnOffMenu(false);
  };

  const handleInputValue = (e) => {
    setProductNameInputValue(e.target.value.toLowerCase());
  };

  const handleCategorySelectValue = (e) => {
    setCategorySelectValue(e.target.value);
  };

  const handleCartTotalCalculate = () => {
    let total = 0;
    cart.forEach((product) => {
      total = total + product.inCartQuantity * product.price;
    });

    setCartTotal(total);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const addProductToCart = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    setCart([...new Set([...cart, selectedProduct])]);
    const checkProductInCart = cart.find((product) => product.id === id);
    checkProductInCart && handleProductQuantityInCart(id);
    showNotification("Product added to cart", "success");
  };

  const deleteProductFromCart = (id) => {
    const filteredProducts = cart.filter((product) => {
      return product.id !== id;
    });

    const mappedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          inCartQuantity: 1,
        };
      } else {
        return product;
      }
    });

    setCart([...filteredProducts]);
    setProducts([...mappedProducts]);
    showNotification("Product removed from the cart", "error");
  };

  const handleProductQuantityInCart = (id, operationType) => {
    const mapedCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            inCartQuantity:
              operationType === "decrease"
                ? product.inCartQuantity - 1
                : product.inCartQuantity + 1,
          }
        : product
    );
    setCart([...mapedCart]);
    operationType === "decrease" &&
      showNotification("Product removed from the cart", "error");
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <RootContext.Provider
      value={{
        isCartOpen,
        products,
        cart,
        cartTotal,
        categorySelectValue,
        initialProducts,
        productNameInputValue,
        onOffMenu,
        priceRange,
        genderChoice,
        // openNotification,
        orderValue,
        deliveryMethod,
        currentUser,
        userData,
        isOrderPaid,
        handleCartOpen,
        handleCartClose,
        addProductToCart,
        deleteProductFromCart,
        handleProductQuantityInCart,
        handleCategorySelectValue,
        handleInputValue,
        menuToggle,
        handlePriceRange,
        menuOff,
        handleGenderChoiceValue,
        // handleNotificationClose,
        // handleNotification,
        handleDeliveryMethod,
        handleOrderPaid,
        resetCart,
        showNotification,
      }}
    >
      <ThemeProvider theme={themes}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <Router />
        </StylesProvider>
      </ThemeProvider>
    </RootContext.Provider>
  );
};

export default Root;
