import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import ResendOTP from "./pages/ResendOTP";
import VerifyToken from "./pages/VerifyToken";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/otp/:email" element={<VerifyOTP />}></Route>
        <Route path="/token/:token" element={<VerifyToken />}></Route>
        <Route path="/resendotp" element={<ResendOTP />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
