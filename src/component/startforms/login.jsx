import { createSignal } from 'solid-js';
import Welcome from '../../assets/illustrations/welcome.png';
import Leaf from '../../assets/illustrations/leaves.png';
import AboutUSImg from '../../assets/illustrations/aboutus.png';
import { AiFillGoogleCircle } from 'solid-icons/ai';  // google icon
import { BiLogosFacebookCircle } from 'solid-icons/bi'; //facebook icon
import { AiTwotoneCloseCircle } from 'solid-icons/ai'; //close button icon
import { BsYoutube } from 'solid-icons/bs' //yt icon
import { FaBrandsSquareTwitter } from 'solid-icons/fa' //twitter icon 
export default function LoginPg() {
  const [isPopupVisible, setIsPopupVisible] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Login form submitted");
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible());
  };

  return (
    <div className="w-full h-full fixed">
      {/* background */}
      <div className="absolute flex">
        <div className="w-[540px] h-[526px] rounded-full bg-blue-400 blur-[252.85px] mt-[-30px]"></div>
        <div className="w-[350px] h-[326px] flex-shrink-0 rounded-full bg-green-500 blur-[171.1px] mt-[-10vw] ml-[-10vw]"></div>
        <div className="w-[528px] h-[526px] rounded-full bg-blue-400 blur-[252.85px]"></div>
        <div className="w-[528px] h-[526px] rounded-full bg-blue-400 blur-[252.85px]"></div>
        <div className="w-[528px] h-[526px] rounded-full bg-blue-400 blur-[252.85px]"></div>
        <div className="w-[528px] h-[526px] rounded-full bg-blue-400 blur-[252.85px]"></div>
        <div className="w-[528px] h-[526px] rounded-full bg-blue-400 blur-[252.85px]"></div>
      </div>
      <div className="absolute w-[250px] h-[326px] flex-shrink-0 rounded-full bg-green-500 blur-[171.1px] mt-[-20vw] ml-[35vw]"></div>
      <div className="absolute w-[280px] h-[526px] rounded-full bg-blue-400 blur-[252.85px] mt-[-30vw] ml-[70vw]"></div>
      <div className="absolute">
        <div className="w-[350px] h-[326px] flex-shrink-0 rounded-full bg-green-500 blur-[171.1px] mt-[5vw]"></div>
        <div className="w-[280px] h-[526px] rounded-full bg-blue-400 blur-[252.85px] mt-[-25vw] ml-[42vw]"></div>
        <div className="w-[280px] h-[526px] rounded-full bg-blue-400 blur-[252.85px] mt-[-35vw] ml-[38vw]"></div>
        <div className="w-[350px] h-[326px] flex-shrink-0 rounded-full bg-green-500 blur-[171.1px] ml-[80vw] mt-[-35vw]"></div>
      </div>

      {/* bg end  */}

      {/* start first div */}
      <div className="absolute scroll-m-0  inset-0 md:flex  items-center justify-center overflow-y-auto  ">
        {/* here image hogi */}
        <div className="relative flex justify-center pt-30">
          <img className="h-96 " src={Welcome} alt="Welcome" />
          <button onClick={togglePopup} className="absolute top-1/2 right-2/4 bg-green-500 text-white p-1 rounded hover:bg-green-800 m-2 font-semibold text-sm">Click here!</button>
        </div>

        {/* second div start */}
        <div className="bg-white/30 border border-white/30 backdrop-blur-lg rounded-lg shadow-lg p-10 space-y-6 w-full max-w-md  ">
          <form onSubmit={handleSubmit} className="space-y-6 overflow-y-auto  ">
            <div className="relative">
              <label htmlFor="email" className="block mb-2 text-sm text-green-700 leading-10 tracking-wider font-semibold">Your Email</label>
              <input type="email" name="email" id="email" className="input-field text-gray-900 rounded-lg bg-white/40 border border-green-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-600 block w-full p-3 h-9 transition duration-200 ease-in-out text-xs" placeholder="john@example.com" required />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-sm text-green-700 leading-10 tracking-wider font-semibold">Password</label>
              <input type="password" name="password" id="password" placeholder="********" className="input-field text-gray-900 rounded-lg bg-white/40 border border-green-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-600 h-9 block w-full p-3 transition duration-200 ease-in-out text-xs focus-within:text-green-400" required />
            </div>
            <p className="text-gray-600"><a href='#' className=' font-thin text-xs'>Forgot Password?</a></p>
            <button type="submit" className="bg-green-400 rounded-lg backdrop-blur-sm hover:bg-green-700 text-white font-semibold py-3 w-full transition duration-300">Continue</button>
            <p className='text-center text-gray-600 text-sm'>Or</p>
            <div className='relative flex justify-center flex-col gap-2'>
              <button className='bg-white/30 border border-white/30 backdrop-blur-lg rounded-lg shadow-lg'><AiFillGoogleCircle className='text-gray-600 w-fit inline-block'/> Login with Google</button>
              <button className='bg-white/30 border border-white/30 backdrop-blur-lg rounded-lg shadow-lg'><BiLogosFacebookCircle className='text-gray-600 w-fit inline-block'/> Login with Facebook</button>
            </div>
          </form>
          <p className=" text-gray-500 text-center text-xs">Don't have an account yet?<a href="/auth/register" className="font-medium text-green-700 hover:underline"> Sign Up</a></p>
        </div>
        {/* end form wala div/end second div */}
      </div>

      {/* Popup div */}
      {isPopupVisible() && (
        <div className="fixed bg-white/30 inset-0 border border-white/30 backdrop-blur-lg rounded-lg shadow-lg p-10 space-y-6 w-full z-50 flex justify-center ">
          <div className="bg-white/30 border border-white/30 backdrop-blur-lg md:flex flex-row rounded-lg shadow-lg p-10 space-y-6 w-full max-h-screen overflow-y-auto scroll-p-0	scroll-m-0">
            <div className='md:w-3/5'>
              <h2 className="text-2xl font-semibold mb-4">KNOW ABOUT VEGA CHAT<img src={Leaf} alt="" className='w-10 h-12 inline-block'/></h2>
              <p className='text-[#0D8E12] text-center font-martel-sans text-xl font-bold leading-loose'>At <span className='text-[#E56D13] font-martel-sans font-extralight uppercase'>Vegachat</span>, we're on a mission to create a <span className='text-[#E56D13] font-martel-sans font-extralight uppercase'>kinder</span> and more <span className='text-[#E56D13] font-martel-sans font-extralight uppercase'>compassionate</span> world. Our platform is more than just a social media site—it's a community of like-minded individuals dedicated to spreading <span className='text-[#E56D13] font-martel-sans font-extralight uppercase'>kindness</span>, advocating for <span className='text-[#E56D13] font-martel-sans font-extralight uppercase'>animal rights</span>, and promoting sustainable living.
              Safety and trust are at the core of everything we do. We've built Vegachat with your security in mind, ensuring that you can engage with confidence and peace of mind. Join us in fostering connections, sharing stories, and making a positive impact in the world.</p>
            </div>
            <div className="relative">
              <div className="relative flex flex-rol gap-8 text-3xl justify-center">
                <BiLogosFacebookCircle class='mt-2 text-blue-900'/>
                <FaBrandsSquareTwitter class='text-[#04B7B7]' />
                <BsYoutube class='mt-8 text-red-600'/>
              </div>
              <img className="h-96" src={AboutUSImg} alt="Welcome" />
            </div>
          </div>
          <button onClick={togglePopup} className="absolute top-0 right-0 text-white p-2 rounded"><AiTwotoneCloseCircle className='text-green-400 hover:text-green-500 text-3xl absolute top-0 right-0'/></button>
        </div>
      )}
    </div>
  );
}
