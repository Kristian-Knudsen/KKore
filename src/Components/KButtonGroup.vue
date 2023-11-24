<template>
    <!-- <button
        :class="[ activeSubPage === 'general' ? 'bg-blue-400 text-white' : 'text-blue-400']"
        class="border border-blue-400 transition py-2 px-4 rounded-l-2xl"
        @click="activeSubPage = 'general'"
    >
        General Information
    </button>
    <button
        :class="[ activeSubPage === 'history' ? 'bg-blue-400 text-white' : 'text-blue-400']"
        class="border border-blue-400 transition py-2 px-4 border-x-0"
        @click="activeSubPage = 'history'"
    >
        History
    </button>
    <button
        :class="[ activeSubPage === 'notes' ? 'bg-blue-400 text-white' : 'text-blue-400']"
        class="border border-blue-400 transition py-2 px-4 rounded-r-2xl"
        @click="activeSubPage = 'notes'"
    >
        Notes
    </button> -->
    <button
        class="groupedButton"
        :class="{
            'groupedButton__single': props.values.length === 1,
            'groupedButton__double': props.values.length === 2,
            'groupedButton__multiple': props.values.length > 2,
            'groupedButton__active': props.modelValue === value
        }"
        v-for="value in values"
        @change="$emit('update:modelValue', value)"
    >
        {{ value }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    // @prop: values - the buttons generated in order
    values: Array<string>
    modelValue: string,
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss">
@import "@scss/_global.scss";
@import "@scss/_mixins.scss";

.groupedButton {
    @include transition;

    &__single {}
    &__double {}
    &__multiple {}
    &__active {}
}

</style>