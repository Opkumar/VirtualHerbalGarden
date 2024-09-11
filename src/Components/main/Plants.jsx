import {useState ,useEffect} from 'react'
import data from "../../../database.json"
import { useNavigate } from 'react-router-dom';
import useStore from '../utils/useStore';


function Plants() {
  const navigate = useNavigate();
  // const [clickedStates, setClickedStates] = useState(
  //   data.plants.map(() => false) 
  // );

  // const { clickCount, incrementClickCount, decrementClickCount ,indexValue, clickedStates, setClickedStates } = useStore();

  const {
    clickedStates,
    initializeClickedStates,
    toggleClickedState,
    clickCount,
  } = useStore();

  useEffect(() => {
    initializeClickedStates(data.plants.length);
  }, [data.plants.length, initializeClickedStates]);

  const handleClick = (index) => {
    toggleClickedState(index); // Toggle clicked state and update the count
  };

  // const handleClick = (index) => {
  //    indexValue(index)
  //   const updatedStates = [...clickedStates];
  //   const wasClicked = updatedStates[index];
  //   updatedStates[index] = !wasClicked;
  //   setClickedStates(updatedStates);
  //   wasClicked ? decrementClickCount() : incrementClickCount();
  // };

  // const handleClick = (index) => {
  //   setClickedStates(index);
  //    wasClicked ? decrementClickCount() : incrementClickCount();
  // };
  return (
    <>
     <div className="min-h-screen bg-gray-50 p-6">
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {data.plants.map((plant, index) => (
             <div key={index} className="bg-white p-4 rounded-lg shadow-lg ">
               <div className="mb-4">
                 <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                   {plant.category}
                 </span>
               </div>
               <div className="flex justify-center mb-2">
               <img className='h-[26rem] w-[26rem] rounded' src={plant.imgUrl} alt="image " />
               </div>
               <h2 className="text-xl font-semibold mb-2">{plant.name}</h2>
               <h3 className=''><span className='font-bold text-[16px]'>Botanical Name : </span> {plant.botanicalName}</h3>
               <p className="text-gray-600 mb-4">{plant.description[0]}</p>
               <div className="flex justify-between items-center">
               <button onClick={() => navigate(`/Results?query=${plant.name}`)}  className="bg-blue-600 text-white px-4 py-2 rounded-md">
                 Learn More
               </button>
               <div
                  onClick={() => handleClick(index)} 
                  className={`mr-5 text-3xl ${
                    clickedStates[index] ? 'text-red-500' : 'text-[#49A010]'
                  }`}
                >
               <i className="fa-solid fa-heart"></i>
               </div>
               </div>
             </div>
           ))}
          </div>
        </div>
    </>
  )
}

export default Plants
