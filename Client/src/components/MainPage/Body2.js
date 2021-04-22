import React from "react";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";


function Body2(){
    return(
        <div class=" bg-orange p-20">
            <div class="text-center">
            
            <h3 class="pb-8 text-5xl text-white">Security. Speed. Convenience.</h3>
               
           </div>

                 <nav class="flex items-center justify-between flex-wrap p-8">
                    
                   
                    <div class="w-full block flex-grow lg:flex lg:items-center text-lightgrey lg:w-auto">
                        <div class="text-lg text-right lg:flex-grow p-5">
                        <img src={icon1}alt="icon1"class="block mt-4 lg:inline-block lg:mt-3 font-light"></img>
                        All your data – secured and in one place
                        
                        </div>

                        <div class="text-lg lg:flex-grow p-5">
                        <img src={icon2}alt="icon2"class="block mt-4 lg:inline-block lg:mt-3 font-light"></img>
                        Autofill your login details
                        
                        </div>



                        <div class="text-lg lg:flex-grow p-5">
                        <img src={icon3}alt="icon3"class="block mt-4 lg:inline-block lg:mt-3 font-light"></img>
                        Sync and access from PC, mobile and tablets
                        
                        </div>
                        
                        
                    </div>
                    </nav>

         </div>    

        
);
}
export default Body2;