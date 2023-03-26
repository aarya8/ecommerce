export const intialState = {
  products: [],
  cart: [],
  filter: [],
};
export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INTIALIZE_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: [
          ...state.cart
            .map((item) => {
              if (item.id === payload.id) {
                return { ...item, quantity: item.quantity + payload.quantity };
              }
              return item;
            })
            .filter((item) => item.quantity !== 0),
        ],
      };
    default:
      return state;
  }
};
