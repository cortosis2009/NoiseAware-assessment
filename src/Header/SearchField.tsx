import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchField = () => {
    return (
        <TextField
        placeholder="Search all devices"
        InputProps={{
          className: 'app-search',
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    )
}

export default SearchField