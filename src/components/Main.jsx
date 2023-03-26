import { useData } from "../Context/DataProvider";
import { ProductItem } from "./ProductItem";
import styles from "./main.module.css";

export const Main = () => {
  const { state } = useData();
  const { products } = state;
  return (
    <main className={styles.main}>
      {}
      {state.products.length ? (
        products.map((item) => <ProductItem item={item} />)
      ) : (
        <p>loading</p>
      )}
    </main>
  );
};
