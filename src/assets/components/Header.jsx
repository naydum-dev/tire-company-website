function Header() {
  return (
    <header className="bg-white text-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold"> Tire Company</div>
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-600">
              Products
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
