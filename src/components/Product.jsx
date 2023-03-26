import { useParams } from "react-router-dom";
import { useData } from "../Context/DataProvider";
import styles from "./product.module.css";
export const Product = () => {
  const { productid } = useParams();
  const { state } = useData();

  const product = state.products.find((element) => element.id === +productid);

  return (
    <div>
      <div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={product.image} alt="" />
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p style={{ color: "red" }}>{product.price}</p>
      </div>
    </div>
  );
};
