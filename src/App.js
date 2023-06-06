// File imports for the calculator application
import React, { useState } from 'react' // importing React for state management
import './App.css'; // importing styles for the calculator
import Navbar from './Component/Navbar';  // importing Navbar component


// Main App component
const App = () => {

    // Using useState hook to maintain the state for result
    const [result, setResult] = useState("");

    // Function to handle click events
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));

    }
    // Clear the result state
    const clear = () => {
        setResult("");

    }
    // Function to backspace events
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));

    }
    const claculate =() => {
        try {
            setResult(eval(result).toString());
            // Evaluate the expression in the result and set the result state to the evaluated value
        } catch(err) {
            setResult("Error")
            // They not found any value so called Error
        }
        
    }
    return (
        <>
        
        <div className = "container">
           <div>
                <Navbar/>
                <div className='mycalculator'></div>
           </div>
        
            <form>
               <input type="text" value={result}/> 
            </form>

            <div className='keypad'>
                <button  className='highlight' onClick={clear} id = "clear">Clear</button>

                <button  className='light'  onClick={backspace } id = "backspace">Del</button>
               
                {/* All the buttons in row  */}

                <button className='light' name="/" onClick={handleClick}>&divide;</button>


                <button name="7" onClick={handleClick}>7</button>

                <button name="8" onClick={handleClick}>8</button>

                <button name="9" onClick={handleClick}>9</button>

                {/* All the buttons in row  */}

                <button className='light' name="*" onClick={handleClick}>&times;</button>

                <button name="4" onClick={handleClick}>4</button>

                <button name="5" onClick={handleClick}>5</button>

                <button name="6" onClick={handleClick}>6</button>

                {/* All the buttons in row  */}

                <button className='light' name="-" onClick={handleClick}>&ndash;</button>

                <button name="1" onClick={handleClick}>1</button>

                <button name="2" onClick={handleClick}>2</button>

                <button name="3"onClick={handleClick}>3</button>
                
                {/* All the buttons in row  */}

                <button className='light' name="+" onClick={handleClick}>+</button>

                <button name="0" onClick={handleClick}>0</button>

                <button name="." onClick={handleClick}>.</button>

                <button className='highlight' onClick={claculate} id="result">=</button>

                

            </div>
            

        </div>
        </>
    );

    
}



export default App;