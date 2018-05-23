import React, { Component } from 'react';
import Pack from './Pack'

class Packs extends  Component {
    constructor(props){
        super(props)
        this.state = {
            chats: ['random', 'secret']
        }
    }
    render() { 
        return (
            <div>
                {this.state.chats.map( (item, i) => {
                    return <Pack key={i} item={item}/>
                })}
            </div>
        )
    }   
}

export default Packs;