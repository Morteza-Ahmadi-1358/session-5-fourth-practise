import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import {getUsers} from './database/Users'
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users= getUsers();
  const token = localStorage.getItem("token");
  let isValidUsername = false;
  let isValidPassword = false;
  useEffect(() => {
    if (token === "Ok") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (username, password) => {
    users.map((user) => {
      if (user.username != username) {
        isValidUsername = false;
      }
      if (user.username === username && user.password != password) {
        isValidUsername = true;
        isValidPassword = false;
      }
      if (user.username === username && user.password === password) {
        isValidUsername = true;
        isValidPassword = true;
        localStorage.setItem('token', 'Ok');
        setIsLoggedIn(true);
      }
    })
    if (!isValidUsername) {
      alert('کاربری با این نام وجود ندارد!');
    }
    if (!isValidPassword) {
      alert('کلمه عبور نادرست است!');
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  return (
    <div className="w-100">
      <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Welcome onLogout={logoutHandler} />}
    </div>
  );
}

export default App;
