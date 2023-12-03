import bannerImg from '../../assets/about-us.jpg';
const About = () => {
    return (
        <div>
            <div
                className="hero min-h-[80vh]"
                style={{
                    backgroundImage:
                        `url(${bannerImg})`,
                }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div data-aos="fade-zoom-in" className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5 text-lg">
                            Welcome to Entertainment Cracker, where we transform ordinary
                            moments into extraordinary memories. With a passion for
                            entertainment and a commitment to excellence, we&apos;ve become your
                            trusted partner in creating unforgettable experiences.
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up">
                <h3 className="text-3xl mb-4 mt-10 font-bold">Who We Are</h3>
                <p>
                    At Entertainment Cracker, we are a team of dedicated professionals who
                    share a common love for entertainment in all its forms. Whether it&apos;s
                    music, theater, film, comedy, sports, or dance, we believe that every
                    event has the potential to be extraordinary, and we&apos;re here to make it
                    happen.
                </p>
            </div>

            <div data-aos="fade-up">
                <h3 className="text-3xl mb-4 mt-10 font-bold">Our Mission</h3>

                <p>
                    Our mission is simple: to bring your entertainment dreams to life. We
                    take pride in our ability to turn your vision into a reality, whether
                    you&apos;re planning a music festival that will rock the crowd, a theater
                    production that will leave audiences spellbound, or a comedy show that
                    will have everyone in stitches. We are here to ensure your event is a
                    resounding success.
                </p>
            </div>
            <div data-aos="fade-up">
                <h3 className="text-3xl mb-4 mt-10 font-bold">What Sets Us Apart</h3>

                <p>
                    What makes Entertainment Cracker stand out in the world of entertainment
                    event management? It&apos;s our unwavering dedication to excellence and our
                    commitment to providing comprehensive solutions. Here&apos;s what sets us
                    apart:
                </p>
            </div>
            <ul className="mt-4 space-y-4">
                <li data-aos="fade-right">
                    <span className="font-bold ">Expertise: </span>Our team consists of
                    industry experts who understand the intricacies of entertainment
                    events. We know the ins and outs, from securing top talent to handling
                    the smallest logistical details.
                </li>

                <li data-aos="fade-left">
                    <span className="font-bold ">Creativity: </span> We believe in pushing
                    boundaries and thinking outside the box. Our creative approach ensures
                    that your event is unique, fresh, and tailored to your audience.
                </li>

                <li data-aos="fade-right">
                    <span className="font-bold ">Attention to Detail: </span> No detail is
                    too small for us. We sweat the small stuff so that you don&apos;t have to,
                    ensuring that every aspect of your event is flawless.
                </li>
                <li data-aos="fade-left">
                    <span className="font-bold ">Customer-Centric: </span> Your
                    satisfaction is our top priority. We work closely with you, listening
                    to your ideas and concerns, and providing personalized solutions to
                    meet your needs.
                </li>
            </ul>

            <h3 className="text-3xl mb-4 mt-10 font-bold">Our Services</h3>

            <ul className="space-y-4">
                <li data-aos="fade-right">
                    <span className="font-bold">Event Planning:</span> From concept to
                    execution, we plan every detail of your event, ensuring it runs
                    smoothly.
                </li>

                <li data-aos="fade-left">
                    <span className="font-bold">Talent Booking:</span> We have connections
                    with top artists, performers, and entertainers to make your event
                    truly special.
                </li>

                <li data-aos="fade-right">
                    <span className="font-bold">Logistics and Production:</span> Leave the
                    logistics, sound, lighting, and stage setup to us. We&apos;ve got the
                    technical aspects covered.
                </li>

                <li data-aso="fade-left">
                    <span className="font-bold">Promotion:</span> We&apos;ll help you market
                    your event and sell tickets, ensuring a packed house.
                </li>
            </ul>

            <h3 className="text-3xl mb-4 mt-10 font-bold">Join Us on the Journey</h3>

            <div className="space-y-4 mb-10">
                <p data-aos="fade-up">
                    We invite you to join us on this exciting journey through the world of
                    entertainment. Whether you&apos;re an event organizer, a performer, or an
                    enthusiastic attendee, Entertainment Cracker is your partner in
                    bringing entertainment to life. Together, we&apos;ll create moments that
                    will be cherished forever.
                </p>

                <p data-aos="fade-up">
                    Thank you for choosing Entertainment Cracker as your entertainment
                    event management company. We can&apos;t wait to work with you and make
                    magic happen.
                </p>

                <p data-aos="fade-up">
                    Feel free to customize this &qout;About Us&qout; section to match your brand&apos;s
                    voice, values, and specific services. It should reflect the essence of
                    your entertainment event management company and convey your dedication
                    to creating exceptional experiences.
                </p>
            </div>
        </div>
    );
};

export default About;
