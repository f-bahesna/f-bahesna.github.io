<template>
    <div class="bg-sky-200 pb-12">
        <div class="flex justify-center items-center">
            <div class="text-3xl text-black font-serif font-bold py-12">PROJECTS</div>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8">
            <div v-for="p in projects" :key="p.id" class="border p-4 shadow-lg border-black rounded-md text-balance">
                <strong class="text-2xl text-black font-sans capitalize py-7">{{ p.title }}
                    <a target="_blank" class="text-black" :href=p.url><box-icon
                            class="hover:text-blue-600 hover:font-bold" name='link-external'></box-icon></a>
                </strong>
                <p class="text-1xl text-black font-sans">{{ p.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from "vue"

export default {
    name: "Portfolio",
    setup() {
        let projects = [
            {
                id: 1,
                title: 'cukuran | web2 ',
                description: 'A local barbershop management platform that helps barbers organize their products, track sales, and connect with suppliers more efficiently.',
                image: 'image',
                url: 'https://cukuran.vercel.app',
                video: 'video'
            }, {
                id: 2,
                title: 'simple DEX | web3',
                description: 'This DEX allows users to swap between two ERC-20 tokens, get faucet and import token directly on-chain. Also demonstrates how decentralized exchanges work at the core using Ethereum Testnet Network',
                image: 'image',
                url: 'https://simple-dex-lime.vercel.app',
                video: 'video'
            }, {
                id: 3,
                title: 'simple crowdfunding | web3',
                description: 'A decentralized crowdfunding platform enabling anyone to create and fund campaigns directly on the Ethereum Testnet blockchain',
                image: 'image',
                url: 'https://simple-crowdfunding.vercel.app/',
                video: 'video'
            }, {
                id: 4,
                title: 'Crypto Tracker | web2',
                description: 'A lightweight crypto tracker that fetches live market data from the CoinGecko API to display real-time prices and trends',
                image: 'image',
                url: 'https://dompet-koin.vercel.app/',
                video: 'video'
            }
        ]
        return { projects }
    }
}
</script>

<style scoped></style>