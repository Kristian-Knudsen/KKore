<template>
<div class="appWrapper">
    <h1>Buttons</h1>
    <KButton @clicked="makeOutput">Button</KButton>
    <KButton size="sm">Small button</KButton>
    <KButton block>Block button</KButton>
    <KButton>Button <template v-slot:right>Right</template></KButton>
    <KButton disabled>Disabled</KButton>
    <KButton outlined>Outlined</KButton>
    
    <h2>Stated button</h2>
    <KButtonStated :state="statedButtonRef" @clicked="e => statedButtonRef = e">Stated</KButtonStated>
    <p style="margin: 0">Value: {{ statedButtonRef }}</p>

    <h1>Switch</h1>
    <KSwitch v-model="switchRef" />
    <p style="margin: 0">Value: {{ switchRef }}</p>

    <h1>Grouped buttons</h1>
    <KButtonGroup :values="['Test1']" :value="buttonGroupRef" @clicked="(e: string) => buttonGroupRef = e"/>
    <KButtonGroup :values="['Test1', 'Test2']" :value="buttonGroupRef" @clicked="(e: string) => buttonGroupRef = e"/>
    <KButtonGroup :values="['Test1', 'Test2', 'Test3']" :value="buttonGroupRef" @clicked="(e: string) => buttonGroupRef = e"/>
    <p>Active button: {{ buttonGroupRef }}</p>

    <h1>Alerts</h1>
    <KButton size="sm" @clicked="makeAlert('success')">Success alert</KButton>
    <KButton size="sm" @clicked="makeAlert('error')">Error alert</KButton>
    <KButton size="sm" @clicked="makeAlert('warning')">Warning alert</KButton>
    <KButton size="sm" @clicked="makeAlert('info')">Info alert</KButton>
    <KButton size="sm" @clicked="makeAlert('question')">Question alert</KButton>

    <h1>Inputs</h1>
    <KInput placeholder="No content"/>
    <KInput right placeholder="Right Icon"><Icon /></KInput>
    <KInput left placeholder="Left Icon"><Icon /></KInput>
    <KInput type="number" placeholder="number" />
    <KInput type="number" right placeholder="Number with icon"><Icon /></KInput>

    <h1>Dropdowns</h1>
    <KDropdown :options="['Option1', 'Option2', 'Longer option']" :model-value="dropdownRef" @changed="e => dropdownRef = e"/>
    <p style="margin: 0">Value: {{ dropdownRef }}</p>

    <h1>Animations</h1>
    <KButton @clicked="slideInRef = !slideInRef">Slide in from right</KButton>
    <KSlideIn :condition="slideInRef"><div><p>Content slided in from right</p></div></KSlideIn>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import KButton from './src/Components/KButton.vue'
import { KAlert } from './src/Services/KAlert';
import KSwitch from './src/Components/KSwitch.vue'
import KInput from './src/Components/KInput.vue';
import Icon from './src/Components/TEST_Icon.vue';
import KDropdown from './src/Components/KDropdown.vue';
import KSlideIn from './src/Services/KSlideIn.vue';
import KButtonGroup from './src/Components/KButtonGroup.vue';
import { SweetAlertIcon } from 'sweetalert2';
import KButtonStated from './src/Components/KButtonStated.vue';

const makeOutput = () => console.log('Test Output');
const makeAlert = (type: SweetAlertIcon) => KAlert(type, 'TestHeader', 'TestText')
const switchRef = ref(false);
const dropdownRef = ref('');
const buttonGroupRef = ref('');
const slideInRef = ref(false);
const statedButtonRef = ref(false);

</script>

<style lang="scss">
.appWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>