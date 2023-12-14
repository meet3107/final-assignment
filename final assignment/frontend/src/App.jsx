import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceriesApp from "./GroceriesApp";
import LoginForm from "./LoginForm"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/main" element={<GroceriesApp />}/>
        
      </Routes>
    </BrowserRouter>

      
      
    </>
  );
}

export default App;
