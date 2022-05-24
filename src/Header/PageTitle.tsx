import { TextField } from '@mui/material';
import React from 'react'

const PageTitle = () => {
    return (
        <div className="title-parent">
            <h1 className="app-title-text">Devices</h1>
            <TextField InputProps={{className: "app-search"}}/>
        </div>
    )
}

export default PageTitle;