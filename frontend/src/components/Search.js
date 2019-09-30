import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes Here"
        onChange={props.handleSearchInput}
      />
    </div>
  );
}

export default Search;
