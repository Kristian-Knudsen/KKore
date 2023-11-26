<template>
    <div class="wrapper">
        <template v-if="props.left && !props.right">
            <span class="wrapper__left"><slot></slot></span>
        </template>
        <input
            class="input"
            :type="props.type"
            :placeholder="props.placeholder"
            :value="props.modelValue"
            @change="emit('update:modelValue')"
        />
        <template v-if="props.right && !props.left">
            <span class="wrapper__right"><slot></slot></span>
        </template>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    modelValue?: string
    type?: string
    placeholder?: string
    right?: boolean
    left?: boolean
}>(), {
    type: 'text',
    placeholder: 'Placeholder',
    right: false,
    left: false,
});
const emit = defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
@import "@scss/_global.scss";
@import "@scss/_mixins.scss";
.wrapper {
    border: black 1px solid;
    width: fit-content;
    border-radius: .25rem;
    display: flex;
    flex-direction: row;

    &__right {
        border-left: 1px black solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 .5rem;
    }

    &__left {
        border-right: 1px black solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 .5rem;
    }
}

.input {
    border: 0;
    padding: .5rem;
    border-radius: .25rem;

    &:focus-visible {
        outline: none;
    }
}
</style>