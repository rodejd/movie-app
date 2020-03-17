import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';



function CoronaList({addr , name,stat, stock, lat, lng}){



    return(
        <div>


            <p>{addr}</p>
            <p>{name}</p>
            <p>{stock}</p>
            <p>{stat}</p>

        </div>
    )
}

export default CoronaList;