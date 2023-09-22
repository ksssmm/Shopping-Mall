import { ADDITEM, DELITEM } from "../action/types";
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADDITEM:
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case DELITEM:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    case "INCQTY":
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      );
    case "DECQTY":
      return state.map((x) => {
        if (x.id === product.id && x.qty > 1) {
          return { ...x, qty: x.qty - 1 };
        }
        return x;
      });

    default:
      return state;
  }
};

export default handleCart;
