<template>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 content-center xl:content-evenly gap-2 mx-10 md:mx-15 lg:mx-20 my-10">
        <div @click="this.$router.push({ name: 'Blog' })"
            class="lg:w-96 border rounded-md shadow-md p-5 cursor-pointer">
            <div class="flex justify-center items-center border">
                <img class="object-fill"
                    src="https://res.cloudinary.com/jadikaya-9/image/upload/v1761925526/race_conditions_bgkhhg.png" />
            </div>
            <div class="border p-4 space-y-4">
                <div class="text-1xl font-bold md:text-3xl lg:text-3xl xl:text-3xl">How I Fixed PHP Race Condition</div>
                <p class="text-sm">What It Taught Me About Real Concurrency
                </p>
            </div>
        </div>
        <div class="grid content-end gap-4">
            <div>
                <h2>Top Picks >></h2>
            </div>
            <div class="border p-4 w-full space-y-2 rounded-md shadow-lg">
                <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
                <p class="size-10 w-full bg-gray-300 rounded h-8 animate-pulse"></p>
            </div>
            <div class="border p-4 w-full space-y-2 rounded-md shadow-lg">
                <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
                <p class="size-10 w-full bg-gray-300 rounded h-8 animate-pulse"></p>
            </div>
            <div class="border p-4 w-full space-y-2 rounded-md shadow-lg">
                <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
                <p class="size-10 w-full bg-gray-300 rounded h-8 animate-pulse"></p>
            </div>
        </div>
    </div>
    <div class="border-2 mx-10 lg:mx-20"></div>
    <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-10 md:mx-15 lg:mx-20 my-10 pb-20">
        <div class="rounded-md p-2 bg-gray-500 space-y-3">
            <img class="size-40 bg-gray-300 rounded h-60 animate-pulse" src="#" alt="">
            <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
            <div class="flex flex-col-2 gap-2">
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
            </div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
        </div>
        <div class="rounded-md p-2 bg-gray-500 space-y-3">
            <img class="size-40 bg-gray-300 rounded h-60 animate-pulse" src="#" alt="">
            <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
            <div class="flex flex-col-2 gap-2">
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
            </div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
        </div>
        <div class="rounded-md p-2 bg-gray-500 space-y-3">
            <img class="size-40 bg-gray-300 rounded h-60 animate-pulse" src="#" alt="">
            <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
            <div class="flex flex-col-2 gap-2">
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
            </div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogList"
}
</script>

<style scoped></style>