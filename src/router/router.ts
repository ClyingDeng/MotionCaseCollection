declare global {
    interface RouterMeta {
        title?: string;
        role?: string;
        static?: boolean;
    }
    interface Router {
        path: string;
        name?: string;
        icon?: string;
        permission?: string;
        meta?: RouterMeta;
        component?: any;
        children?: Router[];
        redirect?: string;
    }
    interface System {
        import(request: string): Promise<any>;
    }
    var System: System;
}
import Home from '@/views/home/Home.vue';
const routers: Router[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/About.vue'),
    },
];
export default routers;
