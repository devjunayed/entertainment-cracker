import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer } from "react-toastify";




const Login = () => {
    const {  signInUser, setUser, toastMessageSuccess, googleSignIn, toastMessageErr } = useContext(AuthContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                toastMessageSuccess("Login Successfully");
                setUser(result);
                setTimeout(()=> {
                    navigate("/");
                }, 1200);
            })
            .catch(err => {
                if(err.code === 'auth/invalid-login-credentials'){
                    toastMessageErr("Something went wrong");
                }
            });
    }
    return (
        <div className="w-full my-10 md:my-20">
            <div className=" w-10/12 md:w-5/12 mx-auto md:shadow-lg rounded-lg md:py-14  md:px-6">
                <h2 className="text-center text-2xl md:text-3xl mb-6">Login Now</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="ml-2" htmlFor="email">Enter your email</label>
                        <input type="email" name="email" className="w-full border p-4 mt-4" id="email" placeholder="Your email..." />
                    </div>
                    <div>
                        <label className="ml-2" htmlFor="password">Enter your password</label>
                        <div className="flex relative">
                            <input type={visible ? "text" : "password"} name="password" className="w-full border p-4 mt-4" id="password" placeholder="Your password..." />
                            <button onClick={() => setVisible(!visible)}>
                                {
                                    visible
                                        ?
                                        <AiFillEyeInvisible className="absolute text-2xl right-4 top-8" />
                                        :
                                        <AiFillEye className="absolute right-4 text-2xl top-8" />
                                }
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <input type="submit" value="submit" className="bg-red-600 w-full text-white  btn hover:bg-red-700" />
                    </div>
                    <p className="mt-2 text-center text-gray-500">Do not have an account? <Link className="text-blue-400" to="/register">Register now</Link></p>
                    <div className="text-center">
                        <p>OR</p>
                    </div>
                </form>
                <button onClick={
                    ()=> {
                        googleSignIn()
                        .then((result) => {
                            setUser(result);
                            toastMessageSuccess('sign in successfully!');
        
                            setTimeout(()=> {
                                navigate("/");
                            }, 1200);
                        })
                        .catch((err) => console.log(err));
                    }
                } className="text-center btn mt-4 bg-white border w-full flex items-center justify-center py-2 gap-2 rounded-lg border-orange-500">
                    <FcGoogle className="text-3xl"></FcGoogle>
                    <Link>Sign In With Google</Link>
                </button>

            </div>
            <ToastContainer pauseOnFocusLoss={false} />

        </div>
    );
};

export default Login;