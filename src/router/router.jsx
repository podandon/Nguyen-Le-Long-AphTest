import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Main from "../pages/main";
import Login from "../pages/login";
import AllProduct from "../pages/all-product";
import Category from "../pages/category";
import SearchScreen from "../pages/search";
import ProductDetail from "../pages/product-details";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Main />}>
        <Route path="all-product" element={<AllProduct />} />
        <Route path="category" element={<Category />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="product/:url" element={<ProductDetail />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
    </Route>
  )
);
