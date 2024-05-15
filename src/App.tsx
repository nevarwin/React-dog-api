import DogImage from "./components/DogImage";
import DogNotFound from "./components/DogNotFound";
import SpecificBreed from "./components/SpecificBreed";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/dog" element={<DogImage />} />
        <Route path="/specific-dog" element={<SpecificBreed />} />
        <Route path="*" element={<DogNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
