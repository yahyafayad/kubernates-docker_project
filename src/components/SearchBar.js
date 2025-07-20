import React, {  useState } from "react";

function SearchBar({ onSearch, label }) {
  const [term, setTerm] = useState("")

  // Handle Form Submit
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(term)
  }

  return (<div className="search-bar ui segment">
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>{label}</label>
        <input onChange={(e) => setTerm(e.target.value)} ></input>
      </div>
    </form>
  </div>);
}
export default React.memo(SearchBar);
