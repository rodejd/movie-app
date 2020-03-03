import React from 'react';
import Bus from './Bus';
import PropTypes from 'prop-types';



function Car({name,clas,rating}){

  return(
      <div>
    <h1>is  {name} {clas} {rating} / 5.0</h1>

      </div>
  )
}


const carList = [
                                                                                                                                                                                                       
  {
    id:1,
    name:"k7",
    cc:2200,
    rating:4.5
  },
  { id:2,
    name:"k9",
    cc:2700,
    rating:4.5
  },

  { id:3,
    name:"grandeur",
    cc:3300,
    rating:4.5
  },

  { id:4,
    name:"mohave",
    cc:4000,
    rating:4.5
  },

  { id:5,
    name:"sonata",
    cc:2000,
    rating:4.5
  }

]


function renderCar(list) {
    console.log(list);
    return <Car key={list.id} name = {list.name} clas={list.cc} rating={list.rating} />
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  cc: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired
}

  function App() {
  return (
    <div>
      <Bus love="mini bus" />
      <Car
          name = "k5"
      />
      
      {console.log(carList.map(renderCar))}
      {carList.map(renderCar)}
      {/*{carList.map(list => <Car name={list.name} clas={list.cc} /> )}*/}
    

    </div>
  );
}

export default App;
