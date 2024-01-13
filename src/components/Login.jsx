import React, { useEffect, useState } from 'react'
import Button from './Button'

const Login = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(username, password);
  }
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (username.length != 0 || password.length != 0) {
        setIsDisabled(false);
      }
      else{
        setIsDisabled(true);
      }
    }, 2000);
    return () => {
      clearTimeout(timerId);
    }
  }, [username, password]);
  return (
    <div>
      <form action="" onSubmit={submitHandler} className='form-control w-50 mx-auto my-5'>
        <label className='my-2' htmlFor="username">نام کاربری</label>
        <input className='my-2 form-control' type="text" name="username" id="username" placeholder='نام کاربری' onChange={usernameChangeHandler}  />
        <label className='my-2' htmlFor="password">کلمه عبور</label>
        <input className='my-2 form-control' type="password" name="password" id="password" placeholder='کلمه عبور' onChange={passwordChangeHandler} />
        <Button isDisabled={isDisabled}/>
      </form>
    </div>
  )
}

export default Login