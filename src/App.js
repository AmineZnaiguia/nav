import React from 'react';
import './App.css';
import Nav from './navbar';
const tabnav =[{
  link:"home"
},
{
  link:"sevices",drop:["for enterpreneur","for students","for hobbyists"]
},
{
  link:"contact"
}]
function App() {
  return (
    <div className="App">
      
    <Nav x={tabnav}/>
   
    </div>
  );
}

export default App;
