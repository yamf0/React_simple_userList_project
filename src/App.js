import React, { useState } from "react";
import Card from "./Components/Common/Card";

import UserEntryForm from './Components/Forms/UserEntryForm'
import UserList from "./Components/Users/UserList";

const users = [
    {name: "jose", age:23},
    {name: "jose", age:23}
]



const App = () => {

    const [userList, setUserList] = useState(users)

    const NewUserHandler = (newUser) => {
        setUserList((previous) => {
            console.log("new user")
            return [...previous, newUser]
        })
    }

    return (
        <div>
            <Card>
                <UserEntryForm onNewUser={NewUserHandler}/>
            </Card>
            <Card>
                <UserList users={userList}/>
            </Card>
        </div>
    )
}

export default App