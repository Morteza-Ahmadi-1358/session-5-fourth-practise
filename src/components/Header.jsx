import React from 'react'

const Header = (props) => {
  return (
    <div className='d-flex justify-content-between align-items-center bg-danger text-white p-5'>
      <div className=''>
        <h3>تحلیل‌داده</h3>
      </div>
      {props.isLoggedIn && <div className='dv_logout' onClick={props.onLogout}>خروج</div>}
    </div>
  )
}

export default Header