import React, { use, useEffect, useState } from 'react'

function Users({ users }) {
    const [user, setUser] = useState(users);
    const handleAdduser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user);
        //  create user in the server
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after post", data);
                const newUsers = [...users, data]
                setUser(newUsers);
            })
        console.log("hello", user);
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleAdduser}>
                <input name='name' type="text" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add user" />
            </form>
            <div>
                Users
                {
                    user.map(user => {
                        return <p key={user.id}>{user.name}:{user.email}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Users