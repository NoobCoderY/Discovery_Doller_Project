import React from "react";
import "./Header.css";
import Json_data from "../Constants/Json_Data.json";
import { MdKeyboardArrowDown } from "react-icons/md";
import Sliderr from "./Sliderr";

const Header = () => {
  const [data, setdata] = React.useState(Json_data.categoryItem);
  // console.log(data[0].Category);
  return (
    <>
      <div className="Header">
        {data.map((key, index) => {
          {
            console.log(key.Category[0].subCategory);
          }
          return (
            <div className="category">
              <div className="categoty_image">
                <img src={key?.image} alt="/" />
              </div>
              <div className="category_name">
                <span>
                  {" "}
                  <h4>{key.name}</h4>{" "}
                </span>
                {key.Category[0].subCategory.length > 0 && (
                  <span className="arrowDown">
                    <MdKeyboardArrowDown />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Sliderr />
    </>
  );
};

export default Header;
