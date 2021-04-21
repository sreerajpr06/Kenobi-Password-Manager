import React from "react";
import brick from "../assets/images/brick.jpg";


function Body3(){
    return(
        <div class=" bg-lightgrey text-white flex justify-between py-20 px-16">

            <div class="w-1/2 p-12">
                <img src={brick} alt="lock" class="w-full shadow rounded" ></img>
            </div>

             <div class="w-1/2 p-12">
            
             <h3 class="pb-12 text-4xl text-orange text-left">What is a password manager?</h3>
             <h3 class="text-base text-white ">
                 <p> At home and work, you have more online accounts that you can possibly remember. And since 81% of breaches are caused by weak or reused passwords, it’s essential that each account have a unique password. So how are you supposed to remember these strong, unique passwords? You can’t. But a password manager can.
                <br></br>
                <br></br>
                 A password manager is a tool that does the work of creating, remembering and filling in passwords. Simply log into an online account for the first time and Kenobi will store your username and password so every time you go back your credentials will be filled in automatically.
                 </p>
                 </h3>
            </div>
            

         </div>    

        
);
}
export default Body3;