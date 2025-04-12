import profile from './profile.jpg';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-6 shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={profile}
            alt="Sridhar Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />
          <h1 className="text-3xl font-bold">Sridhar A</h1>
        </div>
        <div className="text-sm sm:text-base mt-2 sm:mt-0">
          <p>Frontend Developer | Chennai, India</p>
          <p>Email: sridharmahadev18@gmail.com</p>
          <p>Phone: 9842216237</p>
          <a href="https://www.linkedin.com/in/sridhar-ananth/" target="_blank" className="underline text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
