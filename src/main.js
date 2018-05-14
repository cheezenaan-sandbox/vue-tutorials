// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    friends: ['Kumiko', 'Asuka'],
  },
  template: `
    <div>
    <li v-for="friend in friends">{{friend}}</li>
    </div>
    `,
});

export default { app };
