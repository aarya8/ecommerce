import { useData } from "../Context/DataProvider";
import styles from "./cart.module.css";
export const Cart = () => {
  const { state, dispatch } = useData();
  const updateQuantity = (quantity, id) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    });
  };
  return (
    <div className={styles.cartContainer}>
      {state.cart.map((item) => (
        <div className={styles.cartBox}>
          <p> {item.title}</p>
          <button onClick={() => updateQuantity(+1, item.id)}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => updateQuantity(-1, item.id)}>-</button>
        </div>
      ))}
    </div>
  );
};
