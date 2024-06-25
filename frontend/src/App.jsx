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
import LoginRouter from "./privateRouter/LoginRouter";
import LogoutRouter from "./privateRouter/LogoutRouter";
import NewsFeed from "./pages/NewsFeed";
import Message from "./pages/Message";
import Friends from "./pages/Friends";
import Media from "./pages/Media";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoginRouter />}>
          <Route path="/" element={<Home />}>
            <Route path="newsfeed" element={<NewsFeed />}></Route>
            <Route path="message" element={<Message />}></Route>
            <Route path="friends" element={<Friends />}></Route>
            <Route path="media" element={<Media />}></Route>
          </Route>
        </Route>
        <Route element={<LogoutRouter />}>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/otp/:email" element={<VerifyOTP />}></Route>
          <Route path="/token/:token" element={<VerifyToken />}></Route>
          <Route path="/resendotp" element={<ResendOTP />}></Route>
        </Route>
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
