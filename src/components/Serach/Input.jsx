import React from 'react';
import { useDispatch } from 'react-redux';
import { searchNote } from '../../Slice/slice';

function Input() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(searchNote(searchTerm));
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Input;
