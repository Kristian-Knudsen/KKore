# Documenting components

## @prop
Describes the prop on a component. 

::: tip
Use this descriptor with the @values descriptor to make a table on valid entries.
:::

**Usage**
```vue{4}
<script setup lang="ts">
const props = defineProps<{
    // @prop: size - The size of the button
    size?: string
}>()
</script>
```

**Output in docs**
TODO: SKAL LAVES

## @values
Describes the valid values a property can have
::: warning
Must be used with the @prop descriptor to function properly
:::

**Usage**
```vue{4}
<script setup lang="ts">
const props = defineProps<{
    // @prop: size - The size of the button
    // @values sm, md, lg
    size?: string
}>()
</script>
```

**Output in docs**
TODO: SKAL LAVES

## @emit
Describes the individual emit event that a component can have.
::: warning
This descriptor must be assigned to all emits that needs to be part of the final docs
:::
**Usage**
```vue{4}
<script setup lang="ts">
// @emit: clicked - When the button is clicked
// @emit: hovered - When the button is hovered
const emit = defineEmits(['clicked', 'hovered'])
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @slot
Describes the individual slot that a component can have.
::: warning
This descriptor must be assigned to all slots that needs to be part of the final docs
:::
**Usage**
```vue{4}
<template>
    <button>
        <slot name="default"></slot>
        <span>
            <slot name="right"></slot>
        </span>
    </button>
</template>
<script setup lang="ts">
// @slot: default - The default slot, is left aligned on the button
// @slot: right - The right slot, is right aligned on the button
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @author
Describes the author(s) of the component
**Usage**
```vue{4}
<script setup lang="ts">
// @author: Kristian Knudsen
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @deprecated
Marks the component as deprecated
**Usage**
```vue{4}
<script setup lang="ts">
// @deprecated
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @displayname
Assigns the name of the component in the docs
::: warning
If a component do not have this descriptor assigned, the name of the component in the docs, will be declared based on filename
:::

**Usage**
```vue{4}
<script setup lang="ts">
// @displayname: KButton
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @description
Assigns the description of the component in the docs:

**Usage**
```vue{4}
<script setup lang="ts">
// @description: This is a very nice button
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @model
Describes the usage of the v-model instance on a object:

**Usage**
```vue{4}
// TODO
```
**Output in docs**
TODO: SKAL LAVES

## @usage
Describes the usage of a component:

**Usage**
```vue{4}
<script setup lang="ts">
// @usage: <KButton>Hello</KButton>
</script>
```
**Output in docs**
TODO: SKAL LAVES

## @see
Assigns a "see" property to a component, for external reference
**Usage**
```vue{4}
<script setup lang="ts">
// @see: http://somepage.com
</script>
```
**Output in docs**
TODO: SKAL LAVES

## todo_@event
TODO: Overvej om dette skal bruges

**Output in docs**
TODO: SKAL LAVES
