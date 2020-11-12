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

                <div id="block-two">
                    <h2> ------------Keep on planning---------------- </h2>
                    <div id="color-block">
                        <h2>Start travelling now</h2>
                        <h5>Create a Trip to save and organise all of your travel ideas, and see them on a map</h5>
                        <button><h3>Create a Trip</h3></button>
                    </div>
                </div>

                <div id='travel-guide'>
                    <h2>Travel Guides</h2>
                    <div id="container">
                        <h4><b>Jane Doe</b></h4> 
                        <p>Interior Designer</p> 
                    </div>

                    <div id="container">
                        <h4><b>John Doe</b></h4> 
                        <p>Interior Designer</p> 
                    </div>

                    <div id="container">
                        <h4><b>Jan Doe</b></h4> 
                        <p>Interior Designer</p> 
                    </div>
                </div>

            </div>
        )
    }
}

export default Home 