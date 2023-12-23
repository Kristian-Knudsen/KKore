<script setup>
    import { KChip } from '../../dist/kkore.mjs';
</script>
# KChip

## Basic usage
**Usage**
```vue{4}
<KChip>Chip</KChip>
```
Generates:
<KChip>Chip</KChip>

## Sizes
```vue{4}
<KChip size="slim">Slim chip</KChip>
<KChip size="sm">Small chip</KChip>
<KChip>Normal chip</KChip>
<KChip size="lg">Large chip</KChip>
```
<div style="display: flex; flex-direction: column; gap: 1rem;">
    <KChip size="slim">Slim chip</KChip>
    <KChip size="sm">Small chip</KChip>
    <KChip>Normal chip</KChip>
    <KChip size="lg">Large chip</KChip>
</div>

## Colors
```vue{4}
<KChip color="primary">Primary chip</KChip>
<KChip color="secondary">Secondary chip</KChip>
<KChip color="tertiary">Tertiary chip</KChip>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KChip color="primary">Primary chip</KChip>
    <KChip color="secondary">Secondary chip</KChip>
    <KChip color="tertiary">Tertiary chip</KChip>
</div>

## Outlined variants
```vue{4}
<KChip outlined color="primary">Primary outlined</KChip>
<KChip outlined color="secondary">Secondary outlined</KChip>
<KChip outlined color="tertiary">Tertiary outlined</KChip>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KChip outlined color="primary">Primary outlined</KChip>
    <KChip outlined color="secondary">Secondary outlined</KChip>
    <KChip outlined color="tertiary">Tertiary outlined</KChip>
</div>

## Split chips
```vue{4}
<KChip>
    Chip
    <template #append>Append</template>
</KChip>
<KChip>
    Chip
    <template #prepend>Prepend</template>
</KChip>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KChip>
        Chip
        <template #append>Append</template>
    </KChip>
    <KChip>
        Chip
        <template #prepend>Prepend</template>
    </KChip>
</div>

## Block chip
```vue{4}
<KChip block>Block chip</KChip>
```
<div style="display: flex; flex-direction: row; gap: 1rem;">
    <KChip block>Block chip</KChip>
</div>

## Emits
The component exposes the following emit:
| Name        |      Effect     | 
| :-----------: | :-----------: |
| clicked      | Happens when the chip is clicked |

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| Size | Changes the size of the chip | slim, sm, lg | undefined | :x: | string |
| Block | Whether the chip is a block element | true, false | false | :x: | boolean |
| Outlined | Whether the chip is a outlined variant | true, false | false | :x: | boolean |
| Color | The color of the chip | primary, secondary, tertiary | primary | :x: | string |