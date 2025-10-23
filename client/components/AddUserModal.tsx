import { X } from "lucide-react";
import { useState } from "react";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (user: { name: string; email: string; contact: string }) => void;
}

export default function AddUserModal({ isOpen, onClose, onAdd }: AddUserModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (name && email && contact) {
      onAdd({ name, email, contact });
      setName("");
      setEmail("");
      setContact("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      
      <div className="relative w-[623px] h-full bg-white shadow-lg flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b shadow-[0_4px_8px_0_rgba(54,89,226,0.08),0_0_12px_0_rgba(54,89,226,0.12)]">
          <h2 className="text-lg font-semibold text-text-primary">Add User</h2>
          <button
            onClick={onClose}
            className="hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5 text-[#97A1B2]" />
          </button>
        </div>

        <div className="flex-1 p-6 flex flex-col gap-3 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-secondary">Name of the user</label>
            <input
              type="text"
              placeholder="Type here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-text-tertiary"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs text-text-secondary">E-mail</label>
              <input
                type="email"
                placeholder="Type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-text-tertiary"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs text-text-secondary">Contact</label>
              <input
                type="text"
                placeholder="Type here"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="h-10 px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-text-tertiary"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-brand-75">
          <button
            onClick={onClose}
            className="h-10 px-4 rounded-md bg-brand-50 text-sm text-primary hover:bg-brand-75 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="h-10 px-4 rounded-md bg-primary text-sm text-white hover:opacity-90 transition-opacity"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
