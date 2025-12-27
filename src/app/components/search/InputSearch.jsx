"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  console.log("params", params.toString());
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    //create new search parameters
    const newParams = new URLSearchParams(params.toString());
    //set the query
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Enter Food name"
          className="w-84 p-3 h-14 border-2 border-amber-400 rounded-l-4xl"
        />
        <button className="w-24 h-14 bg-red-500 text-white rounded-r-4xl cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
