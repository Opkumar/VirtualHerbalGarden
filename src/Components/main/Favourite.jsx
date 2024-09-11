import {useState} from 'react'
import useStore from '../utils/useStore';
import { useNavigate } from 'react-router-dom';
import data from "../../../database.json"

function Favourite() {
  // const {indexNum } = useStore();
  
  const navigate = useNavigate();
  const [clickedStates, setClickedStates] = useState(
    data.plants.map(() => false) 
  );
  
  const { indexNum} = useStore();

  const newIndexNum = [...new Set(indexNum)]
  // console.log(indexNum)


  return (
    <>
     <div className="min-h-screen bg-gray-50 p-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {newIndexNum.map((plant, index) => (
             <div key={index} className="bg-white p-4 rounded-lg shadow-lg ">
               <div className="mb-4">
                 <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                   {data.plants[plant].category}
                 </span>
               </div>
               <div className="flex justify-center mb-2">
               <img className='h-[26rem] w-[26rem] rounded' src={data.plants[plant].imgUrl} alt="image " />
               </div>
               <h2 className="text-xl font-semibold mb-2">{data.plants[plant].name}</h2>
               <h3 className=''><span className='font-bold text-[16px]'>Botanical Name : </span> {data.plants[plant].botanicalName}</h3>
               <p className="text-gray-600 mb-4">{data.plants[plant].description[0]}</p>
               <div className="flex justify-between items-center">
               <button onClick={() => navigate(`/Results?query=${data.plants[plant].name}`)}  className="bg-blue-600 text-white px-4 py-2 rounded-md">
                 Learn More
               </button>
              
               </div>
             </div>
           ))}
          </div>
      </div>
    </>
  )
}

export default Favourite
