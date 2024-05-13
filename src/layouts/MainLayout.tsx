import CustomTabs from "../components/CustomTabs";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <CustomTabs />
      <Outlet />
    </>
  );
};

export default MainLayout;
