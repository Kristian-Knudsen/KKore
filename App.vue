<template>
<div class="appWrapper">

    <KChip>Primary</KChip>
    <KChip color="secondary">Primary</KChip>
    <KChip color="tertiary">Primary</KChip>
    <KChip outlined color="primary">Primary</KChip>
    <KChip outlined color="secondary">Primary</KChip>
    <KChip outlined color="tertiary">Primary</KChip>

    <KChip size="slim">Slim</KChip>
    <KChip size="sm">Small</KChip>
    <KChip>Normal</KChip>
    <KChip size="lg">Large</KChip>

    <KButtonGroup
        :values="['Value1', 'Value2', 'Value3']" 
        :value='buttonGroupRef'
        @clicked="e => buttonGroupRef = e"
    />

    <KCard style="padding: 2rem;">
        <p>Not gray</p>
    </KCard>

    <KCard gray style="padding: 2rem;">
        <p>Not gray</p>
    </KCard>


    <h1>Alerts</h1>
    <KButton size="sm" @clicked="makeAlert('success')">Success alert</KButton>
    <KButton size="sm" @clicked="makeAlert('error')">Error alert</KButton>
    <KButton size="sm" @clicked="makeAlert('warning')">Warning alert</KButton>
    <KButton size="sm" @clicked="makeAlert('info')">Info alert</KButton>
    <KButton size="sm" @clicked="makeAlert('question')">Question alert</KButton>

    <h1>Animations</h1>
    <KButton @clicked="slideInRef = !slideInRef">Slide in from right</KButton>
    <KSlideIn :condition="slideInRef" @shouldClose="slideInRef = !slideInRef" title="Hej"><div><p>Content slided in from right</p></div></KSlideIn>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import KButton from './src/Components/KButton.vue'
import { KAlert } from './src/Services/KAlert';
import KSlideIn from './src/Services/KSlideIn.vue';
import { SweetAlertIcon } from 'sweetalert2';
import KChip from './src/Components/KChip.vue';
import KButtonGroup from './src/Components/KButtonGroup.vue';
import KCard from './src/Components/KCard.vue';

const makeAlert = (type: SweetAlertIcon) => KAlert(type, 'TestHeader', 'TestText')
const slideInRef = ref(false);
const buttonGroupRef = ref(false);

</script>

<style lang="scss">
html {
    background-color: rgb(25, 25, 25);
}
.appWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>