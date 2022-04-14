import React from "react";
import Div from "../../atoms/Div";
import Img from "../../atoms/Img";
import RouterNavLink from "../../atoms/RouterNavLink";

const LastThreeItems = ({ productsArray }) => {
  return (
    <Div lastThreeNewItems>
      {productsArray.map((item, i) => {
        return (
          i < 3 && (
            <RouterNavLink
              to={{
                pathname: `/product/${item.name.replace(/\s/g, "")}`,
                state: {
                  ...item,
                },
              }}
            >
              <Img newArrivalsImg src={item.image} alt={item.name} />
            </RouterNavLink>
          )
        );
      })}
    </Div>
  );
};

export default LastThreeItems;

// if (productsArray.length - productsArray.length === i) {
//   return (
//     <RouterNavLink to={{

//     }}>
//       <Img newArrivalsImg src={item.image} alt={item.name} />
//     </RouterNavLink>
//   );
// } else if (productsArray.length - (productsArray.length - 1) === i) {
//   return (
//     <RouterNavLink to={{

//     }}>
//       <Img newArrivalsImg src={item.image} alt={item.name} />
//     </RouterNavLink>
//   );
// } else if (productsArray.length - (productsArray.length - 2) === i) {
//   return (
//     <RouterNavLink to={{

//     }}>
//       <Img newArrivalsImg src={item.image} alt={item.name} />
//     </RouterNavLink>
//   );
// }
