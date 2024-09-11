import React from 'react';
import './App.css';
import LeftCard from './components/leftCard';
import RightCard from './components/rightCard';
import DataLoadingCard from './components/dataLoadingCard';

class App extends React.Component {
  state = {
  city:"",
  country:"",
  temp:""
  }
  componentDidMount(){
    if(navigator.geolocation){
      this.getPosition()
      .then((position)=>{
        
        this.makeApiCall(position.coords.longitude,position.coords.latitude)
      })
    }else{
      alert("Geolocation not available")
    }  
  }
  
  makeApiCall = async (lon,lat) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8d67126e29a768c1e37ad97a163876f`
    ).then(resp => resp.json());
    
    this.setState({city:data.name,country:data.sys.country,temp:data.main.temp})
  }
  getPosition=(options)=>{
    return new Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(resolve,reject,options);
    });
  }
  render(){
    const{city,country,temp}=this.state
    const check=city!==""?true:false
    return <>
    <div className="bgContainer">
     {check&&<LeftCard city={city} country={country} temp={temp}></LeftCard>}
     {city!==""?<RightCard city={city}></RightCard>:""}
     {!check&&<DataLoadingCard height={80} width={80}/> }
    </div>
    </>
  }
}

export default App