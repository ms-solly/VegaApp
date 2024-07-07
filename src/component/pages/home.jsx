import { createEffect, createSignal, onMount } from "solid-js";
import {CgHome} from 'solid-icons/cg'
import {CgProfile} from 'solid-icons/cg'
import {IoSettingsOutline} from 'solid-icons/io'
import {FaSolidToggleOff} from 'solid-icons/fa'
import {FaSolidToggleOn} from 'solid-icons/fa'


import Joe from '../../images/home/joe.png';
import Bob from '../../images/home/bob.jpg';
import Alice from '../../images/home/alice.jpg';
import Charlie from '../../images/home/charlie.jpg';
import Lasagna from '../../images/home/lasagna.webp';
import Garden from '../../images/home/garden.jpg';
import Farmer from '../../images/home/farmer.jpg';
import Eve from '../../images/home/eve.webp';
import NavUpside from "../NavUpside";
import NavBottom from "../NavBottom";
  
const [theme, setTheme] = createSignal(localStorage.getItem('theme') || 'light');

const Home = () => {
  const [posts, setPosts] = createSignal([
    { id: 1, user: "Alice", avatar: Alice, content: "Just made a delicious vegan lasagna! 🍝🌱", image: Lasagna, likes: 34, comments: 12 },
    { id: 2, user: "Bob", avatar: Bob, content: "Check out my new garden setup! 🌿🌞", image: Garden, likes: 45, comments: 8 },
    { id: 3, user: "Charlie", avatar: Charlie, content: "Anyone has a good tofu recipe? 🥡", likes: 29, comments: 17 },
  ]);

  const [trending, setTrending] = createSignal([
    { id: 1, topic: "Vegan Recipes", emoji: "📚" },
    { id: 2, topic: "Plant-Based Diet", emoji: "🌱" },
    { id: 3, topic: "Animal Rights", emoji: "🐾" },
  ]);

  const [suggestions, setSuggestions] = createSignal([
    { id: 1, user: "Dave", avatar: Farmer, mutualFriends: 3, isFollow: false },
    { id: 2, user: "Eve", avatar: Eve, mutualFriends: 5, isFollow: false },
  ]);

  const [isProfileVisible, setIsProfileVisible] = createSignal(true);
  const [isSidebarVisible, setIsSidebarVisible] = createSignal(true);
  const [isFullWidthPosts, setIsFullWidthPosts] = createSignal(false);

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsProfileVisible(false);
      setIsSidebarVisible(false);
      setIsFullWidthPosts(true); // Enable full-width posts when scrolling down
    } else {
      setIsProfileVisible(true);
      setIsSidebarVisible(true);
      setIsFullWidthPosts(false); // Disable full-width posts when scrolling up
    }
    lastScrollY = currentScrollY;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleTheme = () => {
    const newTheme = theme() === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  onMount(() => {
    document.documentElement.classList.toggle('dark', theme() === 'dark');
  });

  const handleLike = (postId) => {
    const updatedPosts = posts().map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  const toggleFollow = (id) => {
    setSuggestions(prevSuggestions =>
      prevSuggestions.map(user =>
        user.id === id ? { ...user, isFollow: !user.isFollow } : user
      )
    );
  };

  return (
    <>
      <div class="dark:bg-gray-900">

        <div class={`min-h-screen flex flex-col items-center ${theme() === 'dark' ? 'dark' : ''}`}>
          {/* Navbar */}
          <NavUpside class=""/>

          {/* Main Content */}
          <div class=" container mx-auto flex flex-col md:flex-row mt-20 space-y-8 md:space-y-0 md:space-x-8 px-4 ">
            {/* User Profile */}
            <aside class={` hidden sticky md:block md:w-2/5 z-0 bg-white dark:bg-gray-800 p-4  rounded-lg shadow-md h-60  transition-transform duration-300 ${isProfileVisible() ? 'transform-none' : '-translate-y-full'}`}>
              <div class="text-center">
                <img src={Joe} alt="Profile" class="rounded-full w-24 h-24 mx-auto" />
                <h2 class="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-200">John Doe</h2>
                <p class="text-gray-600 dark:text-gray-400">Vegan Enthusiast</p>
              </div>
              {/* <div class="mt-6">
                <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200">Bio</h3>
                <p class="text-gray-700 dark:text-gray-400">Sharing my vegan journey with the world. Lover of animals and all things green! 🌱🐾</p>
              </div> */}
            </aside>

            {/* Posts Feed */}
            <main class={`md:w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-4 ${isFullWidthPosts() ? 'w-full' : ''}`}>
          
              {posts().map((post) => (
                <div key={post.id} class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
                  <div class="flex items-center space-x-4 mb-4">
                    {typeof post.avatar === 'string' && post.avatar.startsWith('data') ? (
                      <span class="text-3xl">{post.avatar}</span>
                    ) : (
                      <img src={post.avatar} alt="Avatar" class="rounded-full w-16 h-16" />
                    )}
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200">{post.user}</h3>
                      <p class="text-gray-600 dark:text-gray-400">@{post.user.toLowerCase()}</p>
                    </div>
                  </div>
                  <p class="text-gray-800 dark:text-gray-200 mb-4">{post.content}</p>
                  {post.image && (
                    <img src={post.image} alt="Post image" class="w-full  rounded-lg mb-4" />
                  )}
                  <div class="flex justify-between items-center mt-4">
              
                    <div class="flex items-center space-x-2">
                      <button
                        onClick={() => handleLike(post.id)}
                        class={`text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 ${post.liked ? 'text-red-500 dark:text-red-600 sepia-0' : 'text-gray-600 sepia dark:text-gray-400 hover:sepia-0'}`}
                      >
                        ❤️ {post.likes}
                      </button>
                      <button class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">💬 {post.comments}</button>
                    </div>
                    <button class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">🔗 Share</button>
                  </div>
                </div>
              ))}
            </main>

          
            {/* Sidebar */}
            <aside class={`hidden md:block md:w-2/5 space-y-6 transition-transform duration-300 ${isSidebarVisible() ? 'transform-none' : 'translate-x-full'}`}>
              {/* Trending Topics */}
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Trending Topics</h3>
                <ul class="space-y-4">
                  {trending().map(item => (
                    <li key={item.id} class="flex items-center space-x-2">
                      <span class="text-2xl">{item.emoji}</span>
                      <p class="text-gray-800 dark:text-gray-200">{item.topic}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggestions */}
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Suggestions for You</h3>
                <ul class="space-y-4">
                  {suggestions().map(user => (
                    <li key={user.id} class="flex items-center space-x-4">
                      <img src={user.avatar} class="w-20 h-14 rounded-full" alt={`${user.user}'s avatar`} />
                      <div>
                        <p class="text-lg font-bold text-gray-800 dark:text-gray-200">{user.user}</p>
                        <p class="text-gray-600 dark:text-gray-400">{user.mutualFriends} mutual friends</p>
                      </div>
                      <button
                        onClick={() => toggleFollow(user.id)}
                        class="bg-green-500 text-white dark:bg-green-400 dark:text-gray-800 py-1 px-3 rounded-lg"
                      >
                        {user.isFollow ? "Followed" : "Follow"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
       {/* <NavBottom/> */}
       <nav class="fixed bottom-0  bg-gray-300 text-gray-800 w-full py-4 shadow-md flex items-center justify-between p-20 space-x-10 ">
            <button class="fixed bottom-0 left-0 p-5" >🥡</button>
            <a href="/" class="" ><CgHome title="home" /></a>
            
            <a href="/profile" text="profile"><CgProfile/></a>
            
            <a href="/settings" text="settings"><IoSettingsOutline/></a>
            <button title="theme switch"
            class="text-white bg-white dark:bg-gray-300 dark:text-gray-800 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-gray-600 dark:hover:bg-gray-400"
            onClick={toggleTheme}
            >
            {theme() === 'light' ? <FaSolidToggleOff class="" type="On"/> : <FaSolidToggleOn type="Off"/>}
            </button>
      </nav>
      </div>
    </>
  );
};

export default Home;
