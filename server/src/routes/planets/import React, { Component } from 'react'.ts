import React, { Component } from 'react';
import Navigation from './compontents/Navigation/Navigation';
import Logo from './compontents/Logo/Logo';
import ImageLinkForm from './compontents/ImageLinkForm/ImageLinkForm';
import Rank from './compontents/Rank/Rank';
import Particles from "react-particles";
// import Clarifai from "clarifai";
import ReactDOM from 'react-dom';
import './App.css';

// const Clarifai = import('clarifai');
 
// const app = new Clarifai.App({
//  apiKey: '4d354f6651a547b6ac441b5fc13bf704'
// });

const particlesOptions = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 800
            }
        }
      }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }
    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonSubmit = () => {
        console.log('click');

    render(); {
        return (
            <div className = "App">
                <Particles 
                params = {particlesOptions}
                />

                <Navigation />
                <Logo />
                <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <Rank />
                {/<FaceRecognition />/}
            </div>
        );
    }
}


export default App;
