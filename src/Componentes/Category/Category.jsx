import PropTypes from 'prop-types';
import "../../../src/CssBtn.css";



const Category = ({ category }) => {
  const {logo, category_name, availability} = category;
  return (
      <div className="categoryBg mt-8 p-10 rounded">
        <figure className="p-4 cataLogo w-fit rounded-lg">
          <img
            src={logo}
            alt="category logo"
            
          />
        </figure>
        <div className="mt-12 text-left">
          <h2 className="mb-2 text-[#474747] font-extrabold text-xl">{category_name}</h2>
          <p className="text-[#A3A3A3] text-base font-medium">{availability}</p>
        </div>
      </div>
    
  );
};
Category.propTypes ={
  category: PropTypes.array.isRequired,
  
}
export default Category;
