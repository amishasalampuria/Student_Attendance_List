import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
    const url = 'http://localhost:4000/';

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleClick = async () => {
        console.log(data)
        await axios.post(url + 'api/customer/data', data)
            .then(response => {
                console.log('Response:', response);
                toast.success("Student Created")
               
            })
            .catch(error => {
                console.error('Error:', error);
              
            });
    }
    return (

        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Create Student</h2>
                <div className='mb-2'>
                    <label htmlFor='firstName'>firstName</label>
                    <input name='firstName' value={data.firstName} placeholder='firstName'
                        onChange={e => setData({ ...data, firstName: e.target.value })} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='lastName'>lastName</label>
                    <input name='lastName' value={data.lastName} placeholder='lastName'
                        onChange={e => setData({ ...data, lastName: e.target.value })} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>email</label>
                    <input name='email' value={data.email} placeholder='email'
                        onChange={e => setData({ ...data, email: e.target.value })} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>password</label>
                    <input name='password' value={data.password} placeholder='password'
                        onChange={e => setData({ ...data, password: e.target.value })} />
                </div>
                <button onClick={handleClick} className='btn btn-succes'>Submit</button>
            </div>

        </div>
    )
}

export default CreateStudent
