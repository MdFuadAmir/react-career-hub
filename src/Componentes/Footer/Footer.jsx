
const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919]">
      <div className="footer max-w-6xl mx-auto text-[#FFFFFFB3]">
      <aside>
        <header className="text-3xl mb-5 font-semibold text-white">CareerHub</header>  
        <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority <br /> have suffered alteration in some form.</p>
        <img className="mt-4" src="https://i.imgur.com/7N0kuMW.png" alt="logo" />
      </aside>
      <nav>
        <header className="text-xl font-semibold text-white">Company</header>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Work</a>
        <a className="link link-hover">Latest News</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <header className="text-xl font-semibold text-white">Product</header> 
        <a className="link link-hover">Prototype</a>
        <a className="link link-hover">Plans & Pricing</a>
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <header className="text-xl font-semibold text-white">Support</header>
        <a className="link link-hover">Help Desk</a>
        <a className="link link-hover">Sales</a>
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developers</a>
      </nav>
      <nav>
        <header className="text-xl font-semibold text-white">Contact</header>
        <p>524 Broadway , NYC <br /> +1 777 - 978 - 5570 </p>
        
      </nav>
      </div>
      <hr className="my-12"/>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-500">@2024 CareerHub. All Rights Reserved</p>
        <p className="text-gray-500">Powered by CareerHub</p>


      </div>
    </footer>
  );
};

export default Footer;
