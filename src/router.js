import { createRouter, createWebHistory } from "vue-router";
    import ViewPage from './components/ViewPage'
    import DataTable from './components/DataTable'
    import App from './App.vue';

    export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            name: 'app',
            component: App,
            children: [
                {
                    path: '',
                    name: 'View',
                    component: ViewPage
                },
                { 
                    path: "/table",
                    name: 'Table',
                    component: DataTable
                }
            ]
        }
    ]
});
