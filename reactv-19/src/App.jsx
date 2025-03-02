//import React from "react";

export const App = () => {
  // return ([<NetflixSeries key='1'/>,<NetflixSeries key='2'/>]
   // )
  return(  
  <>
  <NetflixSeries/>
  <NetflixSeries/>
<NetflixSeries/>
<NetflixSeries/>
 <NetflixSeries/>
  </>
  );

};

const NetflixSeries = () => {
  const name = "Queen of Tears";
  //const rating= "8.2";
  const summary = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem doloribus ipsum ex? Sed facere earum eligendi pariatur nemo minima ab quam corporis in, possimus sequi at accusantium voluptates ea ratione!";
  const returnGenre = () =>{
    const genre = "RomCom";
    return genre;
  }
  return (
    <div>
    <div>
      <img src="qot.jpg" alt="qot.jpg" width="50%" height="40%" />
    </div>
    <h2>Name: {name}</h2>
    <h3>Rating:{5+4.2}</h3>
    <p>Summary: {summary}</p> 
    <p>Genre: {returnGenre()}</p>
  </div>
  )
}
