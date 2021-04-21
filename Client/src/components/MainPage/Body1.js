import React from "react";
import lock from "../assets/images/lock.png";


function Body1(){
    return(
        <div class=" bg-lightgrey text-white flex justify-between py-20 px-8">


             <div class="w-1/2 p-12">
            
             <h3 class="pb-12 text-4xl text-orange text-left">Password Manager</h3>
             <h3 class="text-base text-white text-left">
                 <p> 

                        Forgetting your passwords?
                        You need unique and complex passwords to help keep each of your online accounts secure, but who can remember all those passwords?
                        <br></br>
                        <br></br>
                        Kenobi Password Manager allows you to use complex passwords that are difficult to hack, and store them more securely in an encrypted online vault.
                        <br></br>
                        <br></br>
                        With Kenobi Password Manager, one master password unlocks your vault so you can log into your accounts easily, without having to remember every single password.
                        <br></br>
                 </p>
                 </h3>
            </div>
            <div class="w-1/2 px-28">
                <img src={lock} alt="lock" class="w-full"></img>
            </div>

         </div>    

        
);
}
export default Body1;