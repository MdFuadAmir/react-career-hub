import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorePage = () => {
    return (
        <div className="text-center mt-32 p-9">
            <Helmet>
            <title>Career hub | ErrorePage</title>
            </Helmet>
            <h2 className="text-5xl font-bold items-center mb-16">Ooops!!!</h2>            
            <Link className="p-4 bg-blue-600 rounded-lg text-white font-bold" to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorePage;