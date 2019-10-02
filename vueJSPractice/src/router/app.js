export default{
    routes : [
        {
        path : '/login',
        name: 'login',
        component : resolve =>require(['modules/basic/Login.vue'], resolve),
        meta : {
            tokenRequired : true
        }
    },
    {
        path : '/register',
        name : 'register',
        component : resolve => require(['modules/basic/Register.vue'], resolve),
        meta : {
            tokenRequired : false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['modules/basic/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        },
    },
    {
        path: '/subjects',
        name: 'subjects',
        component: resolve => require(['modules/basic/Subjects.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/personalInfo',
        name: 'personalInfo',
        component: resolve => require(['modules/basic/PersonalInfo.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    // {
    //     path: '/sidebar',
    //     name: 'sidebar',
    //     component: resolve => require(['modules/basic/Sidebar.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     }
    // }
    // {
    //     path: '/Logout',
    //     name: 'Logout',
    //     component: resolve => require(['modules/Logout.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     },
    ]
}





