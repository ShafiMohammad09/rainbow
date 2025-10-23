import { useState } from "react";
import Header from "@/components/Header";
import UsersTable from "@/components/UsersTable";
import AddUserModal from "@/components/AddUserModal";
import { useUsers } from "@/context/UserContext";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { users, addUser, deleteUser } = useUsers();

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
      
      <main className="flex-1 flex flex-col items-center pt-6">
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
