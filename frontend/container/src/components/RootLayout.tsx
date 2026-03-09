import { Outlet } from "react-router-dom";
import ApplicationHeader from "./ApplicationHeader";
import Footer from "./Footer/Footer";

const RootLayout: React.FC = function () {
  return (
    <>
      <ApplicationHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
