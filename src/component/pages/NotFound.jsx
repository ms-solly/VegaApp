import '../../index.css'
import NavUpside from '../NavUpside'

export default function NotFoundd(){

    

    return(
        <>
        <NavUpside/>
        <div class="flex flex-col justify-center p-40 bg-blue-200 h-full ">

                <h1 class=" font-mono">NOT Found......
                    <br />
                    <br />
                    <span class=" font-serif text-2xl">
                        Go Back 
                    </span>
                    
                    <a href="/" class="">
                        <button class="p-2 bg-pink-500 w-fit m-auto h-fit border-2  border-pink-900 rounded text-2xl underline underline-offset-4 hover:no-underline">    
                            Home
                        </button>
                    </a>
                </h1>
                
        </div>
        </>

                // <div class="flex flex-col justify-center p-40 bg-blue-200 h-full ">
        
                //         <h1 class="flex flex-col text-center font-extrabold p-14 border-separate border-spacing-8 border-double border-blue-900 rounded-full border-4 text-8xl h-100 bg-blue-400">NOT Found
                //             <br />
                //             <button class="p-2 bg-pink-500 w-fit m-auto h-fit border-2  border-pink-900 rounded text-2xl "><span>Go Back </span><a href="/">Home</a></button></h1>
                        
                // </div>
        

    )
}