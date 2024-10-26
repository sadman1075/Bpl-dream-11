import { useEffect } from "react";
import { useState } from "react";
import MainIteam from "../Main-iteam/MainIteam";
import MainIteams from "../MainIteams/MainIteams";
import Selecteditems from "../Selecteditems/Selecteditems";


const Main = ({ handleplayeradd, handleisactivecart, isactive, count,handledelete,isdisabel }) => {



    return (
        <div className="mt-20 mb-20 ml-4 mr-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-2xl"></p>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => { handleisactivecart("cart") }} className={`${isactive.cart ? "btn bg-[#E7FE29]" : "btn"}`}>Available</button>
                    <button onClick={() => { handleisactivecart("selected") }} className={`${isactive.cart ? "btn " : "btn bg-[#E7FE29]"}`}>Selected({count.length})</button>
                </div>
            </div>

            {
                isactive.cart ? <MainIteams handleisactivecart={handleisactivecart} handleplayeradd={handleplayeradd} ></MainIteams> : <Selecteditems count={count} handledelete={handledelete} handleisactivecart={handleisactivecart}></Selecteditems>
            }

        </div>
    );
};

export default Main;