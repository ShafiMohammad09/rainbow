import { useState } from "react";
import { createPortal } from "react-dom";
import { Bell, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import NotificationsPanel from "./NotificationsPanel";
import { useNotifications } from "@/context/NotificationContext";

export default function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { unreadCount } = useNotifications();

  return (
    <header className="w-full h-[72px] px-4 md:px-8 flex items-center justify-between bg-white/70 shadow-[0_4px_8px_0_rgba(54,89,226,0.08)] backdrop-blur-sm">
      <Link to="/" className="flex items-center hover:opacity-70 transition-opacity flex-shrink-0">
        <img
          src="https://media.licdn.com/dms/image/sync/v2/D5627AQEExz9IHVAMhQ/articleshare-shrink_800/B56Zk9_A22H8AI-/0/1757681553241?e=2147483647&v=beta&t=EGoaQOgT6pB0JcjJXFx9Si9eDM5DcyQ-T5o27C5CzCw"
          alt="Logo"
          className="h-12 md:h-14 w-auto object-contain"
        />
      </Link>

      <div className="flex items-center gap-2 md:gap-5">
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/support"
            className="hover:opacity-70 transition-opacity flex items-center justify-center"
          >
            <Headphones className="w-4 h-4 md:w-5 md:h-5 text-[#0B1331]" />
          </Link>
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="hover:opacity-70 transition-opacity flex items-center justify-center relative"
          >
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-[#0B1331]" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 text-white text-[10px] md:text-xs rounded-full flex items-center justify-center font-semibold">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>
        </div>

        <Link
          to="/account"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-50 flex items-center justify-center hover:opacity-70 transition-opacity flex-shrink-0"
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

      <NotificationsPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
    </header>
  );
}
