import React from 'react'
// import { RiHotelBedFill } from "react-icons/ri";
// import { MdHotel } from "react-icons/md";
import { FaHotel } from "react-icons/fa";




class Hotel extends React.Component{
    render(){
        return(

                <div id='hotel'>
                <button  id="button"><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a> Hotels<FaHotel/></button>
                </div>
            

        )
    }
}

export default Hotel