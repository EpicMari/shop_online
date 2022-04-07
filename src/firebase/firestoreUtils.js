import { firestore } from "./firebaseConfig";

export const usersCollection = firestore.collection("users");
export const ordersCollection = firestore.collection("orders");

export const createUserInCollection = (userDetails, docId) => {
  usersCollection
    .doc(docId)
    .set({
      ...userDetails,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// export const createOrderInFireStore = (docId, orderDetails) => {
//   ordersCollection
//     .doc(docId)
//     .add({ ...orderDetails })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

export const createOrderInFireStore = (orderDetails) => {
  ordersCollection
    .add(orderDetails)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getUserByUid = (uid, callback) => {
  usersCollection.get().then((snapshot) => {
    snapshot.forEach((el) => {
      if (el.id === uid) {
        callback({
          ...el.data(),
          password: "",
        });
      }
    });
  });
};
