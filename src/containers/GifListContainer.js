import React from 'react'

export default class GifListContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            gif: []
        }
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g')
            .then(response => response.json())
            .then(gifData => {
                this.setState({
                    gif: gifData.data.images.original.url
                })
            })
    }

    render(){
        return(
            <GifList gifFetchData={this.state.gif}/>
        )
    }
}