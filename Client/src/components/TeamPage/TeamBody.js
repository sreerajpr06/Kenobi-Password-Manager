import React from "react";
import rohit from "../assets/images/rohit.jpeg";
import sidhant from "../assets/images/sidhant.jpg";
import riya from "../assets/images/riya.jpg";
import sreeraj from "../assets/images/sreeraj.jpg";
import git from "../assets/images/git.png";
import linked from "../assets/images/linked.png";
import mail from "../assets/images/mail.png";

function TeamBody(){
    return(
        <body>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">

<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={sreeraj}
             alt=""
             class="h-full w-full"/>
    </div>

    <h2 class="mt-4 font-bold text-xl">Sreeraj Rajeendran</h2>
    <h6 class="mt-2 text-sm font-medium">Founder</h6>

    <p class="text-xs text-gray-500 text-center mt-3">
        Student at Cochin University of Science and Technology
    </p>

    <ul class="flex flex-row mt-4 space-x-2">
        <li>
            <a href="mailto:sreerajpr06@gmail.com" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={mail}></img>
            </a>
        </li>
        <li>
            <a href="https://github.com/sreerajpr06/" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={git}></img>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/sreeraj-rajeendran-8a46a618b/" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={linked}></img>
            </a>
        </li>
    </ul>
</div>

<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={sidhant}
             alt=""
             class="h-full w-full"/>
    </div>

    <h2 class="mt-4 font-bold text-xl">Sidhant Unnithan</h2>
    <h6 class="mt-2 text-sm font-medium">Founder</h6>

    <p class="text-xs text-gray-500 text-center mt-3">
        Student at Cochin University of Science and Technology
    </p>

    <ul class="flex flex-row mt-4 space-x-2">
        <li>
            <a href="mailto:contact@sidhantunnithan.com" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={mail}></img>
            </a>
        </li>
        <li>
            <a href="https://github.com/jindanwastaken/" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={git}></img>
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/sidhantunnithan" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={linked}></img>
            </a>
        </li>
    </ul>
</div>

<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={riya}
             alt=""
             class="h-full w-full"/>
    </div>

    <h2 class="mt-4 font-bold text-xl">Riya Shaji</h2>
    <h6 class="mt-2 text-sm font-medium">Founder</h6>

    <p class="text-xs text-gray-500 text-center mt-3">
        Student at Cochin University of Science and Technology
    </p>

    <ul class="flex flex-row mt-4 space-x-2">
        <li>
            <a href="mailto:riyashaji1@gmail.com" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={mail}></img>
            </a>
        </li>
        <li>
            <a href="https://github.com/canaalex" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={git}></img>
            </a>
        </li>
        <li>
            <a href="linkedin.com/in/riya-shaji-6890821a0" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={linked}></img>
            </a>
        </li>
    </ul>
</div>

<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src={rohit}
             alt=""
             class="h-full w-full"/>
    </div>

    <h2 class="mt-4 font-bold text-xl">Rohit P S</h2>
    <h6 class="mt-2 text-sm font-medium">Founder</h6>

    <p class="text-xs text-gray-500 text-center mt-3">
        Student at Cochin University of Science and Technology
    </p>

    <ul class="flex flex-row mt-4 space-x-2">
        <li>
            <a href="mailto:rohithp61@gmail.com" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={mail}></img>
            </a>
        </li>
        <li>
            <a href="https://github.com/rockchipgh" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={git}></img>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/rohit-p-s-902965177/" class="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                <img src={linked}></img>
            </a>
        </li>
    </ul>
</div>
</div>
<footer class="w-full text-center border-t border-grey p-4 pin-b bg-blue-dark">
        <p class="font-bold font-sans text-white">This is our footer</p>
    </footer>
	</body>

        
);
}
export default TeamBody;