import { useOutletContext } from 'react-router-dom';

export default function Result() {
  const context = useOutletContext();
  const data = context || []; 
  // console.log(data); 


  

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>
      {data.length > 0 ? (
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded shadow">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <img src={item.imgUrl} alt="image" />
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No results found.</p>
      )}
      <div className="sketchfab-embed-wrapper">
  {/* <iframe
    title="Neem Tree"
    // frameBorder="0"
    allowFullScreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking="true"
    execution-while-out-of-viewport="true"
    execution-while-not-rendered="true"
    // webShare=""
    src="https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed"
    className="w-96 h-96"
  ></iframe> */}
  
</div>

    </div>
  );
}
