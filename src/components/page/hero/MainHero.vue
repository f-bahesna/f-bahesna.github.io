<template>
    <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div class="max-w-lg md:mx-12 md:order-2 text-center sm:text-left">
            <h1 class="text-3xl font-medium tracking-wide md:text-6xl" alt="frada">Hi!
                <span class="font-bold font-serif">I'm
                    Frada</span>
            </h1>
            <p class="mt-4 font-sans text-2xl" alt="introducing lianum frada bahesna">Software Engineer
                Backend <br>
                From <span class="text-3xl font-serif">INDONESIA</span></p>
            <div class="mt-4 sm:mt-9">
                <a href="https://www.linkedin.com/in/fradabahesna" target="_blank"
                    class="block px-12 py-4 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Get
                    in touch</a>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center w-full h-96 md:w-1/2">
        <img class="object-cover w-1/2 h-1/2 sm:h-full max-w-2xl -mt-12 sm:mt-0 rounded-md"
            src="https://res.cloudinary.com/jadikaya-9/image/upload/v1654046018/fbahesna/frada_plpkkn.jpg"
            alt="lianum frada bahesna">
    </div>
</template>

<script>
import { motion } from "motion-v";

export default {
    name: "MainHero",
    components: { motion }
}
</script>
