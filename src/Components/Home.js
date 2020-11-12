import React from 'react'
import Flight from './Flight'
import Hotel from './Hotel'
import Rental from './Rental'
import Restaurant from './Restaurant'
import Review from './Review'
import Todo from './Todo'



class Home extends React.Component{
    render(){
        return(

            <div id="main-page">
                <div id='home'>
                <h1>Go Fly ™</h1>
                {/* <button><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a></button> */}
                </div>
                <div>
                    <Flight/>
                    <Hotel/>
                    <Rental/>
                    <Restaurant/>
                    <Review/>
                    <Todo/>
                </div>
                <div id="block">
                    <h2>Find the good flights out there.</h2>
                    <input type="text" placeholder="Where do you want to fly too"/>
                    {/* add icon to search button maybe aeroplane? */}

                </div>

            </div>
        )
    }
}

export default Home 