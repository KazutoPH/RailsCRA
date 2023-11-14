import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const RootLayout = () => {
  return (
    <>
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>

    </>
  );
};

export default RootLayout;
