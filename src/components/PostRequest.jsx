import React from 'react'
import axios from 'axios'

class PostRequest extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            userName:'',
            email:'',
            address:'',
            phoneNumber:'',
            errorMessage: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const id = event.target.id
        const value = event.target.value
        this.setState({
            [id]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const user = {
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber
            
        };
        axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(resp =>{
            console.log('Post request sent successfully')
            console.log(resp.data)
        }).catch(
            error =>{
                this.setState({
                    errorMessage: error.message
                });
                console.error('Could not submit the user', error);
            }
        )
    }

    render(){
        return(
            <fieldset className='fieldset'>
                <legend> Please fill in the form so that we can send a post request to the api</legend>
                <form className='user-Form' onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type='text' id='name' className='textInput' onChange={this.handleChange} />
                </label>
                <label>
                    Username:
                    <input type='text' id='userName' className='textInput' onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type='text' id='email' className='textInput' onChange={this.handleChange} />
                </label>
                <label>
                    Address:
                    <input type='text' id= 'address' className='textInput' onChange={this.handleChange} />
                </label>
                <label>
                    Phone Number:
                    <input type='text' id= 'phoneNumber' className='textInput' onChange={this.handleChange} />
                </label>
                <div> <input className='submit-button' type='submit' value='Submit'/> </div>
                </form>
            </fieldset>
        )
    }
}

export default PostRequest;