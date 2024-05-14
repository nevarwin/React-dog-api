import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function CenteredTabs() {
  return (
    <Stack
      className="flex flex-row justify-center p-5 bg-yellow-800"
      direction={"row"}
      spacing={2}
    >
      <Link to={"/dog"} style={{ color: "white", textDecoration: "none" }}>
        Random Dog Pictures
      </Link>
      <Link
        to={"/specific-dog"}
        style={{ color: "white", textDecoration: "none" }}
      >
        Specific Dog Pictures
      </Link>
    </Stack>
  );
}
