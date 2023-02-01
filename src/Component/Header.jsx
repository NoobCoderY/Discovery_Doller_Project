import React from "react";
import "./Header.css";
import Json_data from "../Constants/Json_Data.json";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Sliderr from "./Sliderr";

const Header = () => {
  //Here we set jsondata to data
  const [data, setdata] = React.useState(Json_data.categoryItem);
  const [input, setInput] = React.useState('');
  return (
    <>
      <div className="Header">
        {data.map((datainfo, index) => {
          return (
            <div className="category" key={"CardBox"+index}>
              <div className="categoty_image"
              //  onMouseEnter={(e)=>{e.target.style.background='#000000'}} onMouseLeave={(e)=>{e.target.style.background='#fff'}}
              >
                <img src={datainfo?.image} alt="/" />
              </div>
              <div className="category_name">
                <span>
                  {" "}
                  <h4>{datainfo.name}</h4>{" "}
                </span>
                {datainfo.Category[0].subCategory.length > 0 && (
                  <span className="arrowDown">
                   < MdKeyboardArrowDown />
                  </span>
                )}
              </div>
              {datainfo.Category[0].subCategory.length > 0 && <div className="dropdown-container">
              <div className="Search_bar" style={{width:'90%',margin:'auto',border:'0.5px solid rgba(110, 110, 110, 0.067)',height:'40px'}}>
                <input type="text" placeholder="Search" onChange={(e)=>setInput(e.target.value)}/>
                <FaSearch className={"SearchIcon"} style={{fontSize:'1rem'}}/>
              </div>
                {datainfo.Category.filter((v)=>{
                  const value = v.Category_name.toLowerCase();
                  const inValue = input.toLowerCase();
                  return(
                    value.includes(inValue)
                    )
                }).map((itm,key)=>(
                  <div className="dropdown" key={"CardImg"+key}>
                    <div className="dropdown-item">
                      <div>{itm.Category_name}</div>
                      <div className="dropdown-item-icon">
                        <MdKeyboardArrowDown style={{transform:'rotate(-90deg)'}}/>
                      </div>
                    </div>
                    {itm.subCategory.length!==0 && <div className="subelement" position='absolute' left='100%'>{itm.subCategory.map((it,key)=>(
                      <div className="subelement-item" key={"Subelement"+key}>
                        <div className="subelement-item-element">{it}</div>
                      </div>
                    ))}</div>}
                  </div>
                ))}
              </div>}
            </div>
          );
        })}
      </div>
      <Sliderr />
    </>
  );
};

export default Header;
