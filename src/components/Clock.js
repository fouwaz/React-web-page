import React from 'react';

class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {time: new Date().toLocaleString()};
        this.getState = this.getState.bind(this);
    }
    getState(){
        return this.state.time;
    }
    componentDidMount(){
        this.intervalId = setInterval(()=> this.updateClock(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    updateClock(){
        this.setState({    
            time: new Date().toLocaleString()
        });
    }

    render(){
        return(
            <p>
                The date and exact time is {this.state.time}.
            </p>
        );
    }
}


export default Clock