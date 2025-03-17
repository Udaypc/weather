import { Component } from "react";
import './time.css'
class ShowTime extends Component{
    state={date:new Date()}
    componentDidMount(){
        setInterval(()=>this.setState({date:new Date()}),1000)
    }
    render(){
        const{date}=this.state
        return <p className="time">{date.toLocaleTimeString()}</p>
    }
}
export default ShowTime 