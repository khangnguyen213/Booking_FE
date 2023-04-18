import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignInSide from "./pages/auth/LoginMUI";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Transaction from "./pages/transaction/Transaction";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RegisterSide from "./pages/auth/RegisterMUI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<RegisterSide />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
