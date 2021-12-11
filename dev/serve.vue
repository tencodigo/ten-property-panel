

<template>
  <div id="app" class="ten-form">
    <div style="float:left;width:80%">
      ...
    </div>
    <div style="float:left;width:20%">
      <ten-property-panel>
        <template slot="fields">
          <ten-input id="f1" title="Field 1" :floating="true"></ten-input>
          <ten-input id="f2" title="Field 2" :floating="true" :type="'number'"></ten-input>
          <ten-input id="f3" title="Field 3" :floating="true"></ten-input>
          <ten-input id="f4" title="Field 4" :floating="true"></ten-input>
          <ten-input id="f5" title="Field 5" :floating="true"></ten-input>
        </template>
      </ten-property-panel>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TenForm from 'ten-form';

import TenPropertyPanel from '@/property-panel.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    TenForm,
    TenPropertyPanel
  }
});
</script>
