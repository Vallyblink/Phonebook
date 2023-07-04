
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredContacts } from "redux/contacts/ContactSlice";

import { TextField, FormControl, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/system";

const FilterContainer = styled("div")`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value;

    const filteredContacts = contacts.filter((contact) => {
      const name = contact.name.toLowerCase();
      return name.includes(searchTerm.toLowerCase());
    });

    dispatch(setFilteredContacts(filteredContacts));
  };

  console.log("Filter");

  return (
    <FilterContainer>
      <FormControl fullWidth>
        <TextField
          id="filter-input"
          type="text"
          placeholder="Find contacts by name!"
          onChange={handleFilterChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </FilterContainer>
  );
};

export default Filter;
