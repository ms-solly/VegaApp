// src/components/Sidebar.jsx
const Sidebar = () => {
    return (
      <aside class="hidden lg:block w-1/4 p-4 bg-light-sidebar dark:bg-dark-sidebar shadow-md">
        <h2 class="text-lg font-semibold mb-4">Trending Topics</h2>
        {/* Example topics */}
        <ul>
          <li class="mb-2"><a href="#" class="text-blue-500 hover:underline">Vegan Recipes</a></li>
          <li class="mb-2"><a href="#" class="text-blue-500 hover:underline">Healthy Living</a></li>
          {/* Add more topics */}
        </ul>
        <h2 class="text-lg font-semibold mt-6 mb-4">Suggested Posts</h2>
        {/* Example suggestions */}
        <ul>
          <li class="mb-2"><a href="#" class="text-blue-500 hover:underline">Post Suggestion 1</a></li>
          <li class="mb-2"><a href="#" class="text-blue-500 hover:underline">Post Suggestion 2</a></li>
          {/* Add more suggestions */}
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  