// src/components/Feed.jsx
import { createSignal } from 'solid-js';

const Feed = () => {
  // Sample posts data
  const posts = [
    { id: 1, user: 'Jane Doe', content: 'Loved this new vegan recipe!', date: '2h ago', image: '/path/to/image.jpg' },
    { id: 2, user: 'John Smith', content: 'Check out this vegan dessert!', date: '5h ago', image: '/path/to/image2.jpg' },
    // Add more posts
  ];

  return (
    <main class="flex-1 p-4">
      {posts.map(post => (
        <div 
          class="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105" 
          data-aos="fade-up"
         
        >
          <div class="flex items-center mb-2">
            {/* <img src="/path/to/avatar.jpg" alt="Avatar" class="w-10 h-10 rounded-full mr-3"/> */}
            <div>
              <div class="font-semibold">{post.user}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
            </div>
          </div>
          <p class="mb-2">{post.content}</p>
          {/* {post.image && <img src={post.image} alt="Post content" class="w-full rounded-lg mb-2" />} */}
          <div class="flex justify-between">
            <button class="text-blue-500 hover:underline">Like</button>
            <button class="text-blue-500 hover:underline">Comment</button>
            <button class="text-blue-500 hover:underline">Share</button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Feed;
