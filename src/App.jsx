import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/login";
import { RootLayout } from "./layout/RootLayout";
import { AuthLayout } from "./layout/AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {/* home related pages goes here */}
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
