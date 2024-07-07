import { createSignal, onCleanup } from "solid-js";

function clock(){

    const [time, setTime] = createSignal(new Date().toLocaleTimeString());

    const updateClock = () => {
      setTime(new Date().toLocaleTimeString());
    };
  
    const interval = setInterval(updateClock, 1000);
  
    onCleanup(() => clearInterval(interval));
  
    return (
      <div class="fixed top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded shadow-md">
        {time()}
      </div>
    );
  };

  export default clock ;
