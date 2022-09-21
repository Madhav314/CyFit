import './css/App.css';
import React, { useState } from 'react';
import logo from './images/logo.svg';
import profile from './images/profile.png';
import dietTable from './dietTable.js';
import { useNavigate } from 'react-router-dom';
import './css/main.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import clipboard from './images/clipboard.png';
import lifestyle from './images/lifestyle 1.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import email from  './images/email.png';
import twitter from './images/twitter.png';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import axios from '../api/axios';
const useStyles = makeStyles((theme) => ({
  root: {
    background: '(45deg, #FE6B8B 30%, #FF8E53 90%)',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))
export default function(){
    
  var goal;
  var totalReps;
  var numChecked = 0;
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Name: '', Sets: '', Reps: '', Weight: '' },
  ]);

   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    //for each input field, check if it is empty
    //if it is empty, alert the user
    //if it is not empty, add it to the database
    //then clear the input fields
    //then alert the user that the food has been added
    /*
    for(let i = 0; i < inputFields.length; i++){
    if(parseInt(inputFields[i].calories) > 0 && inputFields.length > numChecked)
    {
      total = Number(total)+ Number(inputFields[i].calori);
      numChecked++;
      
    }
    
    }
    PrintTotal();
    */
  };
 
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
  
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  Name: '', Sets: '', Reps: '', Weight: '' }]);
   
  }
  const handleClear = () => {
    setInputFields([{ id: uuidv4(), Name: '', Sets: '', Reps: '', Weight: '' }])
    //total = 0;
  }
  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  numChecked = 0;
  for(let i = 0; i < inputFields.length; i++)
  {
    if(inputFields[i].Name !== '' && inputFields[i].Sets !== '' && inputFields[i].Reps !== '' && inputFields[i].Weight !== '' && inputFields.length > numChecked)
    {
      numChecked++;
      //const response = await axios.post(inputFields[i].Name+"/"+inputFields[i].Sets+"/"+inputFields[i].Reps+"/"+inputFields[i].Weight);
    }
  }

  let navigate = useNavigate();
        
  return (
    <div className="App">
        <body className ="App-body">
        <h2 style={{margin: "0.1em", color: 'white'}} >Workout Log</h2>

   
        <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="Workout"
              label="Name"
              variant="filled"
              value={inputField.name}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
                name="Sets"
                label="Sets"
                variant="filled"
                value={inputField.sets}
                onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
                name="Reps"
                label="Reps"
                variant="filled"
                value={inputField.reps}
                onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
                name="Weight"
                label="Weight"
                variant="filled"
                value={inputField.weight}
                onChange={event => handleChangeInput(inputField.id, event)}
            />
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => navigate('/workout')}
          className={classes.button}
        >
        Front Workouts
        </Button>
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon></Icon>}
          onClick={() => navigate('/backside')}
        >Back Workouts</Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<Icon></Icon>}
          onClick={handleClear}
        >Clear</Button>
        
      </form>
      </body>
      <footer className="App-footer">
            <div>
            <img src={youtube} className="App-youtube" alt="youtube" />
            <img src={instagram} className="App-instagram" alt="instagram" />
            <img src={email} className="App-email" alt="email" />
            <img src={twitter} className="App-twitter" alt="twitter" />
            
            </div>
        </footer>
      </div>

    
  );
}
