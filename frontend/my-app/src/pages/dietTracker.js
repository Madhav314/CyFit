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
  var total;
  var numChecked = 0;
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Food: '', calories: '' },
  ]);
  const addGoal = () => {
    goal = window.prompt("Enter your goal");
  
    //print goal at top of page
    document.getElementById("Goal").innerHTML = goal;
    return goal;
  }
  //print goal
  var total = 0;
  const PrintTotal = () => {
    document.getElementById("Total").innerHTML = total;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    //for each input field, check if it is empty
    //if it is empty, alert the user
    //if it is not empty, add it to the database
    //then clear the input fields
    //then alert the user that the food has been added
    for(let i = 0; i < inputFields.length; i++){
    if(parseInt(inputFields[i].calories) > 0 && inputFields.length > numChecked)
    {
      total = Number(total)+ Number(inputFields[i].calories);
      numChecked++;
      //const response = await axios.post(inputFields[i].Food+"/"+inputFields[i].calories);
    }
    
    }
    PrintTotal();
    
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
    setInputFields([...inputFields, { id: uuidv4(),  Food: '', calories: '' }])
   
  }
  //function to clear all input fields
  const handleClear = () => {
    setInputFields([{ id: uuidv4(), Food: '', calories: '' }])
    total = 0;
  }
  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  let navigate = useNavigate();
        
  return (
    <div className="App">
        <body className ="App-body">
        <h2 style={{margin: "0.1em", color: 'white'}} >Diet Tracker</h2>

        <p id= "Goal" className="Goal">
      
        Click + to add goal 
        <IconButton
              color="secondary"
              //On click function will print the value of the input field
              onClick={addGoal}
             
            >
              <AddIcon />
            </IconButton>
        </p>
        <p id="TotalLet" className="Total">
        Current Caloric intake:<br></br>
        </p>
        <p id="Total" className="Goal" onLoad={PrintTotal}>

        </p>
   
        <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="Food"
              label="Food Name"
              variant="filled"
              value={inputField.Food}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="calories"
              label="Calories"
              variant="filled"
              value={inputField.calories}
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
          //type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Diet
        </Button>
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon></Icon>}
          onClick={handleSubmit}
        >Total Up</Button>
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
