<script setup>
    import { KButton } from '../../dist/knudsen-design.mjs';
</script>


# KButton documentation
Author: Kristian Knudsen

## Basic usage
**Usage**
```vue{4}
<KButton>Button</KButton>
```
Outputs: 
<KButton>Button</KButton>

## Size
```vue{4}
<KButton>Normal button</KButton>
<KButton size="sm">Small button</KButton>
```
<div style="gap: 1rem; display: flex;">
    <KButton>Normal button</KButton>
    <KButton size="sm">Small button</KButton>
</div>

## Emits
The component exposes the following emit(s):
| Name        |      Effect     | 
| ------------- | :-----------: |
| clicked      | Occurs when the component is clicked |