const routes =[
  {
    path: '/', component: () => import("./components/HomePage.vue"),
  },
  {
    path: '/dashboard' , component: ()=> import("./components/Dashboard.vue")
  }
]

export default routes