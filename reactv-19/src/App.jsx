import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
import "./components/Netflix.module.css";
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EventPropagation";
import { State } from "./components/hooks/State";
import {DericedState} from "./components/DericedState"

export const App = () => {
  return (
  <section className="container">
    {/* <h1 className="card-heading">List of Best Netflix Series</h1>
    <NetflixSeries /> */}
    {/* <EventHandling/> */}
    {/* <EventProps/> */}
    {/* <EventPropagation/> */}
    {/* <State/> */}
    <DericedState/>
  </section>
   ) 
};

