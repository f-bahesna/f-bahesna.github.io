<template>
    <div class="bg-white h-full py-2 pt-7 pb-7">
        <div class="flex justify-center items-center">
            <FollowMe />
        </div>
        <div class="flex justify-center items-center pt-5 text-xs">
            <p>Designed & built from scratch with vue.js and caffeine ☕ by Frada</p>
        </div>
    </div>
</template>

<script>

import Toogle from "./Toogle.vue";
import FollowMe from "../page/followMe.vue";

export default {
    name: "Footer",
    components: { Toogle, FollowMe },
    props: ['mode'],
}
</script>

<style scoped>
.dark div {
    background: #15202B;
}
</style>