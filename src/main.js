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
  filters: {
    ageInOneYear(user) {
      return user.age + 1;
    },
    fullName(user) {
      return `${user.first} ${user.last}`;
    },
  },
  template: `
  <div>
    <h2>Hello, {{kumiko | fullName}}</h2>
    <h2>Age: {{kumiko | ageInOneYear}} </h2>
    <h2>Hello, {{asuka | fullName}}</h2>
    <h2>Age: {{asuka |  ageInOneYear}} </h2>
  </div>
  `,
});
