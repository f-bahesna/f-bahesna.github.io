<template>
  <div id="articles" :class="['py-20 overflow-hidden transition-colors duration-300', mode === 'dark' ? 'bg-[#192734]' : 'bg-white']">
    <div class="mx-8 lg:mx-16">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 :class="['text-4xl font-serif font-bold tracking-tight mb-4', mode === 'dark' ? 'text-white' : 'text-slate-900']">ARTICLES</h2>
          <p :class="['font-sans', mode === 'dark' ? 'text-slate-400' : 'text-slate-500']">Insights and thoughts on tech, engineering, and more.</p>
        </div>
        <div class="hidden sm:flex items-center gap-4">
          <button @click="prev" :class="['p-3 rounded-full border transition-all duration-300', mode === 'dark' ? 'border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-400' : 'border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600']">
            <box-icon name='chevron-left' :color="mode === 'dark' ? '#64748b' : '#94a3b8'"></box-icon>
          </button>
          <button @click="next" :class="['p-3 rounded-full border transition-all duration-300', mode === 'dark' ? 'border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-400' : 'border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600']">
            <box-icon name='chevron-right' :color="mode === 'dark' ? '#64748b' : '#94a3b8'"></box-icon>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex gap-8 overflow-hidden">
        <div v-for="i in 3" :key="i" :class="['min-w-[300px] w-full sm:w-1/3 flex-shrink-0 rounded-2xl h-96 animate-pulse', mode === 'dark' ? 'bg-slate-800' : 'bg-slate-100']"></div>
      </div>

      <!-- Carousel Container -->
      <div v-else class="relative group">
        <div 
          ref="carouselRef"
          @scroll="handleScroll"
          class="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 hide-scrollbar scroll-smooth"
        >
          <div 
            v-for="(article, index) in articles" 
            :key="index"
            class="snap-start min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.333px)] flex-shrink-0"
          >
            <a :href="article.link" target="_blank" class="block group/card h-full max-w-md mx-auto">
              <div :class="['h-full flex flex-col border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2', mode === 'dark' ? 'bg-[#22303c] border-slate-700' : 'bg-slate-50 border-slate-100']">
                <!-- Image Section -->
                <div :class="['relative h-56 overflow-hidden', mode === 'dark' ? 'bg-slate-800' : 'bg-slate-200']">
                  <img 
                    v-if="article.thumbnail" 
                    :src="article.thumbnail" 
                    :alt="article.title" 
                    class="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500 scale-100 group-hover/card:scale-110"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
                    <box-icon name='image' size="lg" :color="mode === 'dark' ? '#475569' : '#cbd5e1'"></box-icon>
                  </div>
                  <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-600 shadow-sm">
                    Medium
                  </div>
                </div>

                <!-- Content Section -->
                <div class="p-6 flex flex-col flex-grow text-left">
                  <div :class="['text-xs font-semibold uppercase tracking-wider mb-2', mode === 'dark' ? 'text-slate-500' : 'text-slate-400']">
                    {{ formatDate(article.pubDate) }}
                  </div>
                  <h3 :class="['text-xl font-bold leading-tight mb-4 group-hover/card:text-blue-500 transition-colors line-clamp-2', mode === 'dark' ? 'text-white' : 'text-slate-900']">
                    {{ article.title }}
                  </h3>
                  <div :class="['mt-auto flex items-center gap-2 text-sm font-bold group-hover/card:gap-3 transition-all', mode === 'dark' ? 'text-slate-300' : 'text-slate-900']">
                    <span>Read Article</span>
                    <box-icon name='arrow-back' rotate='180' size='xs' :color="mode === 'dark' ? '#cbd5e1' : '#0f172a'" class="fill-current"></box-icon>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Mobile Controls -->
        <div class="flex sm:hidden justify-center items-center gap-6 mt-8">
           <button @click="prev" :class="['p-2 rounded-full border', mode === 'dark' ? 'border-slate-700 text-slate-500' : 'border-slate-200 text-slate-400']">
            <box-icon name='chevron-left' :color="mode === 'dark' ? '#64748b' : '#94a3b8'"></box-icon>
          </button>
          <div class="flex gap-2">
            <div 
              v-for="i in Math.ceil(articles.length / itemsPerPage)" 
              :key="i"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentIndex === (i-1) ? 'bg-blue-600 w-4' : (mode === 'dark' ? 'bg-slate-700' : 'bg-slate-200')"
            ></div>
          </div>
          <button @click="next" :class="['p-2 rounded-full border', mode === 'dark' ? 'border-slate-700 text-slate-500' : 'border-slate-200 text-slate-400']">
            <box-icon name='chevron-right' :color="mode === 'dark' ? '#64748b' : '#94a3b8'"></box-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

export default {
  name: 'MediumArticles',
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  setup(props) {
    const articles = ref([])
    const loading = ref(true)
    const currentIndex = ref(0)
    const windowWidth = ref(window.innerWidth)
    const carouselRef = ref(null)

    const itemsPerPage = computed(() => {
      if (windowWidth.value >= 1024) return 3
      if (windowWidth.value >= 640) return 2
      return 1
    })

    const fetchArticles = async () => {
      try {
        // Fetching without api_key. Free tier returns 10 items by default.
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fradabahesna')
        const data = await response.json()
        if (data.status === 'ok') {
          articles.value = data.items.map(item => {
            if (!item.thumbnail) {
              const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/)
              if (imgMatch) item.thumbnail = imgMatch[1]
            }
            return item
          })
        }
      } catch (error) {
        console.error('Error fetching Medium articles:', error)
      } finally {
        loading.value = false
      }
    }

    const next = () => {
      if (carouselRef.value) {
        const itemWidth = carouselRef.value.clientWidth / itemsPerPage.value
        carouselRef.value.scrollBy({ left: itemWidth, behavior: 'smooth' })
      }
    }

    const prev = () => {
      if (carouselRef.value) {
        const itemWidth = carouselRef.value.clientWidth / itemsPerPage.value
        carouselRef.value.scrollBy({ left: -itemWidth, behavior: 'smooth' })
      }
    }

    const handleScroll = () => {
      if (carouselRef.value) {
        const scrollLeft = carouselRef.value.scrollLeft
        const itemWidth = carouselRef.value.clientWidth / itemsPerPage.value
        currentIndex.value = Math.round(scrollLeft / itemWidth)
      }
    }

    const formatDate = (dateStr) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateStr).toLocaleDateString(undefined, options)
    }

    const handleResize = () => {
      windowWidth.value = window.innerWidth
      currentIndex.value = 0
    }

    onMounted(() => {
      fetchArticles()
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      articles,
      loading,
      currentIndex,
      itemsPerPage,
      next,
      prev,
      formatDate,
      carouselRef,
      handleScroll
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

.font-sans {
  font-family: 'Outfit', sans-serif;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* box-icon custom hover */
button:hover :deep(box-icon) {
  fill: #2563eb !important;
}

.dark button:hover :deep(box-icon) {
  fill: #60a5fa !important;
}
</style>
