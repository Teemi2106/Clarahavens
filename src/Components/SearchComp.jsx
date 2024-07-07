import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

const SearchComp = ({ handleCartClick }) => {
  return (
    <div className="searchcmp">
      {" "}
      <form className="headerForm">
        <CiSearch color="white" size="4vmin" />
        <Input id="input" type="text" />
      </form>
      <div className="headuser">
        <BsCart4 cursor="pointer" size="5vmin" onClick={handleCartClick} />
        <FaRegCircleUser cursor="pointer" size="4vmin" />
      </div>
    </div>
  );
};

export default SearchComp;
