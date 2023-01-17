import { useEffect, useState } from 'react';
import '../scss/App.scss';
import axios from 'axios';

function App() {

  useEffect(() => {
    (async function() {
      console.log(await (await axios.get('http://localhost:8080/recipes')).data);
    })();
  }, []);

  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>Recipe React App</h1>
      </div>
    </div>
  );
}

export default App;
