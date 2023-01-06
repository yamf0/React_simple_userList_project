import React, { useState } from "react";

import './UserEntryForm.css'
const UserEntryForm = (props) => {

    const [userFormData, setUserFormData] = useState({
        name: '', age: ''
    })

    const nameChangeHandler = (event) => {
        setUserFormData((prevState) => {
            return {...prevState, name: event.target.value}
        })
    }
    const ageChangeHandler = (event) => {
        setUserFormData((prevState) => {
            return {...prevState, age: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newUser = {
            age: userFormData.age, name: userFormData.name
        }

        setUserFormData({name:'',age:''})
        props.onNewUser(newUser)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-user__controls">
                <div className="new-user__control">
                    <label>Enter Name</label>
                    <input type='text' value={userFormData.name} onChange={nameChangeHandler}></input>
                </div>
                <div className="new-user__control">
                    <label>Enter Age</label>
                    <input type='text' value={userFormData.age} onChange={ageChangeHandler}></input>
                </div>
                <div className="new-user__action">
                    <button type="submit">Add User</button>
                </div>
            </div>
        </form>
    )
}

export default UserEntryForm