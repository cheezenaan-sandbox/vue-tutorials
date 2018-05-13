// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    kumiko: {
      name: 'Kumiko Oumae',
      age: '15',
    },
    asuka: {
      name: 'Asuka Tanaka',
      age: '17',
    },
  },
  template: `
  <div>
    <h2>Hello, {{kumiko.name}}</h2>
    <h2>Age: {{kumiko.age}} </h2>
    <h2>Hello, {{asuka.name}}</h2>
    <h2>Age: {{asuka.age}} </h2>
  </div>
  `,
});
