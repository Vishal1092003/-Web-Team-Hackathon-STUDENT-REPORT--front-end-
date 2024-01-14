import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white">
  
      <Navbar/>

       
      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
      
      </Routes>
    </div>
  );
}

export default App;
