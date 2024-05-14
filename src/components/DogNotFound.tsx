import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import { IconContext } from "react-icons";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-96">
      <IconContext.Provider value={{ className: "text-yellow-400 mb-4" }}>
        <PetsIcon />
      </IconContext.Provider>
      <h1 className="mb-4 text-6xl font-bold">404 Dog Not Found</h1>
      <p className="mb-5 text-xl">This page does not exist</p>
      <Link
        to="/dog"
        className="px-3 py-2 mt-4 text-white bg-indigo-700 rounded-md hover:bg-indigo-900"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
