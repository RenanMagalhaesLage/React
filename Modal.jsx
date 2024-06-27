import React, { useState } from "react";
import "./Modal.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

import { Link } from 'react-router-dom';



const Modal = ({isOpen, setClose}) => {
  const [boolOption, setBoolOption] = useState('');
  const [quantRange, setQuantRange] = useState('');
  const [rangeField, setRangeField] = useState('');
  const [rangeFirstOperator, setRangeFirstOperator] = useState('');
  const [rangeSecondOperator, setRangeSecondOperator] = useState('');

  const [boolQueryEnabled, setBoolQueryEnabled] = useState(true);
  const [rangeQueryEnabled, setRangeQueryEnabled] = useState(false);
  const [boolFieldsEnabled, setBoolFieldsEnabled] = useState(true);
  const [rangeFieldsEnabled, setRangeFieldsEnabled] = useState(false);

  const [radioValueOne, setRadioValueOne] = useState(false);
  const [radioValueTwo, setRadioValueTwo] = useState(false);


  const handleChangeRadioValueOne = () =>{
    setRadioValueOne(true);
    setRadioValueTwo(false)
  }
  const handleChangeRadioValueTwo = () =>{
    setRadioValueOne(false);
    setRadioValueTwo(true)
  }


  const handleBoolQueryToggle = () => {
    setBoolQueryEnabled(true);
    setBoolFieldsEnabled(true); 
    setRangeQueryEnabled(false);
    setRangeFieldsEnabled(false);
    setRangeField('');
    setQuantRange('');
    setRadioValueOne(false);
    setRadioValueTwo(false);

  };
  
  const handleRangeQueryToggle = () => {
    setRangeQueryEnabled(true);
    setRangeFieldsEnabled(true);
    setBoolQueryEnabled(false);
    setBoolFieldsEnabled(false); 
    setBoolOption('');
  };


  const handleChangeBoolOptions = (event) => {
    setBoolOption(event.target.value); 
  };

  const handleChangeRangeFirstOperator = (event) => {
    setRangeFirstOperator(event.target.value); 
  };

  const handleChangeRangeSecondOperator = (event) => {
    setRangeSecondOperator(event.target.value); 
  };

  const handleChangeRangeField = (event) => {
    setRangeField(event.target.value); 
  };

  const handleChangeQuantRange = (event) => {
    setQuantRange(event.target.value); 
  };

  const getLabelFirstQuery = () => {
    switch (boolOption) {
      case '2':
        return 'Should';
      case '3':
        return 'Must Not';
      case '6':
        return 'Should';
      default:
        return 'Must'; // Rótulo padrão caso nenhuma opção seja selecionada
    }
  };

  const getLabelSecondQuery = () => {
    switch (boolOption) {
      case '5':
        return 'Must Not';
      case '6':
        return 'Must Not';
      default:
        return 'Should'; // Rótulo padrão caso nenhuma opção seja selecionada
    }
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
            {/* Bool Query*/}

            <FormControlLabel
              control={<Switch checked={boolQueryEnabled} onChange={handleBoolQueryToggle} />}
              label="Bool Query"
            />


            <FormControl sx={{ m: 1, minWidth: 150, flex: 1 }}>
              <InputLabel id="demo-simple-select-helper-label" size="small">Bool Options</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={boolOption}
                label="Bool Options"
                size="small"
                onChange={handleChangeBoolOptions}
                disabled={!boolFieldsEnabled}
              >
                <MenuItem value="1">Only Must</MenuItem>
                <MenuItem value="2">Only Should</MenuItem>
                <MenuItem value="3">Only Must Not</MenuItem>
                <MenuItem value="4">Must e Should</MenuItem>
                <MenuItem value="5">Must e Must Not</MenuItem>
                <MenuItem value="6">Should e Must Not</MenuItem>
                <MenuItem value="7">Must, Should e Must Not</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="partsOfModal">
              {/* Campos de texto condicionais */}
              {boolOption === '4' || boolOption === '5' || boolOption === '6' ? (
              <>
                <TextField
                  id="firstQuery"
                  label={getLabelFirstQuery()}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  style={{ paddingRight: '20px' }}
                  // Aqui você pode adicionar lógica de onChange e value conforme necessário
                />
                <TextField
                  id="secondQuery"
                  label={getLabelSecondQuery()}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  // Aqui você pode adicionar lógica de onChange e value conforme necessário
                />
              </>
            ) : boolOption === '1' || boolOption === '2' || boolOption === '3' ? (
              <TextField
                id="singleQuery"
                label={getLabelFirstQuery()}
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                // Aqui você pode adicionar lógica de onChange e value conforme necessário
              />
            ) : boolOption === '7' ? (
              <>
                <TextField
                  id="firstQuery"
                  label={getLabelFirstQuery()}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  style={{ paddingRight: '20px' }}
                  // Aqui você pode adicionar lógica de onChange e value conforme necessário
                />
                <TextField
                  id="secondQuery"
                  label={getLabelSecondQuery()}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  style={{ paddingRight: '20px' }}
                  // Aqui você pode adicionar lógica de onChange e value conforme necessário
                />
                <TextField
                  id="thirdQuery"
                  label="Must Not"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                  // Aqui você pode adicionar lógica de onChange e value conforme necessário
                />
              </>
            ) : null}
          </div>

          {/* Terceira linha */}
          <div className="partsOfModal">
            {/* Year */}
            <FormControlLabel
              control={<Switch checked={rangeQueryEnabled} onChange={handleRangeQueryToggle} />}
              label="Range Query"
            />
            <FormControl sx={{ m: 1, minWidth: 150, flex: 1 }} style={{ paddingRight: '20px', marginTop: '40px'}}>
                <InputLabel id="range-fields" size="small" >Field</InputLabel>
                <Select
                  labelId="range-fields"
                  id="range-fields-select"
                  value={rangeField}
                  label="Field"
                  onChange={handleChangeRangeField}
                  size="small"
                  disabled={!rangeFieldsEnabled}
                >
                  <MenuItem value="reading_time">Reading Time</MenuItem>
                  <MenuItem value="dt_creation">Date Creation</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 150, flex: 1 }}>
              <FormLabel id="manyOperators">How Many Operators?</FormLabel>
              <RadioGroup
                aria-labelledby="manyOperators"
                name="controlled-manyOperators"
                onChange={handleChangeQuantRange}
              >
                <FormControlLabel value="1" control={<Radio checked={radioValueOne} onChange={handleChangeRadioValueOne}/>} label="1" disabled={!rangeFieldsEnabled}/>
                <FormControlLabel value="2" control={<Radio checked={radioValueTwo} onChange={handleChangeRadioValueTwo}/>} label="2" disabled={!rangeFieldsEnabled}/>
              </RadioGroup>
          </FormControl>        

          </div>
          <div className="partsOfModal" >
            <FormGroup className="partsOfModal">
                {quantRange === '2' ? (
                  <>
                  <div className="partsOfModal" style={{ display: 'flex', alignItems: 'center' }}>
                    <FormControl sx={{ m: 1, minWidth: 200 }} style={{ paddingRight: '20px', marginTop: '15px'}}>
                        <InputLabel id="firstOperatorLabel" size="small">First Operator</InputLabel>
                        <Select
                            labelId="firstOperatorLabel"
                            id="firstOperator-select"
                            value={rangeFirstOperator}
                            onChange={handleChangeRangeFirstOperator}
                            label="First Operator"
                            size="small"
                        >
                            <MenuItem value="gt">Greater Than</MenuItem>
                            <MenuItem value="lt">Less Than</MenuItem>
                            <MenuItem value="gte">Greater Than Equal To</MenuItem>
                            <MenuItem value="lte">Less Than Equal To</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="firstRange"
                        label="First Range"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        // Adicione aqui lógica de onChange e value conforme necessário
                    />
                  </div>

                  <div className="partsOfModal " style={{ display: 'flex', alignItems: 'center' }}>
                  <FormControl sx={{ m: 1, minWidth: 200}} style={{ paddingRight: '20px', marginTop: '15px'}}>
                        <InputLabel id="secondOperator" size="small" >Second Operator</InputLabel>
                        <Select
                          labelId="secondOperatorLabel"
                          id="secondOperator-select"
                          value={rangeSecondOperator}
                          label="Second Operator"
                          onChange={handleChangeRangeSecondOperator}
                          size="small"
                        >
                          <MenuItem value="gt">Greather Than</MenuItem>
                          <MenuItem value="lt">Less Than</MenuItem>
                          <MenuItem value="gte">Greather Than Equal To</MenuItem>
                          <MenuItem value="lte">Less Than Equal To</MenuItem>
                        </Select>
                    </FormControl>
                      <TextField
                        id="secondRange"
                        label="Second Range"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        // Aqui você pode adicionar lógica de onChange e value conforme necessário
                      />
                  </div>
                    
                  </>
                ) : quantRange === '1' ? (
                  <div className="partsOfModal">

                    <FormControl sx={{ m: 1, minWidth: 200 }} style={{ paddingRight: '20px', marginTop: '15px'}}>
                        <InputLabel id="firstOperatorLabel" size="small">Operator</InputLabel>
                        <Select
                            labelId="firstOperatorLabel"
                            id="firstOperator-select"
                            value={rangeFirstOperator}
                            onChange={handleChangeRangeFirstOperator}
                            label="Operator"
                            size="small"
                        >
                            <MenuItem value="gt">Greater Than</MenuItem>
                            <MenuItem value="lt">Less Than</MenuItem>
                            <MenuItem value="gte">Greater Than Equal To</MenuItem>
                            <MenuItem value="lte">Less Than Equal To</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="oneRange"
                        label="Range"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        size="small"
                        // Aqui você pode adicionar lógica de onChange e value conforme necessário
                      />
                  </div>
                  
                  
                ) : null}
            </FormGroup>

          </div>
          <Link to="/result" style={{ textDecoration: 'none' }}>
            <button className="buttonSearch" id="secondButton" type='button' style={{ fontWeight: 'bold' }}>
              Search
            </button>
          </Link>
        </div>
        
      </div>
    );
  }

  return null;
};

export default Modal;
