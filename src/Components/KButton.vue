<template>
    <button 
        class="button" 
        :class="{
            'button__block': props.block,
            'button--small': props.size?.toLowerCase() === 'sm',
            'button--slim': props.size?.toLowerCase() === 'slim',
            'button--large': props.size?.toLowerCase() === 'lg',
            'button__split': slots.right,
            'button__outlined': props.outlined || props.modelValue === false,
            'button--primary': props.color?.toLowerCase() === 'primary',
            'button--secondary': props.color?.toLowerCase() === 'secondary',
            'button--tertiary': props.color?.toLowerCase() === 'tertiary',
        }"
        @click="handleClick"
    >
        <slot name="default"></slot>
        <span>
            <slot name="right"></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

const props = withDefaults(defineProps<{
    size?: string
    block?: boolean
    outlined?: boolean,
    color?: string,
    modelValue?: boolean,
}>(), {
    size: undefined,
    block: false,
    outlined: false,
    color: 'primary',
    modelValue: undefined,
});

const emit = defineEmits(['clicked', 'update:modelValue']);
const slots = useSlots();

const handleClick = () => {
    // Stated button
    if(props.modelValue !== undefined) {
        emit('update:modelValue', !props.modelValue)
    }
    // non stated button
    else {
        emit('clicked')
    }
}

</script>

<style lang="scss">
@import "@scss/_global.scss";
@import "@scss/_mixins.scss";

.button {
    @include transition;
    padding: .5rem 1rem;
    border-radius: .35rem;
    border: 1px solid;
    width: fit-content;
    color: white;

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

    &--slim {
        padding: .1rem .2rem;
    }
    
    &--small {
        padding: .15rem .5rem;
    }

    &--large {
        padding: 1rem 2.5rem;
    }

    &--primary {
        border-color: $primary;
        background-color: $primary;

        &:hover {
            background-color: darken($color: $primary, $amount: 10);
            border-color: darken($color: $primary, $amount: 10);
        }

        &.button__outlined {
            border-color: $primary;
            color: $primary;

            &:hover {
                background-color: $primary;
                border-color: $primary;
            }
        }
    }

    &--secondary {
        border-color: $secondary;
        background-color: $secondary;

        &:hover {
            background-color: darken($color: $secondary, $amount: 10);
            border-color: darken($color: $secondary, $amount: 10);
        }

        &.button__outlined {
            border-color: $secondary;
            color: $secondary;

            &:hover {
                background-color: $secondary;
                border-color: $secondary;
            }
        }
    }
    
    &--tertiary {
        border-color: $tertiary;
        background-color: $tertiary;

        &:hover {
            background-color: darken($color: $tertiary, $amount: 10);
            border-color: darken($color: $tertiary, $amount: 10);
        }

        &.button__outlined {
            border-color: $tertiary;
            color: $tertiary;

            &:hover {
                background-color: $tertiary;
                border-color: $tertiary;
            }
        }
    }

    &__outlined {
        background: transparent;
    
        &:hover {
            color: white;
        }
    }
}
</style>