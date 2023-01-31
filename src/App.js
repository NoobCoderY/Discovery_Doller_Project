import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Header from "./Component/Header";
function App() {
  return <>
    <BrowserRouter>
 <Navbar></Navbar>
    <Routes>
        
        <Route exact path="/header" element={<Header/>}></Route>
    </Routes>
    </BrowserRouter>
  </>;
}

export default App;
