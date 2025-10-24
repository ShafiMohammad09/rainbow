import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useNotifications } from "@/context/NotificationContext";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const { notifications, markAsRead, clearNotifications } = useNotifications();

  if (!isOpen) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-100";
      case "error":
        return "bg-red-50 border-red-100";
      case "info":
        return "bg-blue-50 border-blue-100";
      default:
        return "bg-gray-50 border-gray-100";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const content = (
    <>
      <div className="fixed inset-0 z-[9998] bg-black/20" onClick={onClose} />
      <div className="fixed right-0 top-[72px] z-[9999] w-full md:w-96 max-h-[calc(100vh-72px)] bg-white shadow-lg flex flex-col rounded-b-lg md:rounded-none">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-base md:text-lg font-semibold text-text-primary">Notifications</h2>
          <div className="flex items-center gap-2">
            {notifications.length > 0 && (
              <button
                onClick={clearNotifications}
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <p className="text-sm text-text-secondary">No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-l-4 ${
                    notification.type === "success"
                      ? "border-l-green-500"
                      : notification.type === "error"
                      ? "border-l-red-500"
                      : "border-l-blue-500"
                  } ${getTypeColor(notification.type)} ${!notification.read ? "bg-blue-50/50" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                      notification.type === "success"
                        ? "bg-green-500"
                        : notification.type === "error"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-text-primary">
                        {notification.title}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {notification.message}
                      </p>
                      <p className="text-xs text-text-tertiary mt-1">
                        {formatTime(notification.timestamp)}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
}
