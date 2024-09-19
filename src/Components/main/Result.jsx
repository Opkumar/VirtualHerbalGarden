import { useOutletContext } from "react-router-dom";

export default function Result() {
  const context = useOutletContext();
  const data = context || [];
  // console.log(data);

  return (
    <div className="p-4">
      {data.length > 0 ? (
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded shadow">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <img src={item.imgUrl} alt="image" className="h-96 rounded-md" />
              <p>{item.description}</p>
              <iframe
            // title="Neem Tree "
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            src={item.threeDimensionalModelUrl}
            className="w-96 h-96 mt-10"
          ></iframe>
            </li>
          ))}
          
        </ul>
      ) : (
        <div className="text-gray-600 min-h-[70vh] grid justify-center items-center">
          <div>
            <h2 className="text-4xl">Search Result</h2>
            <p className="text-center text-2xl">No results found.</p>
          </div>
        </div>
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
