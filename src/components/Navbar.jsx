const Navbar = () => {
    const links = ["about", "skills", "projects", "experience", "education", "contact"];
  
    return (
      <nav className="fixed top-0 left-0 w-full  bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center">
          <ul className="flex gap-4 text-sm text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  