//this is meet's work

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceriesApp from "./GroceriesApp";
import LoginForm from "./LoginForm";
import NotFound from "./NotFound"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/main" element={<GroceriesApp />}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>

      
      
    </>
  );
}

export default App;
