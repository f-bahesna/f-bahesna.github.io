<template>
  <DarkHero v-if="isDark" :ref="cursorElement" />
  <LightHero v-else />
  <MediumArticles :mode="mode" />
  <Portfolio />
</template>

<script>
import { computed, ref, watch, onBeforeUnmount, nextTick } from "vue";
import FollowMe from "./page/followMe.vue";
import Portfolio from "./Portfolio.vue";
import MediumArticles from "./MediumArticles.vue";
import DarkHero from "./page/hero/DarkHero.vue";
import LightHero from "./page/hero/LightHero.vue";
export default {
  //TODO: dark and light hero didn't switch automatically
  name: "Home",
  components: { FollowMe, DarkHero, LightHero, Portfolio, MediumArticles },
  props: ['mode'],
  setup(props) {
    //TODO: the animation dark hero cannot be started!
    let isDark = computed(() => props.mode === "dark")

    const cursorElement = ref(null)
    let animationFrameId = null;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (cursorElement.value) {
        cursorElement.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale3d(1, 1, 1)`;
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      if (!cursorElement.value) return; // ensure elemnt exists
      document.addEventListener('mousemove', handleMouseMove);
      stopAnimation()
      animationFrameId = requestAnimationFrame(animate);
    }

    const stopAnimation = () => {
      document.removeEventListener('mousemove', handleMouseMove);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    watch(() => props.mode,
      (newMode) => {
        if (newMode === 'dark') {
          nextTick(() => {
            startAnimation();
          });
        } else {
          stopAnimation();
        }
      },
      // Immediately run the watcher on component creation
      { immediate: true }
    )

    onBeforeUnmount(() => {
      stopAnimation();
    });

    return {
      isDark, cursorElement
    }
  }
}
</script>

<style scoped></style>