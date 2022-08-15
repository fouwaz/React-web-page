function MyUsers(props){
    const userNames = props.users.map((user)=>
        <li key={user.id}>The username is {user.name} and their id is {user.id}.</li>
    )

    return(<div>
        The users are:
        <ul>{userNames}</ul>
        </div>
    )
    
}

    
export default MyUsers
  