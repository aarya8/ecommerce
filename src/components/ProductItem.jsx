import { Link, Navigate, useNavigate } from "react-router-dom";
import { useData } from "../Context/DataProvider";
import styles from "./productItem.module.css";
export const ProductItem = ({ item }) => {
  const {
    dispatch,
    state: { cart },
  } = useData();
  const navigate = useNavigate();
  const { image, id, title } = item;
  const navigatePage = () => {
    navigate(`/product/${id}`);
  };
  const addtoCart = (e) => {
    e.stopPropagation();
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, quantity: 1 },
    });
  };
  return (
    <div onClick={navigatePage} key={id} className={styles.productContainer}>
      {" "}
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <h3>{title}</h3>
      {cart.some((item) => item.id === id) ? (
        <Link onClick={(e) => e.stopPropagation()} to="/cart">
          Go to cart
        </Link>
      ) : (
        <button onClick={addtoCart}> Add to Cart</button>
      )}
    </div>
  );
};
