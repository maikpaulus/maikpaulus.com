import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';

import App from './App.vue';

import Home from './pages/Home.vue';
import Impressum from './pages/Impressum.vue';
import Datenschutz from './pages/Datenschutz.vue';
import Projekte from './pages/Projekte.vue';
import ProjektDetails from './pages/ProjektDetails.vue';
import Kontakt from './pages/Kontakt.vue';
import NotFound from './pages/404.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Vuelidate)

const store = new Vuex.Store({
    state: {
        page: 'home'
    }
});

const metaSuffix = 'Maik Paulus | ';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { 
            path: '/', name: 'home', component: Home, meta: {
                title: metaSuffix + 'Software Engineer | München'
            } 
        },
        { 
            path: '/impressum', name: 'impressum', component: Impressum, meta: {
              title: metaSuffix + 'Impressum'
            } 
        },
        { 
            path: '/datenschutz', name: 'datenschutz', component: Datenschutz, meta: {
                title: metaSuffix + 'Datenschutz'
            } 
        },
        { 
            path: '/kontakt', name: 'kontakt', component: Kontakt, meta: {
                title: metaSuffix + 'Kontakt'
            } 
        },
        { 
            path: '/projekte', name: 'projekte', component: Projekte, meta: {
                title: metaSuffix + 'Projekte' 
            }
        },
        { 
            path: '/projekt/:alias', name: 'projekt-details', component: ProjektDetails, meta: {
                title: metaSuffix + 'Projekte'
            }, props: true
        },
        { 
            path: '/*', name: '404', component: NotFound, meta: {
                title: metaSuffix + '404'
            } 
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
	el: '#app',
  store,
  router,
	render: h => h(App)
});