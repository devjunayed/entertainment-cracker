import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex min-h-[100vh] flex-col justify-center items-center'>
            <h2 className="text-3xl">404 page not found</h2>
            <br />
            <button onClick={()=> navigate('/')} className="btn">&#129044; Go Back</button>
        </div>
    );
};

export default ErrorPage;