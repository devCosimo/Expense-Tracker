import React from 'react';
import { X } from 'lucide-react';

export const CustomAlert = ({ message, onClose }) => (
  <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md flex justify-between items-center">
    <div>{message}</div>
    <button onClick={onClose} className="text-green-700 hover:text-green-900">
      <X size={20} />
    </button>
  </div>
);