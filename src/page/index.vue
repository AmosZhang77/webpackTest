<template>
  <div>index page</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function () {
      axios({
        method: 'GET',
        // url: 'http://10.7.10.227:8080/myjf-bk' + '/front/bbs/queryPopularBoardTopList',
        url: 'myjf-bk1/front/bbs/queryPopularBoardTopList',
        headers: {
          Accept: 'application/json;charset=UTF-8',
          clientId: 'MYJF_ADMIN',
          clientTime: Date.parse(new Date()),
          token: ''
        }
      })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
</script>

<style scoped>

</style>
