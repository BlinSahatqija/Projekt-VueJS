import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import AddJobs from '@/components/AddJobs.vue'
import User from '@/components/user/User.vue';
import UserEdit from '@/components/user/UserEdit';
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import VueRouter from 'vue-router'
import firebase from '@/Firebase.js'
import router from './index'

export default new VueRouter({
    routes:[
        {path:'/', name:'home', component: Home},
        {path:'/about', name:'about', component: About},
        {path:'/contact', name:'contact', component: Contact},
        {path:'/user', name:'user', component: User, meta: { requiresAuth: true }},
        {path:'/useredit', name:'useredit', component: UserEdit, meta: { requiresAuth: true }},
        {path:'/addjobs', name:'addjobs', component: AddJobs, meta: { requiresAuth: true }},
        {path:'/login', name:'login', component: Login},
        {path:'/register', name:'register', component: Register},
    ]
})

router.beforeEach(async (to, from, next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requiresAuth && !await firebase.getCurrentUser()){
        next("login");
    }else{
        next();
    }
});