import React, {useState} from 'react';
import Login from './Login';

function App() {
  const [userId, setUserId] = useState('');

  return (<div className='h-screen'>
    {userId}
    <Login onIdSubmit={setUserId}/>
  </div>);
}

export default App;
