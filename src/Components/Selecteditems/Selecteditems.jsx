import React, { useState } from 'react';
import Selecteditem from '../Selecteditem/Selecteditem';


const Selecteditems = ({ count,handledelete,handleisactivecart }) => {

   


    return (
        <div>
            <div>
                <div>
                    <p className="font-bold text-2xl">Selected Players ({count.length}/6)</p>
                </div>
                <div>
                    {
                        count.map(coun => <Selecteditem key={coun.id} coun={coun} handledelete={handledelete}></Selecteditem>)
                    }
                </div>
                <div>
                    <button onClick={()=>handleisactivecart("cart")} className='btn bg-[#E7FE29] mt-5 mb-16 outline outline-offset-2 outline-1 border-4 border-white outline-purple-500 font-bold'>Add More Player</button>
                </div>
            </div>
        </div>
    );
};

export default Selecteditems;