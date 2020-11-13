import React from 'react'
import { BiFoodMenu } from "react-icons/bi";

class Restaurant extends React.Component{
    render(){
        return(

                <div id='restaurant'>
                <button id="button"><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a> Restaurants <BiFoodMenu/></button>
                </div>
            

        )
    }
}

export default Restaurant