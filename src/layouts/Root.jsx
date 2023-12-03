import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div className=" overflow-x-hidden w-11/12 mx-auto">
            <Header></Header>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;