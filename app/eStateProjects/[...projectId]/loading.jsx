import React from 'react'

const Loading = () => {
  return (
    <div className={`bg-white flex justify-center items-center w-full h-[100vh]`}>
      <img src={`/assets/loadingicon.gif`} className={`w-[300px]`} alt="" />
    </div>
  )
}

export default Loading