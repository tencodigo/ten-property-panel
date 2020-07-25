<script>
import Vue from 'vue';
import CodigoPropertyPanel from '@/codigo-property-panel.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CodigoPropertyPanel
  }
});
</script>

<template>
  <div id="app">
    <codigo-property-panel />
  </div>
</template>
