import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/view/PagesView'
import HomeView from '@/view/HomeView'
import MovieView from '@/view/MovieView'
import BookView from '@/view/BookView'
import StatusView from '@/view/StatusView'
import GroupView from '@/view/GroupViews'
import DetailView from '@/view/DetailView'
import SearchView from '@/view/SearchView'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		redirect: '/pages'
    },
    {
    	path: '/pages',
    	component: PagesView,
    	children:[
    		{
    			path:'',
    			redirect:'/pages/home'
    		},
    		{
    			path:'home',
    			name:'HomeView',
    			component:HomeView
    		},
            {
                path:'movie',
                name:'MovieView',
                component:MovieView
            },
            {
                path:'book',
                name:'BookView',
                component:BookView
            },
            {
                path:'status',
                name:'StatusView',
                component:StatusView
            },
            {
                path:'group',
                name:'GroupView',
                component:GroupView
            },
            {
                path:'detail/:id',
                name:'DetailView',
                component:DetailView
            }
    	]
    },
    {
        path:'/search',
        name:'SearchView',
        components:{
            default:PagesView,
            search:SearchView
        }
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
