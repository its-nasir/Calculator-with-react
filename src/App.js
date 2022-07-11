import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");
  const click = (event) => {
    setResult(result.concat(event.target.value))
  }
  const view = () => {
    setResult("");
  }
  const press = () => {
    setResult(eval(result).toString());
  }
  return (
    <div className='main'>
      <input type="text" placeholder='0' className='first1' value={result} />
      <input type="button" value='9' className='button' onClick={click} />
      <input type="button" value='7' className='button' onClick={click} />
      <input type="button" value='8' className='button' onClick={click} />
      <input type="button" value='6' className='button' onClick={click} />
      <input type="button" value='5' className='button' onClick={click} />
      <input type="button" value='4' className='button' onClick={click} />
      <input type="button" value='3' className='button' onClick={click} />
      <input type="button" value='2' className='button' onClick={click} />
      <input type="button" value='1' className='button' onClick={click} />
      <input type="button" value='0' className='button' onClick={click} />
      <input type="button" value='.' className='button' onClick={click} />
      <input type="button" value='+' className='button' onClick={click} />
      <input type="button" value='-' className='button' onClick={click} />
      <input type="button" value='*' className='button' onClick={click} />
      <input type="button" value='/' className='button' onClick={click} />
      <input type="button" value='%' className='button' onClick={click} />
      <input type="button" value='Clear' className='button button1' onClick={view} />
      <input type="button" value='=' className='button button1' onClick={press} />
    </div>
  );
}

export default App;
