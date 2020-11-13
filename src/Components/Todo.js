import React from 'react'
import { BiChat } from "react-icons/bi";



class Todo extends React.Component{
    render(){
        return(

                <div id='todo'>
                <button id="button"><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a> Todos <BiChat/></button>
                </div>
            

        )
    }
}

export default Todo