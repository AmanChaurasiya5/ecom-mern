import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const UserProfile = () => {
    const { backendUrl, token } = useContext(ShopContext)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const [orders, setOrders] = useState([])
    const [addresses, setAddresses] = useState([])

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setUserData(data => ({ ...data, [name]: value }))
    }

    const fetchUserData = async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/user/info`, {
                headers: { token }
            })
            setUserData(res.data.user)
            setAddresses(res.data.user.addresses || [])
        } catch (err) {
            toast.error('Failed to load user data')
        }
    }

    const fetchOrders = async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/orders/user`, {
                headers: { token }
            })
            setOrders(res.data.orders)
        } catch (err) {
            toast.error('Failed to load orders')
        }
    }

    const onUpdateHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${backendUrl}/api/user/update`, userData, {
                headers: { token }
            })
            if (res.data.success) {
                toast.success('Profile updated successfully')
            } else {
                toast.error(res.data.message)
            }
        } catch (err) {
            toast.error('Update failed')
        }
    }

    useEffect(() => {
        fetchUserData()
        fetchOrders()
    }, [])

    return (
        <div className="p-4 max-w-4xl mx-auto min-h-[80vh]">
            <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

            <form onSubmit={onUpdateHandler} className="grid gap-3 mb-8">
                <div className="flex gap-3">
                    <input name="firstName" value={userData.firstName} onChange={onChangeHandler} placeholder="First Name" className="border px-3 py-2 w-full" />
                    <input name="lastName" value={userData.lastName} onChange={onChangeHandler} placeholder="Last Name" className="border px-3 py-2 w-full" />
                </div>
                <input name="email" value={userData.email} onChange={onChangeHandler} placeholder="Email" className="border px-3 py-2 w-full" />
                <input name="phone" value={userData.phone} onChange={onChangeHandler} placeholder="Phone" className="border px-3 py-2 w-full" />
                <button type="submit" className="bg-black text-white py-2 px-8 w-fit self-end">Update Profile</button>
            </form>

            <div className="mb-8">
                <h3 className="text-xl font-medium mb-2">Recent Delivery Addresses</h3>
                {orders.length > 0 ? (
                    [...new Map(
                        orders.map(order => [JSON.stringify(order.address), order.address])
                    ).values()].map((addr, idx) => (
                        <div key={idx} className="border p-3 mb-2 rounded">
                            <p>{addr.firstName} {addr.lastName}</p>
                            <p>{addr.street}, {addr.city}, {addr.state} - {addr.zipcode}</p>
                            <p>{addr.country}</p>
                            <p>Phone: {addr.phone}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No saved addresses yet.</p>
                )}
            </div>



            <div>
                <h3 className="text-xl font-medium mb-2">My Orders</h3>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div key={order._id} className="border p-3 mb-2 rounded">
                            <p><strong>Order ID:</strong> {order._id}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Amount:</strong> ₹{order.amount}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">You haven’t placed any orders yet.</p>
                )}
            </div>
        </div>
    )
}

export default UserProfile
