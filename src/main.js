// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    friends: [
      {
        first: 'Kumiko',
        last: 'Oumae',
        age: 15,
      },
      {
        first: 'Asuka',
        last: 'tanaka',
        age: 17,
      },
    ],
  },
  filters: {
    ageInOneYear(friend) {
      return friend.age + 1;
    },
    fullName(friend) {
      return `${friend.first} ${friend.last}`;
    },
  },
  template: `
    <div>
      <h2 v-for="friend in friends">
        <h4>{{friend | fullName}}</h4>
        <h5>age: {{friend | ageInOneYear}}</h5>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
      </h2>
    </div>
    `,
});
