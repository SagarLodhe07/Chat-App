import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form className="flex items-center gap-2 border-b-2 border-slate-100 ">
      <input
        type="text"
        placeholder="Search.. "
        className="p-2 bg-transparent outline-none "
      />
      <CiSearch className="size-8 hover:text-black/70" />
    </form>
  );
};

export default Search;
