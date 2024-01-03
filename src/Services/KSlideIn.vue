<template>
    <Transition name="KSlideIn">
        <div v-if="props.condition" class="KSlideIn">
            <div class="KSlideIn__content">
              <div class="KSlideIn__content--top">
                <span class="KSlideIn__close" @click="$emit('shouldClose')">&#10006;</span>
                <p class="KSlideIn__title">{{ props.title }}</p>
              </div>
              <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  condition: boolean,
  title?: string,
}>(), {
  title: "KSlideIn Title"
});
const emit = defineEmits(['shouldClose'])
// TODO: Make background nonscrollable when element is visible
</script>

<style lang="scss">
.KSlideIn {
    background-color: rgba(0,0,0,0.4);
    z-index: 100000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    overscroll-behavior: contain;

    &__content {
      background-color: white;
      width: fit-content;
      padding: 1rem;
      border: 1px solid black;
      min-width: 25rem;

      &--top {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    &__close {
      font-size: 1.2rem;

      &:hover {
        cursor: pointer;
      }
    }

    &__title {
      margin: 0 auto !important;
      font-weight: bold;
      font-size: 1.5rem;
    }

    &-enter-active {
      transition: all .5s ease-out;
    }
    
    &-leave-active {
      transition: all .5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    &-enter-from, &-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }
}
</style>
