import bg from "../../../public/assets/bg-shadow.png"

const Subscribe = () => {
    return (
        <div className=" w-full outline outline-offset-8 outline-2 outline-white rounded-lg border-2 border-white relative -mb-40 bg-white">
            <div className={`bg-cover bg-center w-full h-full bg-[url(${bg})] rounded-xl`} style={{ backgroundImage: `url(${bg})` }}>
                <div className="p-4 lg:p-20">
                    <h1 className="text-3xl font-bold  text-center">Subscribe to our Newsletter</h1>
                    <p className="text-center font-medium mt-4">Get the latest updates and news right in your inbox!</p>
                    <div className="grid lg:flex justify-center gap-4 mt-6">
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full lg:w-1/3 " /> 
                    <button className="btn bg-gradient-to-r from-purple-300 to-yellow-500 font-bold">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;