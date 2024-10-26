
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainIteam = ({ detail, handleplayeradd,isdisabel }) => {

    const { id, name, country, img, type, position, price } = detail
    return (
        <div>
            <div className="card bg-base-100 w-full border-2 p-3 ">
                <figure>
                    <img
                        src={img}
                        className="rounded-xl w-full h-72"
                        alt="Shoes" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        {name}</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>

                            <p>{country}</p>
                        </div>
                        <div>


                            <p>{type}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className="font-bold text-lg">Rating</p>
                        <div className=" mt-4 flex justify-between items-center">
                            <p className="font-bold text-lg">{position}</p>
                            <p >{position}</p>
                        </div>
                        <div className="mt-4 lg:flex justify-between items-center">
                            <p className="font-bold text-lg">Price:${price}</p>
                            <button onClick={() => handleplayeradd(detail)}  className="btn mt-4 lg:mt-0 bg-[#E7FE29]">Choose Player </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainIteam;