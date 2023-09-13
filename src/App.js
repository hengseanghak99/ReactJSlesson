import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/UserPage/HomePage";
import LoginPage from "./components/UserPage/LoginPage";
import Header from "./components/Layout/Header/Header";
import AboutPage from "./components/UserPage/AboutPage";
import Footer from "./components/Layout/Footer/Footer";




function App() {
  return (
   
    <BrowserRouter>
     <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
