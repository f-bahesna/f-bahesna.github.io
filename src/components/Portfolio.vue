<template>
    <div id="portfolio" class="bg-slate-50 pb-20">
        <div class="flex justify-center items-center">
            <div class="text-4xl text-slate-900 font-serif font-bold py-16 tracking-tight">PROJECTS</div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mx-8 lg:mx-16">
            <div v-for="p in projects" :key="p.id" 
                class="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                <!-- Project Preview -->
                <div class="relative h-48 overflow-hidden bg-slate-100">
                    <img :src="p.image" :alt="p.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <a :href="p.url" target="_blank" class="bg-white/90 backdrop-blur-sm p-3 rounded-full text-slate-900 hover:bg-white transition-colors">
                            <box-icon name='link-external' size="sm"></box-icon>
                        </a>
                    </div>
                </div>

                <!-- Project Info -->
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-xl font-bold text-slate-900 capitalize tracking-tight">{{ p.title }}</h3>
                        <a :href="p.url" target="_blank" class="text-slate-400 hover:text-blue-600 transition-colors">
                            <box-icon name='link-external' size="xs"></box-icon>
                        </a>
                    </div>
                    <p class="text-slate-600 font-sans leading-relaxed mb-6">{{ p.description }}</p>
                    
                    <div class="mt-auto flex items-center gap-2">
                        <span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                            {{ p.title.includes('web3') ? 'Web3' : 'Web2' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

// Image imports for Vite
import cukuranImg from "../assets/previews/cukuran.png"
import simpleDexImg from "../assets/previews/simple_dex.png"
import simpleCrowdfundingImg from "../assets/previews/simple_crowdfunding.png"
import cryptoTrackerImg from "../assets/previews/crypto_tracker.png"
import kasirbangImg from "../assets/previews/kasirbang.png"
import kasirbangMultibizImg from "../assets/previews/kasirbang_multibiz.png"
import konselaImg from "../assets/previews/konsela.png"

export default {
    name: "Portfolio",
    setup() {
        const projects = ref([
            {
                id: 1,
                title: 'cukuran | web2',
                description: 'A local barbershop management platform that helps barbers organize their products, track sales, and connect with suppliers more efficiently.',
                image: cukuranImg,
                url: 'https://cukuran.vercel.app',
                video: 'video'
            }, {
                id: 2,
                title: 'simple DEX | web3',
                description: 'This DEX allows users to swap between two ERC-20 tokens, get faucet and import token directly on-chain. Demonstrates core DEX functions on Ethereum Testnet.',
                image: simpleDexImg,
                url: 'https://simple-dex-lime.vercel.app',
                video: 'video'
            }, {
                id: 3,
                title: 'simple crowdfunding | web3',
                description: 'A decentralized crowdfunding platform enabling anyone to create and fund campaigns directly on the Ethereum Testnet blockchain.',
                image: simpleCrowdfundingImg,
                url: 'https://simple-crowdfunding.vercel.app/',
                video: 'video'
            }, {
                id: 4,
                title: 'Crypto Tracker | web2',
                description: 'A lightweight crypto tracker that fetches live market data from the CoinGecko API to display real-time prices and trends.',
                image: cryptoTrackerImg,
                url: 'https://dompet-koin.vercel.app/',
                video: 'video'
            }, {
                id: 5,
                title: 'Kasirbang | web2',
                description: 'A powerful POS (Point of Sale) solution that works seamlessly offline. Designed for retail and service businesses to manage transactions and inventory without needing an internet connection.',
                image: kasirbangImg,
                url: 'https://kasirbang.netlify.app',
                video: 'video'
            }, {
                id: 6,
                title: 'Kasirbang Multibiz | web2',
                description: 'An enterprise-grade dashboard for multi-branch business management. Monitor stock levels, sales performance, and profitability across all your business locations in one centralized platform.',
                image: kasirbangMultibizImg,
                url: 'https://kasirbang-multibiz.netlify.app',
                video: 'video'
            }, {
                id: 7,
                title: 'Konsela | web2',
                description: 'A comprehensive school management tool for BK (Counseling) teachers. Easily track student attendance, manage counseling sessions, and analyze student capabilities to guide them in choosing their academic concentrations (Engineering, IPA, or IPS).',
                image: konselaImg,
                url: 'https://konsela.netlify.app/login',
                video: 'video'
            }
        ])
        return { projects }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

.font-sans {
    font-family: 'Outfit', sans-serif;
}
</style>