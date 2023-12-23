<template>
    <select 
        class="KDropdown" 
        :value="props.modelValue" 
        @change="e => emit('update:modelValue', (e.target as HTMLSelectElement).value)"
    >
        <option v-for="option in props.options" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { onMounted} from 'vue';

const props = defineProps<{
    options: string[]
    modelValue?: string,
}>();
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
    emit('update:modelValue', props.options[0])
})

</script>

<style scoped lang="scss">
.KDropdown {
    padding: .5rem;
    border-radius: .25rem;
    width: 100%;
}
</style>