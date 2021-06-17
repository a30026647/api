
import{render} from '@testing-library/react';
import React, {Component} from 'react';
import SCP from "./SCP.js";

class App extends Component
{

  render()
  {
    return(
     <SCP scp={this.state.scp}/>
    );
  }

  state={scp:[]}

  componentDidMount()
  {
    fetch('https://scpdatabase-07de.restdb.io/rest/scp221',
    {
      method: 'GET',
      headers:{
        "cache-control":"no-cache",
        "x-apikey":"60bae988f2a01c34b8ed352d",
        "content-type":"application/json",
      }
    })
    .then(result=>result.json())
    .then((data)=>{this.setState({scp:data})})
    .catch(console.log);
  }
}
export default App;