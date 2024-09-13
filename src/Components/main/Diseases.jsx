import {useState} from 'react'
import data from "../../../database.json"

function Diseases() {
  return (
    <>
     <div className="flex flex-wrap  ">
       <div className="min-h-screen bg-gray-50 p-6 bg-gradient-to-br from-blue-100  to-green-100 ">
         <div className="flex  justify-center  gap-6  flex-wrap">
           {data.Diseases.map((disease, index) => (
             <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-[699px] flex-wrap bg-gradient-to-br from-blue-200  to-red-200 ">
               <div className="flex justify-center mb-2">
              <div className="">
               <h2 className="text-xl font-semibold mb-2">{disease.name}</h2>
               <p className="text-gray-600 mb-4">{disease.symptoms}</p>
              </div>
               <img className='h-[26rem] w-[26rem] rounded' src={disease.imgUrl} alt="image " />
               </div>
               {/* <h2 className='font-bold'>Step by Step recovery using {disease.recover}</h2>
               <div className="flex justify-between items-center">
                <p>{disease.steps[0]}</p>
               </div> */}
             </div>
           ))}
          </div>
        </div>
     </div> 
      
    </>
  )
}

export default Diseases
