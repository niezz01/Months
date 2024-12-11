import React from 'react'
import honapok from '../honapok.json'

const Monthcards = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-4 pb-[5%] pt-8 gap-4 p-2">
            {honapok.map(honap => (
                <div className='border-white border-[5px] rounded-2xl align-middle mb-10 mx-auto w-[50%] p-5 bg-orange-200' id={honap.evszak}>
                    <img className='mx-auto rounded-xl'
                        style={{ maxHeight: "500px" }}
                        src={honap.photoUrl}
                    />
                    <h4 className='text-3xl py-1'>{honap.name}</h4>
                    <p className='py-2'>{honap.leiras}</p>
                    <a href='#'>Bővebben</a>
                </div>
            ))}
        </div>
    )
}

export default Monthcards
