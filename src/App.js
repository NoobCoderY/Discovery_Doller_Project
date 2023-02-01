import "./App.css";
// import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sponsers from "./Component/Sponsers"
import { useState } from "react";
import Products from "./Products";

function App() {
  const [electronicsData, setElectronicsData] = useState([
    { 
     
      id: 1,
      pic: '/assets/electronics/m30.png',
      name: 'SAMSUNG Galaxy M30',
      price: 13999 ,
      category:'Electronics'
    },
    { 
      id: 2,
      pic: '/assets/electronics/vivobooks15.jpg',
      name: 'ASUS Vivobook S15',
      price: 65895 ,
      category:'Electronics'
    },
    { 
      id: 3,
      pic: '/assets/electronics/ideapad.jpg',
      name: 'Lenovo Ideapad 12',
      price: 55999 ,
      category:'Electronics'
    },
    { 
      id: 4,
      pic: '/assets/electronics/mouse.jpg',
      name: 'Zebronics Transformer-M',
      price: 399 ,
      category:'Electronics'
    },
    { 
      id: 5,
      pic: '/assets/electronics/wondertainment.jpg',
      name: 'Samsung Wondertainment-LED',
      price: 15999 ,
      category:'Electronics'
    },
    { 
      id: 6,
      pic: '/assets/electronics/hp.png',
      name: 'HP Laptop',
      price: 42999 ,
      category:'Electronics'
    },
    { 
      id: 7,
      pic: '/assets/electronics/c2y1.jfif',
      name: 'realme C21Y',
      price: 9999 ,
      category:'Electronics'
    },
    { 
      id: 8,
      pic: '/assets/electronics/realme8.jfif',
      name: 'realme 8',
      price: 17999 ,
      category:'Electronics'
    },
    { 
      id: 9,
      pic: '/assets/electronics/aspire7.webp',
      name: 'acer Aspire 7',
      price: 52999 ,
      category:'Electronics'
    },
    { 
      id: 10,
      pic: '/assets/electronics/immortals.jpg',
      name: 'boAt Immortal 400',
      price: 1999 ,
      category:'Electronics'
    },
    { 
      id: 11,
      pic: '/assets/electronics/watch.jpg',
      name: 'boAt Smart Watch',
      price: 1599 ,
      category:'Electronics'
    },
    { 
      id: 12,
      pic: '/assets/electronics/powerbank.jpg',
      name: 'Mi Laptop PowerBank',
      price: 1799 ,
      category:'Electronics'
    },
    { 
      id: 13,
      pic: '/assets/electronics/earbuds.jpg',
      name: 'realme Buds',
      price: 999,
      category:'Electronics'
    }
  ])
  return <>
    {/* <BrowserRouter> */}
    <Navbar></Navbar>
    {/* <Routes> */}
        
        {/* <Route exact path="/header" element={<Header/>}></Route>
    </Routes> */}
    <Header/>
    <div style={{display:'flex',width:'98%',margin:'auto',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Products electronicsData={electronicsData}/>
    </div>
    <Sponsers/>
    <Footer/>
    {/* </BrowserRouter> */}
  </>;
}

export default App;
