import React, {Component} from 'react';


class About extends Component {


    componentDidMount() {

        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
            alert("이전페이지로 이동합니다.");

        }
    }

    render() {

        const {location} = this.props;
        if(location.state){
            return <h2>{location.state.title}</h2>
        }
        else {
            return null;
        }
    }
}

export default About;