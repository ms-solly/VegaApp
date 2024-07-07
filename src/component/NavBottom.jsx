export default function NavBottom(){

    

    return(
        <nav class="fixed bottom-0 bg-gradient-to-r from-yellow-300 to-green-300 dark:from-gray-700 dark:to-gray-800 w-full py-4 shadow-md flex items-center justify-center space-x-24">
            <a href="/" class="text-white"><i class="ri-home-3-line">Home</i></a>
            <a href="/profile" class="text-white">Profile</a>
            <a href="/settings" class="text-white">Settings</a>
            <button
            class="text-white bg-white dark:bg-gray-300 dark:text-gray-800 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-gray-600 dark:hover:bg-gray-400"
            onClick={toggleTheme}
            >
            {theme() === 'light' ? '🌚' : '🌞'}
            </button>
      </nav>
    )
}