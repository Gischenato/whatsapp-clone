import React, {useState} from 'react';
import Login from './Login';

function App() {
  const [userId, setUserId] = useState('');

  return (<>
    {userId}
    <Login onIdSubmit={setUserId}/>
  </>);
}

export default App;
