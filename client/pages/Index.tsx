import { useState } from "react";
import Header from "@/components/Header";
import UsersTable from "@/components/UsersTable";
import AddUserModal from "@/components/AddUserModal";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "Dave Richards", email: "dave@mail.com" },
    { id: 2, name: "Abhishek Hari", email: "hari@mail.com" },
    { id: 3, name: "Nishta Gupta", email: "nishta@mail.com" },
  ]);

  const handleAddUser = (user: { name: string; email: string; contact: string }) => {
    const newUser = {
      id: users.length + 1,
      name: user.name,
      email: user.email,
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center pt-6">
        <UsersTable 
          users={users} 
          onAddUser={() => setIsModalOpen(true)}
          onDeleteUser={handleDeleteUser}
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
