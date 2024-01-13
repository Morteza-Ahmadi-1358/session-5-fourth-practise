import React, { useEffect, useState } from 'react'
import {getUsers} from '../database/Users'
import Loading from './Loading';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setUsers(getUsers());
        }, 2000);
        return () => {
            setUsers([]);
        }
    }, [refresh]);
    if (users.length === 0) {
        return <Loading />
    }
  return (
    <div className='border border-info rounded my-5 p-5 shadow'>
        {
            users.map((user) => {
                return <h5 className='my-3'>{user.username}</h5>
            })
        }
        <button onClick={() => {setRefresh(!refresh)}} type="button" className='btn btn-info fixed-top w-25'>بارگذاری مجدد</button>
    </div>
  )
}

export default UsersList