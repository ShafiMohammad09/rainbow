import { useState, useEffect } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import UsersTable from "@/components/UsersTable";
import AddUserModal from "@/components/AddUserModal";
import { useUsers } from "@/context/UserContext";
import { useNotifications } from "@/context/NotificationContext";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);
  const { users, addUser, deleteUser } = useUsers();
  const { addNotification } = useNotifications();
  const [previousUserCount, setPreviousUserCount] = useState(users.length);

  useEffect(() => {
    if (!isWelcomeShown) {
      toast.success("Welcome! 👋", {
        description: "You have " + users.length + " users in the system",
        duration: 3000,
      });
      addNotification({
        title: "Welcome to User Management! 👋",
        message: `You have ${users.length} users in the system`,
        type: "info",
      });
      setIsWelcomeShown(true);
      setPreviousUserCount(users.length);
      return;
    }

    if (users.length > previousUserCount) {
      toast.success("User Added ✅", {
        description: "A new user has been successfully added",
        duration: 3000,
      });
      addNotification({
        title: "User Added ✅",
        message: "A new user has been successfully added to the system",
        type: "success",
      });
    } else if (users.length < previousUserCount) {
      toast.error("User Deleted 🗑️", {
        description: "User has been removed from the system",
        duration: 3000,
      });
      addNotification({
        title: "User Deleted 🗑️",
        message: "User has been removed from the system",
        type: "error",
      });
    }

    setPreviousUserCount(users.length);
  }, [users.length, isWelcomeShown, addNotification]);

  const handleAddUser = (user: { name: string; email: string; contact: string }) => {
    addUser({
      name: user.name,
      email: user.email,
      contact: user.contact,
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center pt-4 md:pt-6 pb-4 md:pb-6">
        <UsersTable
          users={users}
          onAddUser={() => setIsModalOpen(true)}
          onDeleteUser={deleteUser}
        />
      </main>

      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddUser}
      />
    </div>
  );
}
