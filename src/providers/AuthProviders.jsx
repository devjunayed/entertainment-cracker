import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: false,
        })
    }, []);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((datas) => setAllData(datas));
    }, [allData]);

    const toastMessageErr = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const toastMessageSuccess = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const signInUser = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    };
    const createEmailUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoading(true);

        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    const contextValue = {
        user,
        logOut,
        setUser,
        googleSignIn,
        createEmailUser,
        signInUser,
        toastMessageErr,
        toastMessageSuccess,
        allData,
        setAllData,
        loading,
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node,
};

export default AuthProviders;
