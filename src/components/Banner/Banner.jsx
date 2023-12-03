import bannerImg from '../../assets/entertainment.png';
const Banner = () => {
    return (
        <div data-aos="zoom-out">
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">Unlock the Magic of Entertainment</h1>
                       <div>
                       <p className="mb-5 max-w-2xl mx-auto text-center">Experience the world of seamless entertainment management like never before. From event planning to artist bookings and venue coordination, our platform offers you the tools and expertise to make every entertainment experience unforgettable. Join us today and elevate your entertainment game!</p>
                       </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;