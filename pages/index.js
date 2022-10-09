import Image from "next/image";
import TwitterLogo from "../assets/images/twitter-logo.svg";


export default function Home() {
  return(
    <div className="min-h-screen flex flex-col">

     <div className="flex-1 grid grid-cols-12">
       <div className="h-full col-span-7 relative">
        <Image 
         width={1302}
         height={955}
         layout="fill"
         src="/images/loadingimages.png" alt="twitter" 
         className="object-cover"
        />
       </div> 
         <div className="col-span-5 px-7 flex items-center">
         <div>
           <TwitterLogo className="w-10 h-10 text-primary"/>

            <h1 className="text-6xl font-black mt-16"> Happening now </h1>

            <div className="mt-12">
              <h2 className="mb-8 text-3xl font-bold">Join zehloos twitter today.</h2>

              <div className="w-72">
                <button  className="mt-8 w-full py-2 px6 bg-primary text-white rounded-full font-bold"> Sign up with email </button>
                <div className="text-xs text-gray-500 mt-2">
                 By signing up, you agree to the <a className="text-primary" href="https://twitter.com/en/tos">Terms of Service</a> and <a className="text-primary" href="https://twitter.com/en/privacy">Privacy Policy</a>, <a className="text-primary" href="https://help.twitter.com/tr/rules-and-policies/twitter-cookies">including Cookie Use.</a> 
                </div>
 
                <div className="mt-12">
                 <h2 className="text-lg font-semibold">Alerady have an account?</h2>
                 <button className="mt-5 w-full py-2 px-6 border border-gray-200 text-primary rounded-full">Sign in</button>

                </div>
              </div>
            </div>
         </div>
       </div>

      </div>

      <footer className="bg-gray-50 py-2">
        <div className="container mx-auto text-sm flex justify-center space-x-4 text-gray-500">
          <a href="https://twitter.com">About</a>
          <a href="https://twitter.com">Help </a>
          <a href="https://twitter.com">Terms of Service</a>
          <a href="https://twitter.com">Privacy Policy</a>
          <a href="https://twitter.com">Cookie Policyt</a>
          <a href="https://twitter.com">Imprint</a>
        </div>
      </footer>


    </div>
  );
}