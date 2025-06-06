import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const AddressManager = () => {
    const { backendUrl, token } = useContext(ShopContext)
    const [addresses, setAddresses] = useState([])
    const [newAddress, setNewAddress] = useState({
        firstName: '', lastName: '', street: '', city: '',
        state: '', zipcode: '', country: '', phone: ''
    })

    const fetchAddresses = async () => {
        const res = await axios.get(`${backendUrl}/api/user/addresses`, { headers: { token } })
        setAddresses(res.data.addresses || [])
    }

    const addAddress = async () => {
        try {
            const res = await axios.post(`${backendUrl}/api/user/address`, newAddress, { headers: { token } })
            toast.success("Address added!")
            setNewAddress({ firstName: '', lastName: '', street: '', city: '', state: '', zipcode: '', country: '', phone: '' })
            fetchAddresses()
        } catch (err) {
            toast.error("Error adding address")
        }
    }

    const deleteAddress = async (index) => {
        try {
            await axios.delete(`${backendUrl}/api/user/address/${index}`, { headers: { token } })
            toast.success("Deleted")
            fetchAddresses()
        } catch (err) {
            toast.error("Failed to delete")
        }
    }

    useEffect(() => {
        fetchAddresses()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewAddress(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>

            {/* Form to add address */}
            <div className="grid gap-2 mb-4">
                <div className="flex gap-2">
                    <input name="firstName" value={newAddress.firstName} onChange={handleChange} placeholder="First Name" className="border px-2 py-1 w-full" />
                    <input name="lastName" value={newAddress.lastName} onChange={handleChange} placeholder="Last Name" className="border px-2 py-1 w-full" />
                </div>
                <input name="street" value={newAddress.street} onChange={handleChange} placeholder="Street" className="border px-2 py-1" />
                <div className="flex gap-2">
                    <input name="city" value={newAddress.city} onChange={handleChange} placeholder="City" className="border px-2 py-1 w-full" />
                    <input name="state" value={newAddress.state} onChange={handleChange} placeholder="State" className="border px-2 py-1 w-full" />
                </div>
                <div className="flex gap-2">
                    <input name="zipcode" value={newAddress.zipcode} onChange={handleChange} placeholder="Zipcode" className="border px-2 py-1 w-full" />
                    <input name="country" value={newAddress.country} onChange={handleChange} placeholder="Country" className="border px-2 py-1 w-full" />
                </div>
                <input name="phone" value={newAddress.phone} onChange={handleChange} placeholder="Phone" className="border px-2 py-1" />
                <button onClick={addAddress} className="bg-black text-white py-2 px-6 mt-2">Add Address</button>
            </div>

            {/* List existing addresses */}
            {addresses.map((addr, i) => (
                <div key={i} className="border p-3 rounded mb-2">
                    <p>{addr.firstName} {addr.lastName}</p>
                    <p>{addr.street}, {addr.city}, {addr.state} - {addr.zipcode}</p>
                    <p>{addr.country}</p>
                    <p>Phone: {addr.phone}</p>
                    <button onClick={() => deleteAddress(i)} className="text-red-600 mt-1">Delete</button>
                </div>
            ))}
        </div>
    )
}

export default AddressManager
