import {BrowserRouter, Routes, Route} from "react-router-dom";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employee" element={<Employees/>}/>
        <Route path="/employee/add" element={<AddEmployee/>}/>
        <Route path="/employee/edit/:id" element={<EditEmployee/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
