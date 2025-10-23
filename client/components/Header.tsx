import { Bell, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[72px] px-8 flex items-center justify-between bg-white/70 shadow-[0_4px_8px_0_rgba(54,89,226,0.08)] backdrop-blur-sm">
      <Link to="/" className="flex items-center hover:opacity-70 transition-opacity">
        <div className="border-2 border-black px-3 py-1">
          <span className="text-sm font-bold">LOGO</span>
        </div>
      </Link>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-4">
          <Link
            to="/support"
            className="hover:opacity-70 transition-opacity flex items-center justify-center"
          >
            <Headphones className="w-5 h-5 text-[#0B1331]" />
          </Link>
          <Link
            to="/notifications"
            className="hover:opacity-70 transition-opacity flex items-center justify-center"
          >
            <Bell className="w-5 h-5 text-[#0B1331]" />
          </Link>
        </div>

        <Link
          to="/account"
          className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
              fill="#E7DFFF"
              stroke="#6834FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
              stroke="#6834FF"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
