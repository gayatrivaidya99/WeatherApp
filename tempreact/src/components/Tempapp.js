import React,{useEffect,useState} from "react";
import "./css/style.css";

const Tempapp = () =>{

  const [city,setCity]= useState(null);
  const [search,setSearch]= useState("Mumbai");
  useEffect( () => {
    const fetchApi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8c34983a27c1bdee1535246d4aaf8307`;
      const response =await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
   
  }, [search] )

  return(
    <>
    <div className="box">
      <div className ="inputData">
        <input type="search" value={search} className="inputField" onChange={ (event) =>{setSearch(event.target.value)}} />
      </div>
      {
        !city ? (
          <p className="errorMsg">No data found</p>
        ): (
          <div>
          <div className="info">
        <h2 className="location">
        <i className="fas fa-street-view"></i>
        {search} </h2>
        <h1 className="temp">{city.temp}°C </h1>
      </div> 
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      </div>
 
        )}

      </div>
      </>

   
  
  )
}

export default Tempapp;
