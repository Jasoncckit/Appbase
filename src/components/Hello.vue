<template>
  <f7-page>
    <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <f7-list>
      <f7-list-item><f7-link href="https://vuejs.org" target="_blank" rel="noopener" external>Core Docs</f7-link></f7-list-item>
      <f7-list-item><f7-link href="https://forum.vuejs.org" target="_blank" rel="noopener" external>Forum</f7-link></f7-list-item>
      <f7-list-item><f7-link href="http://chat.vuejs.org/" target="_blank" rel="noopener" external>Vue Community Chat</f7-link></f7-list-item>
      <f7-list-item><f7-link href="https://twitter.com/vuejs" target="_blank" rel="noopener" external>Twitter</f7-link></f7-list-item>
      <f7-list-item><f7-link href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener" external>Docs for This Template</f7-link></f7-list-item>
    </f7-list>
    <h2>Ecosystem</h2>
    <f7-list>
      <f7-list-item><f7-link href="http://router.vuejs.org/" target="_blank" rel="noopener" external>vue-router</f7-link></f7-list-item>
      <f7-list-item><f7-link href="http://vuex.vuejs.org/" target="_blank" rel="noopener" external>vuex</f7-link></f7-list-item>
      <f7-list-item><f7-link href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener" external>vue-loader</f7-link></f7-list-item>
      <f7-list-item><f7-link href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" external>awesome-vue</f7-link></f7-list-item>
    </f7-list>
  </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

