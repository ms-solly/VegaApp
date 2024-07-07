export default function NavUpside (){

    return(
        <div class="z-10 bg-white dark:bg-gray-900 text-black w-full h-14 rounded fixed top-0 ">
        <nav class="flex gap-10 p-4 list-none justify-center content-center gap-x-40 ">
          <li class=" hover:text-gray-700 cursor-pointer"><a href="#">Feed</a></li>
          <li class=" hover:text-gray-700 cursor-pointer"><a href="#">Recent</a></li>
          <li class=" hover:text-gray-700 cursor-pointer"><a href="#">Trending</a></li>
        </nav>
       </div>
    )
}