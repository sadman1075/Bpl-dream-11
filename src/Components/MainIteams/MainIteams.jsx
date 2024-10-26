import { useEffect, useState } from "react";
import MainIteam from "../Main-iteam/MainIteam";


const MainIteams = ({ handleisactivecart, handleplayeradd,isdisabel }) => {
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch("details.json")
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [])
    return (
        <div>
            <div>
                <p className="font-bold text-2xl">Available Players</p>
            </div>
            <div className="mt-10 mb-10 gap-5 grid lg:grid-cols-3  md:grid-cols-2">
                {
                    details.map(detail => <MainIteam key={detail.id} detail={detail} handleplayeradd={handleplayeradd} ></MainIteam>)
                }

            </div>
        </div>
    );
};

export default MainIteams;