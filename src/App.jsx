import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { RootLayout } from "./layout/RootLayout";
import { AuthLayout } from "./layout/AuthLayout";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>}/>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
}

export default App
