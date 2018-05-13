// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    kumiko: {
      first: 'Kumiko',
      last: 'Oumae',
      age: 15,
    },
    asuka: {
      first: 'Asuka',
      last: 'tanaka',
      age: 17,
    },
  },
  computed: {
    kumikoFullName() {
      return `${this.kumiko.first} ${this.kumiko.last}`;
    },
    asukaFullName() {
      return `${this.asuka.first} ${this.asuka.last}`;
    },
    asukaAgeInOneYear() {
      return this.asuka.age + 1;
    },
  },
  template: `
  <div>
    <h2>Hello, {{kumikoFullName}}</h2>
    <h2>Age: {{kumiko.age}} </h2>
    <h2>Hello, {{asukaFullName}}</h2>
    <h2>Age: {{asukaAgeInOneYear}} </h2>
  </div>
  `,
});
