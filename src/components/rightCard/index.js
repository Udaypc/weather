import { Component } from "react";
import './index.css'
import { TiWeatherCloudy } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import DataLoadingCard from '../dataLoadingCard/index.js'
class RightCard extends Component{
    state={humidity:"",pressure:"",cityName:"",country:"",windSpeed:"",main:"",temp:"",input:""}
    componentDidMount (){
        const{city}=this.props
        this.makeApiCall(city)
    }
    makeApiCall=async (city)=>{
        const apiData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8d67126e29a768c1e37ad97a163876f`)
        const jsonData= await apiData.json()
    
        console.log(jsonData)
        this.setState({humidity:jsonData.main.humidity,pressure:jsonData.main.pressure,cityName:jsonData.name,country:jsonData.sys.country,windSpeed:jsonData.wind.speed,main:jsonData.weather[0].main,temp:jsonData.main.temp})

    }
    onInput=(event)=>{
        console.log(event.target.value)
        this.setState({input:event.target.value})
    }
    searchIconClick=()=>{
        const{input}=this.state
        
        if(input!==""){
            this.makeApiCall(input)
            this.setState({input:""})
        }else{
            alert("Please enter the input..!")  
        }
    }
    render(){
        const{cityName,humidity,pressure,country,windSpeed,main,temp,input}=this.state
        const check=temp!==""?true:false
        return <>
        <div className="rightCard">
          {check&&<div>
            <TiWeatherCloudy className="weatherIcon" />
            <h1 className="mainHeading">{main}</h1>
            <div className="searchContainer">
              <input value={input} onChange={this.onInput} type="search" className="input" placeholder="Search any city...."/>
              <FaSearch className="searchIcon"  onClick={this.searchIconClick}/>
            </div>
            <p className="cityName">{cityName}, {country}</p>
            <hr className="hrLine"/>
            <div className="container">
              <p>Temperature</p>
              <p>{Math.round(temp-273.15)}°C</p>
            </div>
            <hr className="hrLine2"/>
            <div className="container">
              <p>Humidity</p>
              <p>{humidity}</p>
            </div>
            <hr className="hrLine2"/>
            <div className="container">
              <p>Pressure</p>
              <p>{pressure}</p>
            </div>
            <hr className="hrLine2"/>
            <div className="container">
              <p>WindSpeed</p>
              <p>{windSpeed}</p>
            </div>
          </div>}
          {!check&&<DataLoadingCard width={40} height={40}/>}
        </div>
        </>
    }
}
export default RightCard