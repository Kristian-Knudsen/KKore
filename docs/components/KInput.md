<script setup>
    import { KInput } from '../../dist/kkore.mjs';
    import { ref } from 'vue';

    const state = ref("")
</script> 
# KInput

## Basic usage
**Usage**
```vue{4}
<template>
    <KInput v-model="state" />
</template>
<script>
    import { ref } from 'vue';
    const state = ref("")
</script>
```
Generates:
<KInput v-model="state" />
Value: {{ state }}

## Placeholder
```vue{4}
<KInput v-model="state" placeholder="Custom placeholder" />
```
<KInput placeholder="Custom placeholder" />

## Icons
```vue{4}
<KInput right placeholder="Right">🎉</KInput>
<KInput left placeholder="Left">🎉</KInput>
```
<div style="gap: 1rem; display: flex; flex-direction: column">
    <KInput right placeholder="Right">🎉</KInput>
    <KInput left placeholder="Left">🎉</KInput>
</div>

::: tip
You can match any type with the icons
:::

::: danger Warning
Only right or left can be active - picking both results in a error
:::

## Types
```vue{4}
<KInput type="text" />
<KInput type="number" />
```
<div style="gap: 1rem; display: flex; flex-direction: column">
    <KInput type="text" />
    <KInput type="number" />
</div>

::: tip
Any type that can be used on inputs can be used here - see more [here](https://www.w3schools.com/html/html_form_input_types.asp)
:::



## Emits
The component exposes the following emit:
| Name        |      Effect     | 
| :-----------: | :-----------: |
| update:modelValue | Happens when the input is updated |

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| v-model | The value of the input | | | :white_check_mark: | string |
| type | The type of the button | text, number, etc | text | :x: | string |
| placeholder| The placeholder of the icon | | | :x: | string |
| right | Used if a icon is desired to be in right side of input | true, false | false | :x: | boolean
| right | Used if a icon is desired to be in left side of input | true, false | false | :x: | boolean