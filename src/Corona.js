import React, {Component} from 'react';
import axios from 'axios';
import CoronaList from './CoronaList';

class Corona extends Component{


    constructor(props) {
        super(props);

        this.state = {
            stores: [],
            isLoading: true,
            kor:true
        }
    }


    getCorona = async () =>{

        const {data: {stores}} = await axios.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?page=1")
        const {data: {storeInfos}}  = await axios.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1");
        console.log(storeInfos);
        console.log(stores);

        this.setState(
            {stores, isLoading: false}
        )
    }

    componentDidMount() {

        this.getCorona();
        setTimeout( () => {
            this.setState( {kor : false});
        }, 2000);
    }

    render(){

        const {stores , isLoading} = this.state;



        return(
            <div>
                <section className="container">
                    {isLoading ? <p>Loading..</p>
                        :
                    <p>
                        {stores.map(List => {
                            return <CoronaList addr={List.addr} name={List.name} stock = {List.stock_at} stat = {List.remain_stat} lng = {List.lng} lat={List.lat}/>
                        })}

                    </p>
                    }

                </section>
            </div>

        )
    }
}

export default Corona;