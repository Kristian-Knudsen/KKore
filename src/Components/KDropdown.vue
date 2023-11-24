<template>
    <select class="dropdown" v-model="innerValue">
        <option v-for="option in props.options" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const props = defineProps<{
    options: string[]
    modelValue?: string,
}>();
const emit = defineEmits(['changed']);

const innerValue = ref(props.options[0]);

watch(innerValue, (newValue) => {
    emit('changed', newValue.toLowerCase());
});

onMounted(() => {
    emit('changed', props.options[0].toLowerCase())
});

</script>

<style scoped lang="scss">
.dropdown {
    padding: .5rem;
    border-radius: .25rem;
    width: fit-content;
}
</style>