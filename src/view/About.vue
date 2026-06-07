<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 min-h-screen" :class="mode === 'dark' ? 'text-[#E8E8E8]' : 'text-[#15202B]'">
    <div class="max-w-6xl mx-auto">
      
      <!-- Intro Section -->
      <div class="text-center mb-20 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span class="text-blue-500">Frada</span>
        </h2>
        <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed">
          A <span class="font-semibold text-blue-500">Fullstack AI Engineer</span> passionate about Web Development, Microservices, and Domain-Driven Design (DDD).
          I believe great software should be simple, reliable, and easy to grow.
        </p>
      </div>

      <!-- Timeline Section -->
      <div class="relative wrap overflow-hidden p-4 md:p-10">
        <!-- Vertical Line -->
        <div class="absolute border-opacity-20 h-full border-2 left-1/2 transform -translate-x-1/2 hidden md:block" :class="mode === 'dark' ? 'border-gray-500' : 'border-gray-300'"></div>
        
        <div v-for="(exp, index) in experiences" :key="exp.id" class="mb-12 flex flex-col md:flex-row justify-between items-center w-full relative" :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''">
          
          <!-- Spacer -->
          <div class="hidden md:block w-5/12"></div>
          
          <!-- Circle Marker -->
          <div class="z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-xl bg-blue-500 text-white border-4 flex-shrink-0" :class="mode === 'dark' ? 'border-[#192734]' : 'border-[#F3F3F3]'">
            <span class="text-xl">{{ exp.icon }}</span>
          </div>
          
          <!-- Content Card -->
          <div class="w-full md:w-5/12 mt-6 md:mt-0">
            <div class="p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" :class="mode === 'dark' ? 'bg-[#22303c] border border-gray-700' : 'bg-white border border-gray-100'">
              
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 class="text-xl md:text-2xl font-bold text-blue-500">{{ exp.company }}</h3>
                <span class="mt-2 sm:mt-0 inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-500 bg-opacity-10 text-blue-600 dark:text-blue-400">
                  {{ exp.year }}
                </span>
              </div>
              
              <h4 class="text-lg font-semibold opacity-90 mb-2">{{ exp.role }}</h4>
              
              <div class="flex items-center text-sm opacity-70 mb-5 font-medium">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {{ exp.location }}
              </div>
              
              <p class="opacity-80 leading-relaxed text-sm md:text-base">{{ exp.description }}</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    mode: {
      type: String,
      default: "light"
    }
  },
  data() {
    return {
      experiences: [
        {
          id: 1,
          year: "Present",
          company: "Inosoft 🇮🇩",
          location: "Remote - Surabaya",
          role: "Middle Golang Backend Engineer",
          description: "Currently working as a Middle Golang Backend Engineer. Focusing on designing scalable backend architectures that align with business goals, optimizing performance, and ensuring data integrity.",
          icon: "🚀"
        },
        {
          id: 2,
          year: "Recent",
          company: "Strategic Asia Pte Ltd",
          location: "Remote - Singapore",
          role: "Full Stack Engineer",
          description: "High-impact, 3-month project-based contract. Designed and scaled end-to-end project systems, collaborating closely with the Solution Architect, product, and business teams to deliver scalable, high-performance, and maintainable solutions across the stack.",
          icon: "💡"
        },
        {
          id: 3,
          year: "2020 - 2025",
          company: "Ammana.id",
          location: "Remote - South Jakarta",
          role: "Backend Developer",
          description: "Worked for about five years. Explored deeper how Laravel can be customized for different business needs. Learned about clean code, design patterns, and how to make systems more efficient and scalable.",
          icon: "⚙️"
        },
        {
          id: 4,
          year: "2019 - 2020",
          company: "Koinworks.com",
          location: "Yogyakarta",
          role: "Junior Backend Software Engineer",
          description: "Began career here. Contributed to develop Backoffice project, building internal tools and features using Laravel, Jquery and PostgreSQL. Collaborated with product managers and connected data from Core API.",
          icon: "🌱"
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>