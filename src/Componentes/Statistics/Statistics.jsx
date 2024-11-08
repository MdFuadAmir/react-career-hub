import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Featured from "../Featured/Featured";



const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Career hub | Statistics</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featured></Featured>
            
        </div>
    );
};

export default Statistics;