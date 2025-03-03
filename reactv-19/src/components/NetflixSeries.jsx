const NetflixSeries = () => {
    const name = "Queen of Tears";
    //const rating= "8.2";
    const summary =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem doloribus ipsum ex? Sed facere earum eligendi pariatur nemo minima ab quam corporis in, possimus sequi at accusantium voluptates ea ratione!";
    let age = 19;
  
    // let canWatch = "Not Available";
    // if(age>=18) canWatch = "Watch Now";
  
    const canWatch = () => {
      if (age >= 18) return "Watch Now";
      return "Not Available";
    };
  
    const returnGenre = () => {
      const genre = "RomCom";
      return genre;
    };
  
    //Method1: not repeat yourself useless method
    // if(age<18){
    //   return (
    //     <div>
    //     <div>
    //       <img src="qot.jpg" alt="qot.jpg" width="50%" height="40%" />
    //     </div>
    //     <h2>Name: {name}</h2>
    //     <h3>Rating:{5+4.2}</h3>
    //     <p>Summary: {summary}</p>
    //     <p>Genre: {returnGenre()}</p>
    //     <button>Not Available</button>
    //   </div>
    //   )
    // }
    return (
      <div>
        <div>
          <img src="qot.jpg" alt="qot.jpg" width="50%" height="40%" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating:{5 + 4.2}</h3>
        <p>Summary: {summary}</p>
        <p>Genre: {returnGenre()}</p>
        {/* Method2: ternaryoperator */}
        {/* <button>{age>=18?"Watch Now": "Not Available"}</button> */}
        {/* Method3:  */}
        {/* <button>{canWatch}</button> */}
        {/* Method4: */}
        <button>{canWatch()}</button>
      </div>
    );
  };
  
  export default NetflixSeries;

  export const Header = () => {
    return <p>copyright @vanshu778</p>
}

export const Footer = () => {
    return <p>copyright @vanshu778</p>
}