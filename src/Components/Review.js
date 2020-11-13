import React from 'react'
import { BsPencilSquare } from "react-icons/bs";



class Review extends React.Component{
    render(){
        return(

                <div id='review'>
                <button id="button"><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a> Reviews <BsPencilSquare/></button>
                </div>
            

        )
    }
}

export default Review