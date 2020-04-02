import React from 'react';
import "./CoronaList.module.css";



function CoronaList({addr , name,stat, stock, lat, lng}){

    const message = {stat};

    let a = null;


    if(message === 'empty'){
        return a = '30';
    }
    console.log(a);
    console.log(message);
    return(

        <div>

            <p>{addr}</p>
            <p>{name}</p>
            <p>{stock}</p>
            {stat ==='empty' && <p className="s0">재고없음</p>}
            {stat ==='break' && <p className="s1">판매중지</p>}
            {stat ==='few' && <p className="s2">1~30</p>}
            {stat ==='plenty' && <p className="s3">100</p>}
        </div>
    )
}

export default CoronaList;