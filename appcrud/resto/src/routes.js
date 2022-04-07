import Home from './components/Home'
import SignUp from './components/SignUp'
import {createRouter,createWebHistory} from 'vue-router'
import Add from './components/Add'
import Update from './components/Update'
import Login from './components/Login'

const routes = [
    {
        name: 'Home',
        component:Home,
        path:'/'

    },
    {
        name: 'SignUp',
        component:SignUp,
        path:'/sign-up'

    },
    {
        name: 'Login',
        component:Login,
        path:'/Login'

    },
    {
        name: 'Add',
        component:Add,
        path:'/add'

    },
    {
        name: 'Update',
        component:Update,
        path:'/update'

    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;