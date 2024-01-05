<template>
    <div 
        class="KCard" 
        :class="{
            'KCard--gray': props.gray,
            
        }"
        @click="$emit('clicked')"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    gray?: boolean
}>(), {
    gray: false,
});

const emit = defineEmits(['clicked']);
</script>

<style lang="scss">
@import "@scss/_global.scss";

.KCard {
    padding: 1rem;
    border-radius: 1rem;
    background-color: $white;
    color: $black;

    &--gray {
        background-color: #272727;
        color: $white;
    }
}
</style>