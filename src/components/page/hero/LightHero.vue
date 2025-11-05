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
