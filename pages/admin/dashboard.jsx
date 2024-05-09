// // pages/dashboard.js

// import { useState, useEffect } from 'react';
// import axios from 'axios'; 

// export default function Dashboard() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch user data from your API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users/getAllUser');
//         setUsers(response.data);
//         console.log("data ",response.data)
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleEdit = (userId) => {
//     // Redirect to edit page with userId
//     // Example: history.push(`/edit/${userId}`)
//   };

//   const handleDelete = async (userId) => {
//     console.log("deleted" ,userId)
//     try {
//       await axios.delete(`/api/users/${userId}`);
//       setUsers(users.filter(user => user.uid !== userId));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleUpdate = async (userId, updatedUserData) => {
//     try {
//       console.log("updated data", updatedUserData);
//       const response = await axios.put(`/api/users/${userId}`, updatedUserData);
//       if (response.status === 200) {
//         // If the update is successful, update the local state with the updated user data
//         const updatedUsers = users.map(user => {
//           if (user.uid === userId) {
//             return {
//               ...user,
//               ...updatedUserData
//             };
//           }
//           return user;
//         });
//         setUsers(updatedUsers);
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };
  

//   return (
//     <div style={{ margin: '20px' }}>
//   <h1>User Dashboard</h1>
//   <table style={{ width: '100%' ,backgroundColor:'white' }}>
//     <thead>
//       <tr>
//         <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Username</th>
//         <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Email</th>
//         <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Phone</th>
//         <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//       {users.map((user) => (
//         <tr key={user.uid}>
//           <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.username}</td>
//           <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.email}</td>
//           <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.phone}</td>
//           <td style={{ border: '1px solid #dddddd', padding: '8px' }}>
//             <button style={{ border: '1px solid #dddddd', padding: '8px' }} onClick={() => handleUpdate(user.uid,user)}>Edit</button>
//             <button style={{ border: '1px solid #dddddd', padding: '8px' }} onClick={() => handleDelete(user.uid)}>Delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//   );
// }


import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedData, setEditedData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Fetch user data from your API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users/getAllUser');
        setUsers(response.data);
        console.log("data ",response.data)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    // Set the user to be edited
    const userToEdit = users.find(user => user.uid === userId);
    setEditingUser(userToEdit);
    setEditedData({
      username: userToEdit.username,
      email: userToEdit.email,
      phone: userToEdit.phone
    });
  };

  const handleDone = () => {
    // Clear the editing user state
    setEditingUser(null);
    // Call handleUpdate with the edited data
    handleUpdate(editingUser.uid, editedData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDelete = async (userId) => {
    console.log("deleted" ,userId)
    try {
      await axios.delete(`/api/users/${userId}`);
      setUsers(users.filter(user => user.uid !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdate = async (userId, updatedUserData) => {
    try {
      console.log("updated data", updatedUserData);
      const response = await axios.put(`/api/users/${userId}`, updatedUserData);
      if (response.status === 200) {
        // If the update is successful, update the local state with the updated user data
        const updatedUsers = users.map(user => {
          if (user.uid === userId) {
            return {
              ...user,
              ...updatedUserData
            };
          }
          return user;
        });
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  

  return (
    <div style={{ margin: '20px' }}>
      <h1>User Dashboard</h1>
      <table style={{ width: '100%' ,backgroundColor:'white' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Username</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Email</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Phone</th>
            <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.username}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.email}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.phone}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>
                {editingUser && editingUser.uid === user.uid ? (
                  <>
                    <input type="text" name="username" value={editedData.username} onChange={handleInputChange} />
                    <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
                    <input type="text" name="phone" value={editedData.phone} onChange={handleInputChange} />
                    <button style={{ border: '1px solid #dddddd', padding: '8px' }} onClick={() => handleDone()}>Done</button>
                  </>
                ) : (
                  <>
                    <button style={{ border: '1px solid #dddddd', padding: '8px' }} onClick={() => handleEdit(user.uid)}>Edit</button>
                    <button style={{ border: '1px solid #dddddd', padding: '8px' }} onClick={() => handleDelete(user.uid)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
