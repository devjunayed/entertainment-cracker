import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";


const Services = () => {
    const { allData } = useContext(AuthContext);
    const [displayData, setDisplayData] = useState(allData.slice(0, 6));



    return (
        <div data-aos="zoom-out-right">
            <h2 className="text-5xl text-center my-10">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                {
                    displayData.map((data) =>

                        <div data-aos="flip-up" key={data.id} className="card  shadow-xl">
                            <figure><img src={data.image_url} alt={data.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.title}</h2>
                                <p>{data.short_body}</p>
                                <div className="flex justify-between  text-gray-500">
                                    <p className="text-left">Price: ${data.price}</p>
                                    <p className="text-right">Duration: {data.duration}</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <Link to={`service/${data.id}`}>
                                        <button className="btn btn-outline bg-black text-white mt-4">Show Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )
                }


            </div>
            <div className="flex my-10">
                {
                    displayData.length === allData.length ?
                        <button onClick={() => setDisplayData(allData.slice(0, 6))} className="mx-auto btn btn-outline bg-black text-white">Hide More</button>
                        :
                        <button onClick={() => setDisplayData(allData)} className="mx-auto btn bg-black btn-outline text-white">See More</button>
                }

            </div>
        </div>
    );
};

export default Services;