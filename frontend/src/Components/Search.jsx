import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useGetConversation from "../Hooks/useGetConversation.js";
import useConversation from "../Zustand/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversation();
  const { setSelectedConversation } = useConversation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search term must be atleast be 3 character long");

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()) );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No User Found");
    }
  };
  return (
    <form
      className="flex items-center gap-2 border-b-2 border-slate-100"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        className="p-2 bg-transparent outline-none "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CiSearch className="size-8 hover:text-black/70" />
    </form>
  );
};

export default Search;
