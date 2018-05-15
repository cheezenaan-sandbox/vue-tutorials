// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    friends: [],
  },
  mounted() {
    fetch('http://rest.learncode.academy/api/vuetutorial/friends')
      .then(response => response.json())
      .then(data => {
        this.friends = data;
      });
    console.log('mounted!!'); // eslint-disable-line
  },
  template: `
    <div>
    <li v-for="friend in friends">{{friend.name}}</li>
    </div>
    `,
});

export default { app };
