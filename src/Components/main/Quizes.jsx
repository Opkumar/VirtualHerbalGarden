import React from 'react'

function Quizes() {
  return (
    <>
    <div className="flex flex-col ml-10 justify-center my-10 mb-24 gap-5 bg-white">
      <h1 className="text-pink-400 text-3xl font-semibold mb-6">Let's Play</h1>
      <div className="bg-blue-500 text-white p-8 rounded-2xl w-96 text-center shadow-md cursor-pointer">
        <p className="text-blue-200 text-sm mb-2">Level 1</p>
        <div className="flex  justify-center items-center gap-10">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <i className="fa-solid fa-arrow-right text-2xl"></i>
        </div>
      </div>
      <div className="bg-blue-500 text-white p-8 rounded-2xl w-96 text-center shadow-md  cursor-pointer">
        <p className="text-blue-200 text-sm mb-2">Level 2</p>
        <div className="flex  justify-center items-center gap-10">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <i className="fa-solid fa-arrow-right text-2xl"></i>
        </div>
      </div>
      <div className="bg-blue-500 text-white p-8 rounded-2xl w-96 text-center shadow-md cursor-pointer">
        <p className="text-blue-200 text-sm mb-2">Level 3</p>
        <div className="flex  justify-center items-center gap-10">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <i className="fa-solid fa-arrow-right text-2xl"></i>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Quizes;
