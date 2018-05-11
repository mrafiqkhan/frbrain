import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

import './App.css';
const particlesOptions={particles: { number:{value:30, density:{enable:true,value_area:800}}, line_linked: { shadow: {enable: true, color: "#3CA9D1", blur: 5}}}};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
      {
        /*
      <FaceRecognition />} */

      }
      </div>

    );
  }
}

export default App;
