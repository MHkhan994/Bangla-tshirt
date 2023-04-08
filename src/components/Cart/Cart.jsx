import React from 'react';
import { ToastContainer } from 'react-toastify';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {
                cart.map(tshit => <p key={tshit._id}>{tshit.name}
                    <button onClick={() => removeFromCart(tshit._id)}>X</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </p>)
            }
        </div>
    );
};

export default Cart;