import React from "react";

import UserItem from "./UserItem";

import './UserList.css'
const UserList = (props) => {

    return (
        <div className="user-list">
            {props.users.map((item) => {
                return <UserItem name={item.name} age={item.age}/>
            })}
        </div>
    )
}

export default UserList