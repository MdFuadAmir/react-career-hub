import '../../../src/CssBtn.css';

const Banner = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
            <div className='pt-10 px-2'>
                <h1 className="text-7xl font-extrabold">One Step <br /> Closer To Your <br /><span className="text-[#7E90FE]">Drean Job</span> </h1>
                <p className="mt-6 text-[#757575]">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='button btn mt-8'>Get Started</button>
            </div>
            <div>
                <img src='https://i.imgur.com/ZSMnHLv.png' alt="my image" />
            </div>
        </div>
    );
};

export default Banner;