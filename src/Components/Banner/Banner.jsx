import banner from "../../../public/assets/banner-main.png";
import bg from "../../../public/assets/bg-shadow.png"

const Banner = ({handlefreecoin}) => {
    return (
        <div className={`mb-10 bg-cover bg-center bg-black w-full h-full bg-[url(${bg})]`} style={{ backgroundImage: `url(${bg})` }}>
          <img className="mx-auto pt-16 pb-6" src={banner} alt=""  />
          <h2 className="text-center font-bold text-4xl text-white pb-4">Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className="text-center font-medium text-2xl text-white">Beyond Boundaries Beyond Limits</p>
          <div className="flex justify-center">
            <button onClick={()=>handlefreecoin()} className="btn bg-[#E7FE29] mt-5 mb-16 outline outline-offset-2 outline-1 border-4 border-black outline-[#E7FE29] font-bold">Claim Free Credit</button>
          </div>
            

        </div>
    );
};

export default Banner;