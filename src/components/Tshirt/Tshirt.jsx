import React from 'react';

const Tshirt = ({ tshirt, addToCart }) => {
    const { _id, picture, name, price } = tshirt;

    return (
        <div className='text-center bg-gray-50 p-6 rounded-md border border-gray-200'>
            <img className='w-[300px] h-[350px] mx-auto rounded-md' src={picture} alt="" />
            <h1 className='text-3xl pt-3'>{name}</h1>
            <h2 className='text-xl py-4'>Price: {price}</h2>
            <button onClick={() => addToCart(tshirt)} className='text-xl bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400'>buy now</button>
        </div>
    );
};

export default Tshirt;