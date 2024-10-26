import footer from '../../../public/assets/logo-footer.png'

const Footer = () => {
    return (
        <div className=" bg-black">
            <img className='mx-auto pt-60' src={footer} alt="" />

            <footer className="footer lg:flex justify-evenly text-white p-12  mt-10">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p>
                        We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.
                    </p>

                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <form>
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-base-200">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <div className="border-2 border-gray-800"></div>

            <div>
                <p className="text-center text-white p-10">@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;