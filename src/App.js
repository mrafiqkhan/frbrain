import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';
const app = new Clarifai.App({
  apiKey: 'b25ea1bb400447fc99780f2de06d3590'
 });
const particlesOptions={particles: { number:{value:30, density:{enable:true,value_area:800}}, line_linked: { shadow: {enable: true, color: "#3CA9D1", blur: 5}}}};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
      imageUrl:'',
       box:{},
       route: 'signin',
       isSignedIn:false
    }
  }

  onInputChange = (event)=>{
    this.setState({input:event.target.value});
  }

  calculateFaceLocation = (data) =>{
    //bla bla bla
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow:height - (clarifaiFace.bottom_row * height)

    }
}

displayFaceBox = (box) =>{
  console.log(box);
  this.setState({box:box});
}
  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input});
    //output response
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    if(route==='signout'){
      this.setState({isSignedIn:false});
    }else if(route==='home'){
      this.setState({isSignedIn:true});
    }
    this.setState({route:route});
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route ==='home' 
          ? <div>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
        </div>
          
          :(this.state.route==='signin'
          ? <Signin  onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />) 
          
         
        }
      </div>

    );
  }
}

export default App;
