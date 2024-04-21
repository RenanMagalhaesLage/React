import React from "react";
import "./Modal.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';


const Modal = ({isOpen, setClose}) => {
  const [sort, setSort] = React.useState('');
  const [condition, setCondition] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleCondicion = (event) => {
    setCondition(event.target.value);
  };

  if(isOpen){
    return (
      <div className="backModal">
        <div className="contentModal">
          <p>Filters</p>
          <button className="closeIcon" onClick={setClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M16.396 7.757a1 1 0 0 1 0 1.415l-2.982 2.981l2.676 2.675a1 1 0 1 1-1.415 1.415L12 13.567l-2.675 2.676a1 1 0 0 1-1.415-1.415l2.676-2.675l-2.982-2.981A1 1 0 1 1 9.02 7.757L12 10.74l2.981-2.982a1 1 0 0 1 1.415 0"/>
                <path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"/>
              </g>
            </svg>
          </button>
          
          {/* Primeira linha */}
          <div className="partsOfModal">
            {/* Sort By */}
            <FormControl sx={{ m: 1, minWidth: 150, flex: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sort}
                label="SortBy"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Title">Title</MenuItem>
                <MenuItem value="Time">Time reading</MenuItem>
                <MenuItem value="Date">Date</MenuItem>
              </Select>
            </FormControl>

            {/* Results Order */}
            <FormControl sx={{ m: 1, minWidth: 150, flex: 1 }}>
              <FormLabel id="demo-controlled-radio-buttons-group">Results Order</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel value="asc" control={<Radio />} label="Ascendent" />
                <FormControlLabel value="desc" control={<Radio />} label="Descendent" />
              </RadioGroup>
            </FormControl>
          </div>
          
          {/* Segunda linha */}
          <div className="partsOfModal">
            {/* Year */}
            <div className="alinharText">
              <TextField id="outlined-basic" label="Year" variant="outlined" style={{ flex: 1, marginRight: '16px' }} />
            </div>
            {/* Year Conditions */}
            <FormControl sx={{ m: 1, minWidth: 150, flex: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">Year Conditions</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={condition}
                label="YearCondition"
                onChange={handleCondicion} 
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value=">">Greater Than</MenuItem>
                <MenuItem value="<">Less Than</MenuItem>
                <MenuItem value="=">Equal To</MenuItem>
                <MenuItem value=">=">Greater Than or Equal To</MenuItem>
                <MenuItem value="<=">Less Than or Equal To</MenuItem>
              </Select>
            </FormControl>
            
          </div>
        </div>
      </div>
    );
  }
    
  return null;
};

export default Modal;
