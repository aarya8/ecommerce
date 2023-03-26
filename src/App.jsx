import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
function App() {
  function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);

    return (
      <div>
        <Navbar />
        <h3>Something Went Wrong Go Back to Home</h3>
        <Link to="/">GO Back Home</Link>
      </div>
    );
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />} errorElement={<ErrorBoundary />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:productid" element={<Product />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
