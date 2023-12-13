<script setup>
    import { ref } from 'vue';
    import { KButton } from '../../dist/kkore.mjs';
    const state = ref(false);
</script>
# KButton

## Basic usage
**Usage**
```vue{4}
<KButton>Button</KButton>
```
Generates:
<KButton>Button</KButton>

## Sizes
```vue{4}
<KButton size="slim">Slim button</KButton>
<KButton size="sm">Small button</KButton>
<KButton>Normal button</KButton>
<KButton size="lg">Large button</KButton>
```
<div style="display: flex; flex-direction: column; gap: 1rem;">
    <KButton size="slim">Slim button</KButton>
    <KButton size="sm">Small button</KButton>
    <KButton>Normal button</KButton>
    <KButton size="lg">Large button</KButton>
</div>

## Colors
```vue{4}
<KButton color="primary">Primary button</KButton>
<KButton color="secondary">Secondary button</KButton>
<KButton color="tertiary">Tertiary button</KButton>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KButton color="primary">Primary button</KButton>
    <KButton color="secondary">Secondary button</KButton>
    <KButton color="tertiary">Tertiary button</KButton>
</div>

## Outlined variants
```vue{4}
<KButton outlined color="primary">Primary outlined</KButton>
<KButton outlined color="secondary">Secondary outlined</KButton>
<KButton outlined color="tertiary">Tertiary outlined</KButton>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KButton outlined color="primary">Primary outlined</KButton>
    <KButton outlined color="secondary">Secondary outlined</KButton>
    <KButton outlined color="tertiary">Tertiary outlined</KButton>
</div>

## Split buttons
```vue{4}
<KButton split>
    Default
    <template #right>Right</template>
</KButton>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KButton split>
        Default
        <template #right>Right</template>
    </KButton>
</div>

## Block button
```vue{4}
<KButton block>Block button</KButton>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KButton block>Block button</KButton>
</div>

## Stated
```vue{4}
<script setup>
    import { ref } from 'vue';
    const state = ref(false);
</script>
<template>
    <KButton v-model="state">Stated button</KButton>
</template>
```
<div style="display: flex; flex-direction: column; gap: 1rem;">
    <KButton v-model="state">Stated button</KButton>
    Value: {{ state }}
</div>

::: tip
This also works with different colors, sizes, etc!
:::

## Emits
The component exposes the following emit:
| Name        |      Effect     | 
| :-----------: | :-----------: |
| clicked      | Happens when the component is clicked and is non stated |
| update:modelValue | Happens when the component is clicked and is stated |

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| Size | Changes the size of the button | slim, sm, lg | undefined | :x: | string |
| Block | Whether the button is a block element | true, false | false | :x: | boolean |
| Outlined | Whether the button is a outlined variant | true, false | false | :x: | boolean |
| Color | The color of the button | primary, secondary, tertiary | primary | :x: | string |
| v-model | The v-model variable that gives the button state | true, false | false | :x: | boolean |