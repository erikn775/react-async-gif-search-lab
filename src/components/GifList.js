import React from 'react'
import GifListContainer from 'containers/GifListContainer'

export default class GifList extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    handleData = () => {
        debugger
    }

    render(){
        return(
            <div onClick={this.handleData}>Hi!</div>
        )
    }
}