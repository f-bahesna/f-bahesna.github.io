<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-center gap-4 mx-20 my-20">
        <div class="w-full border p-5 cursor-pointer">
            <div class="flex justify-center items-center border">
                <img src="../../assets/logo.png" />
            </div>
            <div class="border p-4">
                <div class="text-3xl">title</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus magni quae reprehenderit dolores
                    fugiat pariatur autem odit modi tenetur in a id minus at, et quis blanditiis commodi eveniet enim?
                </p>
            </div>
        </div>
        <div class="grid place-items-center">
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
    <div class="border-2 mx-20"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-20 my-10 pb-20">
        <div class="border p-2 bg-gray-500 space-y-3">
            <img class="size-40 bg-gray-300 rounded h-60 animate-pulse" src="#" alt="">
            <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
            <div class="flex flex-col-2 gap-2">
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
            </div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
        </div>
        <div class="border p-2 bg-gray-500 space-y-3">
            <img class="size-40 bg-gray-300 rounded h-60 animate-pulse" src="#" alt="">
            <div class="size-20 w-20 bg-gray-300 rounded h-4 animate-pulse"></div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
            <div class="flex flex-col-2 gap-2">
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
                <p class="size-10 w-1/2 bg-gray-300 rounded h-4 animate-pulse"></p>
            </div>
            <p class="size-10 w-full bg-gray-300 rounded h-4 animate-pulse"></p>
        </div>
        <div class="border p-2 bg-gray-500 space-y-3">
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