import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";



class More extends React.Component{
    render(){
        return(

                <div id='more'>
                <button id="button"><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a> More <HiDotsHorizontal/>
                </button>
                </div>
            

        )
    }
}

export default More