import React, { Component } from 'react';

class Pack extends  Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <p>{this.props.item}</p>
            </div>
        )
    }   
}

export default Pack;