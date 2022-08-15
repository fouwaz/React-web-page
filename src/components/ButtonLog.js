import React from 'react';
class ButtonLog extends React.Component{
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.loginButton = this.loginButton.bind(this)
        this.logoutButton = this.logoutButton.bind(this)
        this.UserGreeting = this.UserGreeting.bind(this)
        this.GuestGreeting = this.GuestGreeting.bind(this)
        this.NewGreeting = this.NewGreeting.bind(this)

        this.state = {loggedIn: false}
    }

    handleLogout(){
        this.setState({loggedIn: false})
    }

    handleLogin(){
        this.setState({loggedIn: true})
    }

    loginButton(props){
        return (
            <button onClick ={props.onClick} >
                login
            </button>
        );
    }

    logoutButton(props){
        return(
            <button onClick={props.onClick}>
                logout
            </button>
        );
    }



    UserGreeting(){
        return <p>Hi user!</p>
    }

    GuestGreeting(){
        return <p> Hi guest! Please sign up or sign in </p>
    }

    NewGreeting(props){
        const isLoggedIn = props.isloggedin;
        if (isLoggedIn){
            return (<this.UserGreeting />)
        }
        else{
            return (<this.GuestGreeting />)
        }
    }

    


    render (){
        const isLoggedIn = this.state.loggedIn ;
        let button;
        if (isLoggedIn){
            button = <this.logoutButton onClick ={this.handleLogout}/>
        }
        else{
            button = <this.loginButton onClick = {this.handleLogin}/>
        }
        return(
            <div>
                <this.NewGreeting isloggedin = {isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export default ButtonLog;