<script setup>
    import { KDropdown } from '../../dist/kkore.mjs';
    import { ref } from 'vue';

    const state = ref("")
</script> 
# KDropdown

## Basic usage
**Usage**
```vue{4}
<template>
    <KDropdown :options="['Option1', 'Option2']" v-model="state" />
</template>
<script>
    import { ref } from 'vue';
    const state = ref("")
</script>
```
Generates:
<KDropdown :options="['Option1', 'Option2']" v-model="state" />
Value: {{ state }}

## Emits
The component exposes the following emit:
| Name        |      Effect     | 
| :-----------: | :-----------: |
| update:modelValue | Happens when a new option is selected |

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| v-model | The current selected value of the select | | | :white_check_mark: | string |
| options | The options that is selectable in the select | | | :white_check_mark: | Array\<string\> |