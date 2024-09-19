import { useState, useEffect } from "react";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { Outlet } from "react-router-dom";
import database from "../database.json";
import { useSearchParams } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query]);

  const fetchResults = () => {
    const filteredData = database.plants.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredData);
    const filteredData1 = database.Diseases.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredData.length > 0) {
      setData(filteredData);
    } else if (filteredData1.length > 0) {
      setData(filteredData1);
    } else {
      setData([]);
    }
  };

  return (
    <div className="overflow-hidden">
      <Header onSearch={fetchResults} />
      <Outlet context={data} />
      <Footer />
    </div>
  );
}

export default App;
