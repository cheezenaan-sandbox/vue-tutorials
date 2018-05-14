// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.component('Friend', {
  props: ['friend'],
  filters: {
    ageInOneYear(friend) {
      return friend.age + 1;
    },
    fullName(friend) {
      return `${friend.first} ${friend.last}`;
    },
  },
  /* eslint-disable */
  methods: {
    incrementAge(friend) {
      friend.age += 1;
    },
    decrementAge(friend) {
      friend.age -= 1;
    },
  },
  template: `
    <div>
      <h4>{{friend | fullName}}</h4>
      <h5>age: {{friend | ageInOneYear}}</h5>
      <button v-on:click="incrementAge(friend)">+</button>
      <button v-on:click="decrementAge(friend)">-</button>
      <input v-model="friend.first"/>
      <input v-model="friend.last"/>
    </div>
  `,
});

/* eslint-disable no-new */
const app = new Vue({
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
  template: `
    <div>
      <Friend v-for="friend in friends" v-bind:friend="friend"/>
    </div>
    `,
});

export { app };
