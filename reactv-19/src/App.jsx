//import React from "react";
import NetflixSeries, { Header,Footer} from "./components/NetflixSeries";

export const App = () => {
  // return ([<NetflixSeries key='1'/>,<NetflixSeries key='2'/>]
  // )
  return (
    <>
    <Header/>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer/>
    </>
  );
};

