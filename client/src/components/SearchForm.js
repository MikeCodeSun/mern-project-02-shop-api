import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const { setSearchForm } = useGlobalContext();
  const valueSearch = useRef("");
  const searchHandle = () => {
    setSearchForm(valueSearch.current.value);
  };
  return (
    <form className="form">
      <div className="form-control">
        <label htmlFor="name" className="form-label">
          <FaSearch />
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="Search"
          ref={valueSearch}
          onChange={searchHandle}
        />
      </div>
    </form>
  );
}
