import { React, useState, useEffect } from 'react';

export default function Table() {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch('https://dummyjson.com/users?limit=10')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dummy data</h1>
            <table style={{borderCollapse:"collapse", border:"1px solid white", borderRadius:"10px", marginLeft:"160px", marginTop:"40px", padding:"20px"}}>
                <tr>
                    <th>S.No</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-Mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
                {users.length > 0 && (users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><img src={user.image} width={100} alt='imf'></img></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.domain}</td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    );
                }))}

            </table>
        </div>
    );
}