import userAvater from '../../assets/user.png';
const Testimonials = () => {
    return (
        <div className="mb-10">
            <h2 className="text-center text-xl md:text-5xl mb-4 md:mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div data-aos="fade-right" className="card bg-white shadow-2xl">
                    <div className="card-body">
                        <img className='mx-auto w-2/12' src={userAvater} alt="" />
                        <p className='text-center'>Karim Uddin</p>
                        <p>It was wonderful to organize a event by you guys.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="card bg-white shadow-2xl">
                    <div className="card-body">
                        <img className='mx-auto w-2/12' src={userAvater} alt="" />
                        <p className='text-center'>Mr. Petris</p>
                        <p>You guys are awesome. keep doing the well</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="card bg-white shadow-2xl">
                    <div className="card-body">
                        <img className='mx-auto w-2/12' src={userAvater} alt="" />
                        <p className='text-center'>Mrs. Khatun</p>
                        <p>I had a life time best event. Thank you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;