<template>
    <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div class="max-w-lg md:mx-12 md:order-2 text-center sm:text-left">
            <h1 class="text-3xl font-medium tracking-wide md:text-6xl" alt="frada">Hi!
                <span class="font-bold font-serif">I'm
                    Frada</span>
            </h1>
            <p class="mt-4 font-sans text-2xl" alt="introducing lianum frada bahesna">Fullstack AI Engineer
                <br>
                <span class="text-lg text-gray-500 block mt-1">currently working as a <span class="font-bold underline">Middle Golang Backend Engineer</span> at <span class="font-bold underline">Inosoft</span> 🇮🇩</span>
            </p>
            <div class="mt-4 sm:mt-9">
                <a href="https://www.linkedin.com/in/fradabahesna" target="_blank"
                    class="block px-12 py-4 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Get
                    in touch</a>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center w-full h-96 md:w-1/2 relative">
        <!-- Skeleton Loader -->
        <div v-if="!isLoaded"
            class="skeleton object-cover w-1/2 h-1/2 sm:h-full max-w-2xl -mt-12 sm:mt-0 rounded-md bg-slate-200 dark:bg-slate-700">
        </div>

        <!-- Hero Image -->
        <img :class="['object-cover w-1/2 h-1/2 sm:h-full max-w-2xl -mt-12 sm:mt-0 rounded-md transition-opacity duration-500', isLoaded ? 'opacity-100' : 'opacity-0 absolute']"
            src="https://res.cloudinary.com/jadikaya-9/image/upload/v1654046018/fbahesna/frada_plpkkn.jpg"
            alt="lianum frada bahesna" @load="isLoaded = true">
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "MainHero",
    setup() {
        const isLoaded = ref(false)
        return { isLoaded }
    }
}
</script>

<style scoped>
.skeleton {
    position: relative;
    overflow: hidden;
}

.skeleton::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0));
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

.dark .skeleton::after {
    background-image: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.05) 20%,
            rgba(255, 255, 255, 0.1) 60%,
            rgba(255, 255, 255, 0));
}
</style>
