import React from "react";
import axios from 'axios';

class GetRequest extends React.Component{
    constructor(props){
        super(props);
        this.state ={name: "state"};
    }

    componentDidMount(){
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            resp => {
            console.log(resp.data[0].name)
            const theName = resp.data[0].address.zipcode;
            this.setState({name: theName});
            console.log('Uni name is '+ this.state.name)
            }
        );
    }

    render(){
        
        return(
            <div>
                <fieldset>
                    <legend> This is a get request example using a public API</legend>
                    The university name is: {this.state.name} <br></br>
                    The public api: <br></br>
                    <a href ="https://jsonplaceholder.typicode.com/users">
                    https://jsonplaceholder.typicode.com/users
                    </a>
                </fieldset>
            </div>
        );
    }
}

export default GetRequest