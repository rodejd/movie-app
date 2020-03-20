import produce from 'immer';
import React from 'react';
import {Button} from "reactstrap";
import Slider from "./Bus";
import Alert from "reactstrap/es/Alert";



class Test extends React.Component{

    state = {
        count : 0
    };


    plus = () => {
        this.setState(
            {count : this.state.count +1}
        )

    };

   minus = () => {
       this.setState(
            produce(draft => {
                draft.count--;
            })
       );
};


    componentDidMount() {
        console.log("component render");
    }z

    componentDidUpdate() {
        console.log("update");
    }

    componentWillUnmount() {
        console.log("die component");

    }

    render(){
        console.log("render 됫어");
        return (

            <div>
            <h1>카운트 {this.state.count}</h1>
                <button onClick={this.plus}>plus</button>
                <button onClick={this.minus}>minus</button>

                <Button color="danger">hi</Button>
                <Alert color="success">great</Alert>
            </div>
        );
    }
}

export default Test;