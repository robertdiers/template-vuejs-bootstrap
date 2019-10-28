<template>
  <div class="hello">
    {{ username }}  <br><br><br>
    {{ transferdata }}  <br><br><br>
    {{ examplerestdata }}
  </div>
</template>

<script>
export default {
  name: 'ExampleClick',
  data: function() {
    return {
      username: '',
      transferdata: '',
      examplerestdata: ''
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
      loadData() {
          //read username from session
          this.username = this.$session.get('vueuser').username;

          //read query data
          this.transferdata = this.$route.query.transferdata;

          // example axios call       
          const baseURI = 'https://jsonplaceholder.typicode.com/users'
          this.$http.get(baseURI)
          .then((result) => {
            this.examplerestdata = result.data
          })
      }
  }
}
</script>