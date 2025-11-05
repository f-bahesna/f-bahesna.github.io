<template>
    <main class="wrapper">
        <div class="grid-lines">
            <div
                class="hero-container container flex flex-col px-6 pt-12 sm:py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                <MainHero />
            </div>
            <div class="grid-lines_cursor-position">
                <div class="grid-lines_cursor">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import MainHero from "../hero/MainHero.vue"

export default {
    name: "DarkHero",
    components: { MainHero }
}
</script>

<style scoped>
.wrapper {
    position: relative;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #222;
}

.grid-lines {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.grid-lines_cursor-position {
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    will-change: transform;
    pointer-events: none;
}

.grid-lines_cursor {
    aspect-ratio: 1;
    width: 400px;
    border-radius: 50%;
    background-image: radial-gradient(circle farthest-corner at 50% 50%,
            var(--grid-highlight, rgba(0, 170, 255, 0.3)) 10%,
            transparent 70%);
    position: absolute;
    top: -200px;
    left: -200px;
    opacity: 1;
    filter: blur(70px);
    pointer-events: none;
}
</style>
