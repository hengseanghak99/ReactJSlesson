import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/UserPage/HomePage";
import LoginPage from "./components/UserPage/LoginPage";
import ResigerPage from "./components/UserPage/RegisterPage";
import Header from "./components/Layout/Header/Header";
import AboutPage from "./components/UserPage/AboutPage";
import Footer from "./components/Layout/Footer/Footer";
import NotfoundPage from "./components/UserPage/NotfoundPage";
import Product from "./components/Testing/product";

function App() {
  return (
    <BrowserRouter>
     <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/register" element={<ResigerPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="*" element={<NotfoundPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


