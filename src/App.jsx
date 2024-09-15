import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/login";
import { RootLayout } from "./layout/RootLayout";
import { AuthLayout } from "./layout/AuthLayout";
import Register from "./pages/Register";
import { Home } from '../src/pages/home'
import FeaturesPage from "./pages/features.page";
import PricingPage from "./pages/pricing.page";
import Contact from "./pages/contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
