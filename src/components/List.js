import React, {useEffect, useState} from "react";
import Card from "./Card";

const StylesList = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    list: {
        listStyle:"none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}



const List = () => {

    const [users, setUsers] = useState([])
     
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log('error fetching', error));
    }, []);

    return(
        <div style={StylesList.container}>
        <h1 style={StylesList.header}>List of Users</h1>
        <ul style={StylesList.list}>
          {users.map(user => (
            <li key={user.id}>
                <Card 
                key={user.id}
                name={user.name}
                email={user.email}
                />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default List;