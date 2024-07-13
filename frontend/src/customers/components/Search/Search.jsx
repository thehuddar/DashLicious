import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchMenuItem } from "../../../State/Customers/Menu/menu.action";


const Search = () => {
  const dispatch = useDispatch();
  const { menu,auth } = useSelector((store) => store);
  console.log("menu ", menu); 
  const jwt=localStorage.getItem("jwt")

  const handleSearchMenu = (keyword) => {
    dispatch(searchMenuItem({keyword,jwt:auth.jwt || jwt }));
  };
  
  return (
    <div className="px-5 lg:px-[18vw]">
      <div className="relative py-5">
        <SearchIcon className="absolute top-[2rem] left-2" />
        <input
          onChange={(e) => handleSearchMenu(e.target.value)}
          className="p-2 py-3 pl-12 w-full bg-[#242B2E] rounded-sm outline-none"
          type="text"
          placeholder="search food..."
        />
      </div>
    </div>
  );
};

export default Search;
