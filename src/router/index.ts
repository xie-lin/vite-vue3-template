import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '',
        // redirect:'/hello',
        component: () => import('../index.vue'),
        meta:{
            title :'首页'
        },
        children: [
            {
                path: 'hello2',
                name: 'hello2',
                component: () => import('../components/HelloWorld.vue'),
                meta:{
                    title :'工作台'
                }
            },
            {
                path: 'hello3',
                name: 'hello3',
                component: () => import('../views/hello.vue'),
                meta:{
                    title :'2'
                }
            }
        ]
    },
    {
        path: '/123',
        name: '123',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/404',
        name: '/404',
        component: () => import('../components/HelloWorld.vue'), 
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((_to, _from, next) => {
    if (_to.meta.content || _to.meta.name) {
        let head = document.getElementsByTagName("head")

        let meta: any = document.createElement("meta")
        meta.content = _to.meta.content
        meta.content = _to.meta.name
        head[0].appendChild(meta)
    }

    /* 路由发生变化修改页面title */
    if (_to.meta.title) {
        document.title = (_to.meta.title as string)
    }
    next()

})
export default router