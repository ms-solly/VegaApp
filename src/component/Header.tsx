// src/components/Header.jsx
import { createSignal } from 'solid-js';

const Header = () => {
  return (
    <header class="bg-light-bg dark:bg-dark-bg shadow-lg p-4 flex items-center justify-between">
      <div class="text-xl font-bold">VeganVibes</div>
      <input 
        type="text" 
        placeholder="Search..." 
        class="p-2 rounded-lg shadow-inner"
      />
      <div class="flex items-center space-x-4">
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fas fa-bell">k</i>
        </button>
        <button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fas fa-user-circle">l</i>
        </button>
      </div>
    </header>
  );
};

export default Header;
