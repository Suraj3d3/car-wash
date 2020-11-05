import React from 'react';
import './App.css';

function IntroDev(){
    return (
          <div className="introDiv">
             <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
        </div>
    );
  }
  
function Contactus()
{
    return(<IntroDev/>)
}

export default Contactus