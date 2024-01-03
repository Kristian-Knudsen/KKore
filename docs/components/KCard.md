<script setup>
    import { KCard } from '../../dist/kkore.mjs';
</script>
# KCard

## Basic usage
**Usage**
```vue{4}
<KCard>Card</KCard>
```
Generates:
<KCard>Card</KCard>

## Variants
```vue{4}
<KCard gray>Gray card</KCard>
```
<KCard gray>Gray card</KCard>

## Emits
The component exposes the following emit:
| Name        |      Effect     | 
| :-----------: | :-----------: |
| clicked      | Happens when the card is clicked |

## Props
| Prop | Effect | Values | Default | Required | Type |
|:-:|:-:|:-:|:-:|:-:|:-:|
| gray | Changes the color of the card | | false | :x: | boolean |