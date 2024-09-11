import { Component } from "react";
import "./index.css"
import ShowTime from '../time/time.js'
import ShowDate  from  '../date/date.js'
class LeftCard extends Component{
    render(){
        const{city,country,temp}=this.props
        return <>
        
            <div className="leftCard">
                <div>
                    <p className='city'>{city.toUpperCase()}</p>
                    <p className='city'>{country}</p>
                </div>
                <div className="temperatureContainer">
                    <div>
                        <ShowTime></ShowTime> 
                        <ShowDate></ShowDate>   
                    </div> 
                    <p className="temperature">{Math.round(temp-273.15)}°C</p>   
                </div> 
                
            </div>
       
        </>
    }
}
export default LeftCard