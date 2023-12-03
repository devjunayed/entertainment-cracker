import { useLoaderData, Link } from "react-router-dom";

const ServiceDetails = () => {
    const data = useLoaderData()[0];
    
    return (
        <div>
            <div className="card w-9/12 mx-auto card-compact mt-4">
                <figure><img src={data.image_url} className="w-full" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.body}</p>
                    <p><span className="font-bold">Included Services: </span>{data.included_services}</p>
                    <p><span className="font-bold">Duration: </span>{data.duration}</p>
                    <p><span className="font-bold">Price: </span>{data.price}</p>
                    <button className="btn bg-green-600 text-white hover:bg-green-800"><Link to="/contact">Contact Now</Link></button>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;