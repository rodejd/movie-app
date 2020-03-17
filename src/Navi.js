import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navi extends Component {



    constructor(props) {
        super(props);

        this.state = {
            time : true
        }
    }



    componentDidMount(){
       this.timerOn();

    }

    timer = () => {
        const date = new Date();
        const h = date.getHours() - 12;
        const m = date.getMinutes();
        const s = date.getSeconds();
        var t = "현재 시각 "+h + " : " + m + " :" + s;


        if(h<12) {

            t = "현재 시각 오후 "+h + " : " + m + " :" + s;
            var area = document.getElementById("timer");
            area.innerText = t;
            this.setState(
                {time: false}
            )
        }
        else{
            t = "현재 시각 오전 "+ h + " : " + m + " :" + s;
            var area = document.getElementById("timer");
            area.innerText = t;
            console.log(h);

        }

    }

    timerOn = () => {
        this.timer();
        setInterval(this.timer , 1000);


    }




    render() {

        const time = true;

        return (

            <div>

                <Link to="/">Home</Link>&nbsp;
                <Link to="/movie">List</Link>&nbsp;
                <Link to="/test">Test</Link>&nbsp;
                <Link to="/about">about</Link>&nbsp;
                <Link to="/corona">코로나현황</Link>&nbsp;
                <Link to="/map">map</Link>&nbsp;
                <p id="timer"></p>
                <div>{time ? <p>(오후)</p>:<p>(오전)</p>}</div>


            </div>

        );
    }
}


export default Navi;