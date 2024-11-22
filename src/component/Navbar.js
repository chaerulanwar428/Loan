import React from 'react'

function Navbar() {
  return (
    <header className="flex bg-white justify-between items-center border-b-2 p-4">
    <h1 className="text-5xl text-[#646567]">Dashboard</h1>
    <div className="flex items-center">
        <div  className='flex justify-center items-center border-l-2 h-[28px] px-2'><img src="/notification.svg" className='h-[28px]'/><img className='flex justify-center h-[10px] px-1' src="downGrey.svg"/></div>
        <div className="relative border-x-2 px-2">
            <button className="flex items-center text-gray-700">
                <span>YOHANNES AFFANDY</span>
                <img className='flex justify-center items-center h-[10px] px-1' src="downGrey.svg"/>
            </button>
        </div>
    </div>
</header>
  )
}

export default Navbar