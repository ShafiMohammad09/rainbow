import { Eye, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersTableProps {
  users: User[];
  onAddUser: () => void;
  onDeleteUser: (id: number) => void;
}

export default function UsersTable({ users, onAddUser, onDeleteUser }: UsersTableProps) {
  return (
    <div className="w-full max-w-[1216px] mx-auto">
      <div className="rounded-md border border-gray-100 bg-white overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <h2 className="text-base font-semibold text-text-primary">Users</h2>
          <button
            onClick={onAddUser}
            className="h-8 px-4 flex items-center gap-1 rounded-md bg-primary text-white text-xs hover:opacity-90 transition-opacity"
          >
            <Plus className="w-3 h-3 stroke-[2.5]" />
            Add user
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-20 px-3 py-2.5 text-left text-xs font-normal text-text-primary">
                  Sr. No
                </th>
                <th className="w-[400px] px-3 py-2.5 text-left text-xs font-normal text-text-primary">
                  User name
                </th>
                <th className="px-3 py-2.5 text-left text-xs font-normal text-text-primary">
                  E-mail
                </th>
                <th className="w-[120px] px-3 py-2.5 text-left text-xs font-normal text-text-primary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="border-b border-gray-50">
                  <td className="px-3 py-4 text-center text-sm text-text-primary">
                    {index + 1}
                  </td>
                  <td className="px-3 py-4 text-sm text-text-primary">
                    {user.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-text-primary">
                    {user.email}
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-2.5">
                      <Link to={`/profile/${user.id}`}>
                        <button className="hover:opacity-70 transition-opacity">
                          <Eye className="w-4.5 h-4.5 text-[#97A1B2]" strokeWidth={1.25} />
                        </button>
                      </Link>
                      <button
                        onClick={() => onDeleteUser(user.id)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4 text-[#97A1B2]" strokeWidth={1.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
