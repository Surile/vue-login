import VueRouter from "vue-router";
import Vue from "vue";
import Home from './Home'
import Users from "./Home/users";
import Register from "./Account/register"
import Login from "./Account/login";
import { store } from './store'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Home,
        beforeEnter: (to, from, next) => {
            const token  = store.state.isLogin
            if (!token) {
              next('/login')
            }else{
                next()
            } 
          },
        children:[
            {
                path:'/',
                component:Users
            }
        ]
    },
    {
        path:'/login',
        component:Login,
        beforeEnter:(to, from, next) => {
            const token = store.state.isLogin
            if (token) {
                next('/')
            }else{
                next()
            }
        }
    },
    {
        path:'/register',
        component:Register
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})


export default router