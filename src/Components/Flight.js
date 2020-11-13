import React from 'react'
import { TiPlane } from "react-icons/ti";



class Flight extends React.Component{
    render(){
        return(

                <div id='flight'>
                <button id="button"><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a> Flights<TiPlane/></button>
                </div>
            

        )
    }
}

export default Flight 