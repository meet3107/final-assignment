import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceriesApp from "./GroceriesApp";
import LoginForm from "./LoginForm";

import NotFound from "./NotFound";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/main" element={<GroceriesApp />}/>
        <Route path="*" element={<NotFound/>}/>

        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/editproduct" element={<EditProduct/>}/>




      </Routes>
    </BrowserRouter>

      
      
    </>
  );
}

export default App;
