import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import AddJobs from '@/components/AddJobs.vue'
import VueRouter from 'vue-router'
import router from './index'

export default new VueRouter({
    routes:[
        {path:'/', name:'home', component: Home},
        {path:'/about', name:'about', component: About},
        {path:'/contact', name:'contact', component: Contact},
        {path:'/addjobs', name:'addjobs', component: AddJobs, meta: { requiresAuth: true }},

    ]
})
