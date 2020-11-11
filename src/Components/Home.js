import { render } from '@testing-library/react'
import React from 'react'


class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to Travels</h1>
                <button><a href='https://www.tripadvisor.co.uk/' target="_blank" rel="noopener noreferrer"></a></button>
            </div>
        )
    }
}

export default Home 