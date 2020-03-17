import React, {Component} from 'react';
import {GoogleApiWrapper, Map} from "google-maps-react";


class GMap extends Component {


    render() {


        const mapStyles = {
            width: "100%",
            height: "100%"
        }
        return (


            <div>
                <Map google={this.props.google}
                     zoom={8}
                     style={mapStyles}
                     initialCenter={{lat: 35, lng: 47}}
                />
            </div>

        )
    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyApNxAYRoUUpDD9FeWZOQZHZBwABQisi-w"})(GMap);
