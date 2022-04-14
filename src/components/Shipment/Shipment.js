import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')


    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault()
        const shipping = { name, email, address, phone }
        console.log(shipping)
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipment information</h1>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;