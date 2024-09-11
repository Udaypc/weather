import { Component } from "react";
import { Bars } from 'react-loader-spinner'
class DataLoadingCard extends Component{
    render(){
      const{height,width}=this.props
        return <>
        <Bars
        height={height}
        width={width}
        color="#ffffff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
        </>
    }
}
export default DataLoadingCard