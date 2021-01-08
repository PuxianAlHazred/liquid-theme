<template>
  <div class="horizontal-tabs">
    <div class="tabs">
        <div class="onglet" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </div>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectTab: function(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  },
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children;
  },
}
</script>
