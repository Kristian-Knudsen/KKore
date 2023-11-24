<template>
    <Transition name="slide">
        <div ref="slideIn" v-if="props.condition" class="slide">
            <div class="slide__content">
              <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  condition: boolean,
}>();

// TODO: Make background nonscrollable when element is visible
</script>

<style>
.slide {
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    overscroll-behavior: contain;
}

.slide__content {
  background-color: white;
  width: fit-content;
  padding: 1rem;
  border: 1px solid black;
}

.slide-enter-active {
  transition: all .5s ease-out;
}

.slide-leave-active {
  transition: all .5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
