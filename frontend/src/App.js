import {BrowserRouter, Routes,Route} from "react-router-dom"
import InquilinoiList from "./components/InquilinoiList";
import AddInquilino from "./components/AddInquilino";
import EditInquilino from "./components/EditInquilino";
import Login from "./components/Login";
import NewUser from "./components/NewUser";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InquilinoiList></InquilinoiList>}></Route>
        <Route path="/add" element={<AddInquilino></AddInquilino>}></Route>
        <Route path="/edit/:id" element={<EditInquilino></EditInquilino>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/crearUsuario" element={<NewUser></NewUser>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
