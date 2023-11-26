<template>
    <div>
        <button
            v-for="value in values"
            class="groupedButton"
            :class="{
                'groupedButton__single': props.values.length === 1,
                'groupedButton__double': props.values.length === 2,
                'groupedButton__multiple': props.values.length > 2,
                'groupedButton__active': props.value === value
            }"
            @click="emit('clicked', value)"
        >
            {{ value }}
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    // @prop: values - the buttons generated in order
    values: Array<string>
    value: string,
}>();

const emit = defineEmits(['clicked']);
</script>

<style lang="scss">
@import "@scss/_global.scss";
@import "@scss/_mixins.scss";

.groupedButton {
    @include transition;

    border: 1px solid $primary;
    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-right: 2rem;
    padding-left: 2rem;
    background-color: transparent;
    color: $primary;

    &:hover {
        cursor: pointer;
    }

    &__single {
        border-radius: 1rem;
    }

    &__double {
        &:first-of-type {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            border-right: 0;
        }

        &:last-of-type {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

    &__multiple {
        &:first-of-type {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            border-right: 0;
        }

        &:last-of-type {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: 0;
        }
    }

    &__active {
        background-color: $primary;
        color: white;
    }
}

</style>