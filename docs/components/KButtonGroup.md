<script setup>
    import { KButtonGroup } from '../../dist/kkore.mjs';
    import { ref } from 'vue';

    const buttonGroupRef = ref();
</script>
# KButtonGroup

## Basic usage
**Usage**
```vue{4}
<template>
    <KButtonGroup
        :values="['Value1', 'Value2', 'Value3']" 
        :value="buttonGroupRef" 
        @clicked="e => buttonGroupRef = e"
    />
</template>
<script>
import { ref } from 'vue';
const buttonGroupRef = ref();
</script>
```
Generates:
<KButtonGroup
    :values="['Value1', 'Value2', 'Value3']" 
    :value='buttonGroupRef' 
    @clicked="e => buttonGroupRef = e"
/>

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| Values | For each value in values a button is generated | | | :white_check_mark: | Array<string |
| Value | The active button value | | | :white_check_mark: | string |