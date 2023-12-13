<template>
    <label class="switch">
        <input
            type="checkbox"
            :value="props.modelValue" 
            @change="$emit('update:modelValue', !props.modelValue)"
            >
        <span 
            class="slider" 
            :class="{
                'slider--round': props.variant?.toLowerCase() === 'round',
                'slider--square': props.variant?.toLowerCase() === 'square',
                'slider--primary': props.color?.toLowerCase() === 'primary',
                'slider--secondary': props.color?.toLowerCase() === 'secondary',
                'slider--tertiary': props.color?.toLowerCase() === 'tertiary',
            }"
        ></span>
    </label>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    modelValue: boolean,
    color?: string,
    variant: string,
}>(), {
    color: "primary",
    variant: "round",
});
defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
@import "@scss/_global.scss";
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    &--round {
        border-radius: 34px;

        &::before {
            border-radius: 50%;
        }
    }

    &--square {
        border-radius: 5px;

        &::before {
            border-radius: 5px;
        }
    }
}

input {
    &:checked + .slider {
        &.slider--primary {
            background-color: $primary;
        }
        &.slider--secondary {
            background-color: $secondary;
        }
        &.slider--tertiary {
            background-color: $tertiary;
        }


        &::before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }

    &:focus + .slider {
        box-shadow: 0 0 1px #2196F3;

    }
}
</style>