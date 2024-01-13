import React from 'react'

const Loading = () => {
  return (
    <div className='mt-5 pt-5'>
        <div className='my-3 mt-5 pt-5 text-info'>در حال بارگذاری اطلاعات</div>
        <div><i className='spinner-border text-danger'></i></div>
        <div className='my-3 text-info'>لطفا منتظر بمانید ...</div>
    </div>
  )
}

export default Loading