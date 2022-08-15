import React  from 'react'
import '../App.css'
class Form extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            Name:'',
            Email: '',
            Password: '',
            Position: '',
            Number: 0
        }
    }
    handleSubmit(event){
        alert(
            'The form has been submitted, your information is: '+ 
            '\n Name'+ this.state.Name + 
            '\n Email:' +this.state.Email+
            '\n Position: ' +this.state.Position+
            '\n Number: '+this.state.Number)
        event.preventDefault();
    }
    
    handleChange(event){
        const id = event.target.id
        const value = event.target.value
        this.setState({
            [id]: value 
        })   
    }

    handleFocus(event){
        const target = event.target
        if (event._reactName === 'onFocus'){
            target.style.background = "#61dafb"
        }
        else if (event._reactName ==='onBlur'){
            target.style.background = 'white'
        }
        
    }
    
    

    render(){
        return(
            <form onSubmit={this.handleSubmit} className='player-Form'>
                <label>
                    Name
                    <input type="text" id='Name' className='textInput' value={this.state.Name} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleFocus} />
                </label>
                <label>
                    Email 
                    <input type="text" id = 'Email' className='textInput' value = {this.state.Email} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleFocus} />  
                </label>
                <label>
                    Password
                    <input type='password' id = 'Password' className='textInput' value={this.state.Password} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleFocus} />
                </label>
                    
                <label>
                    Position
                    <input type='text' id ='Position' className='textInput' value={this.state.Position} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleFocus} />
                </label>
                
                <label>
                    Number
                    <input type = 'number' id='Number' className='numberInput' value={this.state.Number} onChange = {this.handleChange} onFocus={this.handleFocus} onBlur={this.handleFocus} />
                </label>
                <div><input className='submit-button' type='submit' value='Submit here lad!'/> </div>
            </form>
            
        )
    }
    
    
}

export default Form