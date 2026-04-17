import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/all-product");
    }
  });

  return (
    <div id="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
