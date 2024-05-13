import { Stack } from "@mui/material";
import CustomTabs from "../components/CustomTabs";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Stack>
      <CustomTabs />
      <Outlet />
    </Stack>
  );
};

export default MainLayout;
