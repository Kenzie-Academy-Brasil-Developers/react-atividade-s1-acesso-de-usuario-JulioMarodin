import { useState } from 'react';
import './App.css';
import RestrictedPage from './Components/RestrictedPage';

function App() {
  const user = 'Julio';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        />
      </header>
    </div>
  );
}

export default App;
