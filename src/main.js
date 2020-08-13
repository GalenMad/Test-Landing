import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import vuePositionSticky from 'vue-position-sticky';
import './root.scss'

Vue.use(Vuelidate);
Vue.use(vuePositionSticky);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
