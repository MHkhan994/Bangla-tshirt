import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    const addToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            toast.warn('Already added', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const removeFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }

    return (
        <div className='px-10 pt-9 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-7'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        addToCart={addToCart}
                    >
                    </Tshirt>)
                }
            </div>
            <div>
                <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;