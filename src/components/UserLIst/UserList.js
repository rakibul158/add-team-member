import React, { useState } from 'react';
import './UserList.css'

const UserList = (props) => {
    const {name,picture,email,phone} = props.user;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    const image = picture.large;

    const [phoneNumber, setPhoneNumber] = useState('');

    const showPhoneNumber = () => setPhoneNumber(phone);

    return (
        <div className="user">
            <div className="">
                <img src={image} alt="" />
            </div>

            <div className="user-info">
                <h3>Name: {fullName}</h3>
                <p>Email: <small>{email}</small></p>
                <p>Phone: {phoneNumber}</p>
                <button onClick={showPhoneNumber}>Show Phone Number</button>
                <button onClick={()=>props.handleAddUser(fullName)}>Add Me</button>
            </div>
            
        </div>
    );
};

export default UserList;