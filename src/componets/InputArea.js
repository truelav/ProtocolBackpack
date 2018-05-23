import React, { Component } from 'react';

class InputArea extends  Component {
    constructor(props){
        super(props)
        this.state = {
            messagesHistory: [],
            input: '',

        }
        this.onInput = this.onInput.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }

    componentDidMount() {
        //this.fetchMessages()
    }    

    fetchMessages(messages) {
        this.setState({messagesHistory: messages})
    }

    onInput(e){
        this.setState({
            input: e.target.value
        })
    }

    onSendMessage() {
        console.log('message sent...', this.state.input)
    }

    render() { 
        return (
            <div>
                <div>
                    <input type="text"
                       onChange={this.onInput}
                       value={this.state.input}
                       onKeyPress={ e => (e.key === 'Enter' ? this.onSendMessage() : null)}
                       //value={''}
                    />
                </div>  
            </div>
        )
    }   
}

export default InputArea;