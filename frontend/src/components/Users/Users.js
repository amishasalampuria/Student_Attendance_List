import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
    const url = 'http://localhost:4000';
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(url + '/api/customer/list');
            console.log("API response: ", response.data);
            setData(response.data.data.users);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [data]);

    const handleClick = async (index, status) => {
        try {
            console.log('handleClick ', index, status);
            const response = await axios.post(url + '/api/customer/attendance', { index, status });
            toast.success("Attendance marked")
            console.log('Attendance marked successfully:', response.data);
        } catch (error) {
            console.error('Error marking attendance:', error.message);
        }
    };

    const handleDelete = async (index) =>{
        try {
            console.log('handleDelete ', index);
            const response = await axios.post(url + '/api/customer/delete', { index });
            toast.success("Student removed")
            console.log('Deleted successfully:', response.data);
        } catch (error) {
            console.error('Error marking attendance:', error.message);
        }
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className=' w-50 bg-white rounded p-3'>
                <h2>Attendance List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-success'>Create +</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="w-25">FirstName</th>
                            <th className="w-25">LastName</th>
                            <th className="w-25">Email</th>
                            <th className="w-25">Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user._id}>
                                <td className="w-25">{user.firstName}</td>
                                <td className="w-25">{user.lastName}</td>
                                <td className="w-25">{user.email}</td>
                                <td className="d-flex w-25">
                                    <button className='btn btn-sm btn-primary mx-2' onClick={() => handleClick(user._id, 'Present')}>Present</button>
                                    <button className='btn btn-sm btn-danger' onClick={() => handleClick(user._id, 'Absent')}>Absent</button>
                                    <button className='btn btn-sm btn-primary mx-2' onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
