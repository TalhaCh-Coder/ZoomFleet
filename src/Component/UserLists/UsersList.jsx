import React, { useEffect, useState } from "react";
import "./UsersList.css";

function UsersList() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchUsers = () => {
      fetch("http://localhost:4000/users")
         .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch users");
            return res.json();
         })
         .then((data) => {
            setUsers(data);
            setLoading(false);
         })
         .catch((err) => {
            setError(err.message);
            setLoading(false);
         });
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   const handleDelete = (id) => {
      if (window.confirm("Are you sure you want to remove this user?")) {
         fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE",
         })
            .then((res) => {
               if (res.ok) {
                  fetchUsers(); // Refresh user list
               } else {
                  alert("Failed to remove user.");
               }
            })
            .catch((err) => console.error("Delete error:", err));
      }
   };

   if (loading) return <p>Loading users...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="container-fluid users-container">
         <h2 className="users-heading" id="Users">Registered Users</h2>
         <div className="table-wrapper">
            <table className="users-table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.length === 0 ? (
                     <tr>
                        <td colSpan="4">No users found.</td>
                     </tr>
                  ) : (
                     users.map((user) => (
                        <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>
                              <button
                                 className="remove-btn"
                                 onClick={() => handleDelete(user.id)}
                              >
                                 Remove User
                              </button>
                           </td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default UsersList;
