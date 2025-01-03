import { useNavigate } from "solid-app-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section id="home" class="relative w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-green-300 to-blue-500 p-6">
      <div class="parallax absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full shadow-md"></div>
      <div class="parallax absolute top-16 right-0 w-24 h-24 bg-green-500 rounded-full shadow-md"></div>
      <h1 class="text-5xl font-bold text-black">Welcome to VeganHub</h1>
      <p class="text-black text-xl mt-4">Join the ultimate community for vegan recipes and health discussions 🌱</p>
      <button
        class="mt-8 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-800 transition-all"
        onClick={() => navigate("/feed")}
      >
        Explore Now
      </button>
    </section>
  );
}
