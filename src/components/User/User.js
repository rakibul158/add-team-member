import React, { useEffect,useState } from 'react';
import UserList from '../UserLIst/UserList';

const User = () => {

    const [users, setUsers] =  useState([]);
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=25')
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error(error))
    },[]);

    const handleAddUser = (name) => {
        setTeam([...team ,name]);
    }
    return (
        <div>
            <h2>Team Mamber List</h2>
            <ul>
                {
                    team.map(mamber => <li>{mamber}</li>)
                }
            </ul>
            {
                users.map(user => <UserList user={user} handleAddUser={handleAddUser}></UserList>)
            }
        </div>
    );
};

export default User;