<template>
    <span
        class="KChip"
        :class="{
            'KChip__block': props.block,
            'KChip--small': props.size?.toLowerCase() === 'sm',
            'KChip--slim': props.size?.toLowerCase() === 'slim',
            'KChip--large': props.size?.toLowerCase() === 'lg',
            'KChip--primary': props.color?.toLowerCase() === 'primary',
            'KChip--secondary': props.color?.toLowerCase() === 'secondary',
            'KChip--tertiary': props.color?.toLowerCase() === 'tertiary',
            'KChip__outlined': props.outlined,
        }"
        @click="$emit('clicked')"
    >
        <slot name="prepend"/>
        <slot />
        <slot name="append"/>
    </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    size?: string,
    block?: boolean,
    outlined?: boolean,
    color?: string,
}>(), {
    size: undefined,
    block: false,
    outlined: false,
    color: 'primary',
});

const emit = defineEmits(['clicked']);
</script>

<style lang="scss">
@import "@scss/_global.scss";

.KChip {
    color: $white;
    width: fit-content;
    padding: .2rem .5rem;
    border-radius: .35rem;
    border: 1px solid;

    &--slim {
        padding: 0rem .25rem;
    }

    &--small {
        padding: .1rem .35rem;
    }

    &--large {
        padding: .5rem .75rem;
    }

    &--primary {
        background-color: $primary;
        border-color: $primary;

        &.KChip__outlined {
            color: $primary;
            background-color: transparent;
        }
    }

    &--secondary {
        background-color: $secondary;
        border-color: $secondary;

        &.KChip__outlined {
            color: $secondary;
            background-color: transparent;
        }
    }

    &--tertiary {
        background-color: $tertiary;
        border-color: $tertiary;

        &.KChip__outlined {
            color: $tertiary;
            background-color: transparent;
        }
    }

    &__block {
        width: 100%;
    }
}
</style>