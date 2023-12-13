<script setup>
    import { KSwitch } from '../../dist/kkore.mjs';
    import { ref } from 'vue';

    const state_usage = ref(false);
    const state_primary = ref(false);
    const state_secondary = ref(false);
    const state_tertiary = ref(false);
    const state_round = ref(false);
    const state_square = ref(false);
</script>
# KSwitch

## Basic usage
**Usage**
```vue{4}
<template>
    <KSwitch v-model="state"/>
</template>
<script>
import { ref } from 'vue';
const state = ref();
</script>
```
Generates:
<KSwitch v-model="state_usage"/>
Value: {{ state_usage }}

## Colors
```vue{4}
<KSwitch v-model="state" color="primary" />
<KSwitch v-model="state" color="secondary" />
<KSwitch v-model="state" color="tertiary" />
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KSwitch v-model="state_primary" color="primary" />
    <KSwitch v-model="state_secondary" color="secondary" />
    <KSwitch v-model="state_tertiary" color="tertiary" />
</div>

## Variants
```vue{4}
<KSwitch v-model="state_round" variant="round" />
<KSwitch v-model="state_square" variant="square" />
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KSwitch v-model="state_round" variant="round" />
    <KSwitch v-model="state_square" variant="square" />
</div>

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| v-model | The state of the switch | true, false | false | :white_check_mark: | boolean |
| Color | Changes the color of the button | primary, secondary, tertiary | primary | :x: | string |
| Variant | Changes the visual of the button | round, square | round | :x: | string |