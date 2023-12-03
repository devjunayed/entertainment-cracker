import { useContext } from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import { AuthContext } from "../../providers/AuthProviders";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    const { loading } = useContext(AuthContext);
    return (
        <div>
            {
                loading ?
                    <div className="flex flex-col justify-center items-center h-20"><span className=" mx-auto loading loading-ring loading-lg"></span><span>Loading...</span></div> :
                    <>

                        <Banner />
                        <UpcomingEvents />
                        <Services />
                        <Testimonials />
                    </>
            }

        </div>
    );
};

export default Home;