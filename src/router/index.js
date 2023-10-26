import { createWebHistory, createRouter } from "vue-router"
import ProductList from "../components/ProductList.vue"
import ProductDetails from "../components/ProductDetails.vue"
const Login = () => import("../views/LoginView.vue")
const LogoutView = () => import("../views/LogoutView.vue")
const Signup = () => import("../views/SignupView.vue")
const ForgotPassword = () => import("../views/ForgotPassword.vue")
const CartView = () => import("../views/CartView.vue")


const routes = [    
    {
      path: '/',
      name: 'home',
      component: Login
    },
    { path: "/login", name: "Login", component: Login },
    { path: "/logout", name: "Logout", component: LogoutView },
    { path: "/signup", name: "Signup", component: Signup },
    { path: "/forgotpassword", name: "ForgotPassword", component: ForgotPassword},
    {
        path: "/products",
        component: ProductList,
        name: "products"
    },
    {
        path: "/product/:id",
        component: ProductDetails,
        name: "product-details"
    },
    {
        path: "/cart",
        component: CartView,
        name: "Cart"
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

