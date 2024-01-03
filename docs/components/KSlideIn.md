<script setup>
    import { KSlideIn, KButton } from '../../dist/kkore.mjs';
    import { ref } from 'vue';

    const state = ref(false);
</script>
# KSlideIn

## Basic usage
**Usage**
```vue{4}
<template>
    <KSlideIn :condition="state" @shouldClose="state = !state">
        <p>Slided Content 👋</p>
    </KSlideIn>
</template>
<script>
import { ref } from 'vue';
const state = ref();
</script>
```
Generates:
<KButton @clicked="state = !state">Slide content in</KButton>
<KSlideIn style="color: black;" :condition="state" @shouldClose="state = !state">
    <p>Slided Content 👋</p>
</KSlideIn>


## Emits
The component exposes the following emit:
| Name        |      Effect     | 
| :-----------: | :-----------: |
| update:modelValue | Happens when a new option is selected |

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| v-model | The state of the switch | true, false | false | :white_check_mark: | boolean |
| Color | Changes the color of the button | primary, secondary, tertiary | primary | :x: | string |
| Variant | Changes the visual of the button | round, square | round | :x: | string |