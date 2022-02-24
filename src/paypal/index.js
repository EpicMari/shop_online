// import React, { useRef, useEffect, useContext } from "react";
// import Div from "../components/atoms/Div";
// import RootContext from "../context/RootContext";

// const Paypal = () => {
//   const paypal = useRef();
//   const { orderValue, handleOrderPaid } = useContext(RootContext);

//   useEffect(() => {
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: "capture",
//             purchase_units: [
//               {
//                 description: "Cool looking table",
//                 amount: {
//                   currency_code: "USD",
//                   value: orderValue,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           const order = await actions.order.capture();
//           console.log(order);

//           order.status === "COMPLETED" && handleOrderPaid(true);
//         },
//         onError: (err) => {
//           console.log(err);
//         },
//       })
//       .render(paypal.current);
//   }, []);
//   return (
//     <Div paypalButtons>
//       <div ref={paypal}></div>
//     </Div>
//   );
// };

// export default Paypal;
