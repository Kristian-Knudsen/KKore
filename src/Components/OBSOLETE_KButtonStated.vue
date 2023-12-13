<template>
    <button 
        class="KButtonStated" 
        :class="{
            'KButtonStated__block': props.block,
            'KButtonStated--small': props.size === 'sm' || props.size === 'SM',
            'KButtonStated__split': slots.right,
            'KButtonStated--active': props.state
        }"
        @click="emit('clicked', !props.state)"
        >
        <slot name="default"></slot>
        <span>
            <slot name="right"></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
const props = defineProps<{
    // @prop: state - The state of the button, displays outlined button if false and filled button if true
    state: boolean,
    // @prop: size - The size of the button
    // @values: sm
    size?: string
    // @prop: block - Is the block 100% width
    block?: boolean
}>();
// @emit: clicked - When the button is clicked
const emit = defineEmits(['clicked']);
const slots = useSlots();
</script>

<style lang="scss">
@import "@scss/_global.scss";
@import "@scss/_mixins.scss";

.KButtonStated {
    @include transition;
    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-right: 2rem;
    padding-left: 2rem;
    border-radius: .75rem;
    border: 1px solid $primary;
    width: fit-content;
    background-color: transparent;
    color: $primary;

    &--active {
        background-color: $primary;
        color: white;
        
        &:hover {
            cursor: pointer;
        }
    }

    &:hover {
        cursor: pointer;
    }

    &__block {
        width: 100%;
    }

    &__split {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: .5rem;
        padding-left: .5rem;
        gap: 2rem;
    }

    &--small {
        padding: .15rem .5rem;
    }
}
</style>