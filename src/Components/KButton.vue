<template>
    <button 
        class="button" 
        :class="{
            'button__block': props.block,
            'button--small': props.size?.toLowerCase() === 'sm',
            'button--slim': props.size?.toLowerCase() === 'slim',
            'button__split': slots.right,
            'button__disabled': props.disabled,
            'button__outlined': props.outlined,
        }"
        @click="emit('clicked')"
        >
        <slot name="default"></slot>
        <span>
            <slot name="right"></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
// @displayname: KButton
// @author: Kristian Knudsen

// @slot: default - The default slot, is left aligned on the button
// @slot: right - The right slot, is right aligned on the button
import { useSlots } from 'vue';
const props = defineProps<{
    // @prop: size - The size of the button
    // @values: sm
    size?: string
    // @prop: block - Is the block 100% width
    block?: boolean
    // @prop: disabled - Is the button clickable
    disabled?: boolean,
    // @prop: outlined - Is the button outlined?
    outlined?: boolean,
}>();
// @emit: clicked - When the button is clicked
const emit = defineEmits(['clicked']);
const slots = useSlots();
</script>

<style lang="scss">
@import "@scss/_global.scss";
@import "@scss/_mixins.scss";

.button {
    @include transition;
    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-right: 2rem;
    padding-left: 2rem;
    border-radius: .75rem;
    border: 1px solid $primary;
    width: fit-content;
    background-color: $primary;
    color: white;

    &:hover {
        background-color: darken($color: $primary, $amount: 10);
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

    &__disabled {
        pointer-events: none;
        background-color: $disabled;
        border-color: $disabled;
    }

    &__outlined {
        background: transparent;
        color: $primary;

        &:hover {
            background-color: $primary;
            color: white;
        }
    }

    &--small {
        padding: .15rem .5rem;
    }
}
</style>