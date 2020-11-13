import React from 'react'
import Flight from './Flight'
import Footer from './Footer'
import Hotel from './Hotel'
import More from './More'
import Rental from './Rental'
import Restaurant from './Restaurant'
import Review from './Review'
import Todo from './Todo'
import { BsSearch } from "react-icons/bs";




class Home extends React.Component{
    render(){
        return(

            <div id="main-page">
                <div id='home'>
                <h1 id='title'>Go Fly ™</h1>
                </div>
                <div id="buttons">
                    <Flight/>
                    <div class="divider"/>
                    <Hotel/>
                    <div class="divider"/>
                    <Rental/>
                    <div class="divider"/>
                    <Restaurant/>
                    <div class="divider"/>
                    <Review/>
                    <div class="divider"/>

                    <Todo/>
                    <div class="divider"/>

                    <More/>
                </div>
                <div id="block">
                    <h2 id='good-flight'>Find the good flights <br></br> out there.</h2>
                    <input type="text" placeholder="Lets fly ..."/>
                    {/* add icon to search button maybe aeroplane? */}

                </div>

                <div id="block-two">
                    <h2 id='line'> <span>Keep on planning</span></h2>
                    <div id="color-block">
                        <h2>Start travelling now</h2>
                        <h5>Create a Trip to save and organise all of your travel ideas, and see them on a map</h5>
                        <button><h3>Create a Trip</h3></button>
                    </div>
                </div>

                <div id='travel-guide'>
                    <h2 id='line'><span>Travel Guides</span></h2>
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

                <div id='dream-trip'>
                    <h2> Dream trip</h2>
                     <div>New York</div>
                     <div>Thailand</div>
                     <div>Sweden</div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home 