import { Component } from "react";
import './date.css'
const daysList=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
class ShowDate extends Component{
    state={date:new Date()}
    componentDidMount(){
        setInterval(()=>this.setState({date:new Date()}),1000)
    }
    render(){
        const{date}=this.state
        return <p className="time">{daysList[date.getDay()]}, {date.toLocaleDateString()}</p>
    }
}
export default ShowDate 