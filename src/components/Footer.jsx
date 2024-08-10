// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="py-8">
      <div className="w-[90%] border-[3px] border-[#DDDDDD] rounded-xl p-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:text-left text-center">

        <div className='mx-auto md:mx-0'>
          <img src="https://s3-alpha-sig.figma.com/img/5dbd/187b/84ba112be1562a94f9019ad71f11179f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESdI6BjiY1KE6MgUOnjR9a6o9Y4lyPOkt1i8p6Ut1hy0FJbSumt2nm6RlaqZDH3ZvgNpv9SeI-PcM8jxBCHrD-iJD8Qsx4TpRWyL1P8PeU6p7jZxl4dhOiq-wbdR-Nnice0UBso-YBUw8iAzKhOdjBMFsun4fwTpLDCvG2FcKxtygmxPaalGIgdhJ2IekLZocdvNoSgqMi34tQ6ekMNyYdWfvb1xRiIVC5AETJLPOKYgK3HayFLqRRKQ~HjfUMO~LTZWs-YjBR2sxGHXa3M59cA8lvQmTV3SDtt3e0cHiOVhsEZSZ7lMnKCQLVQigbbqwQgU4xQPS7mqDAYxPtmmfw__" alt="Logo" className="w-36 mb-4 p-4 rounded-lg bg-[#ddddddd6]" />
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[#495E57]">Doormat Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:underline">Menu</Link>
            </li>
            <li>
              <Link to="/reservations" className="hover:underline">Reservations</Link>
            </li>
            <li>
              <Link to="/order" className="hover:underline">Order Online</Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[#495E57]">Contact</h3>
          <ul className="space-y-2">
            <li>1234 Street Name</li>
            <li>City, State, ZIP</li>
            <li>(123) 456-7890</li>
            <li>email@example.com</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 text-[#495E57]">Social M edia Links</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram  className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter  className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
