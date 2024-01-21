import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])
  return (
    <div className="text-center mt-36">
      <h2 className="text-[#1A1919] text-5xl font-extrabold text-center">
        Job Category List
      </h2>
      <p className="mt-4 text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        {
            categorys.map(category => <Category key={category.id} category={category}></Category> )
        }
      </div>
    </div>
  );
};

export default CategoryList;
