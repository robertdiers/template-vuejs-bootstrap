<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" @click="callRouter('/welcome')">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" @click="callRouter('/exampleclick')">ExampleClick</b-nav-item>
          <b-nav-item href="#" @click="callRouter('/exampletable')">ExampleTable</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#" @click="changeLanguage('en')">EN</b-dropdown-item>
            <b-dropdown-item href="#" @click="changeLanguage('de')">DE</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {       
    }
  },
  methods: {
    callRouter: function(url)
    {
      //prepare queryParam
      var currentdate = new Date(); 
      var queryParam = { transferdata: 'UniqueID ' + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() };

      //route
      this.$router.push({ path: url, query: queryParam })
    },
    changeLanguage: function(lang)
    {
      //change language using main.js method call to access i18n
      window.App.changeLocale(lang);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
