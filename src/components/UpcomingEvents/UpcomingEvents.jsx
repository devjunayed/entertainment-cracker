import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const UpcomingEvents = () => {
   
    const { allData } = useContext(AuthContext);
    const data = allData[3];
    return (
        <div>
            <h2 data-aos="zoom-in" className="text-3xl md:text-5xl my-4 md:my-10 text-center">Upcoming Events</h2>
            <div className="flex md:flex-row flex-col shadow-xl gap-4 md:rounded-5xl">
                <div data-aos="fade-right" className="md:w-6/12 ">
                    <img className="w-full md:rounded-s-3xl" src={data.image_url} alt={data.title} />
                </div>
                <div data-aos="fade-left" className="m-10 md:w-6/12">
                    <h2 className="text-3xl font-bold">{data.title}</h2>
                    <p className="text-xl text-justify mt-4">{data.body}</p>
                    <p className="text-xl text-gray-400 mt-10 text-right">Duration: {data.duration}</p>
                </div>
            </div>
            
        </div>
    );
};

export default UpcomingEvents;