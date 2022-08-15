import React from  'react';
import Clock from './Clock';




class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            foo: 'Clicked here 0 times',
            times: 0,
            clickTime: null
        };
    }
    
    handleClick(){
        
        this.setState({
            foo: "Clicked here " +(this.state.times +1)+ " times",
            times: this.state.times +1,
            clickTime  : new Clock()
        });
    }    

    
    render(){
        if (this.state.clickTime === null){
            return (
                <React.Fragment>
            <button onClick={this.handleClick}>
                {this.state.foo}
            </button>
            </React.Fragment>
            )
        }     
        else{
            return(
                <React.Fragment>
                <button onClick = {this.handleClick}>
                    {this.state.foo}
                </button>
                <p>
                    You clicked the button at {this.state.clickTime.state.time}
                </p>
            </React.Fragment>
            )
        }
    }
}

export default MyComponent;