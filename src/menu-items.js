export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'transactions',
            title: 'Transactions',
            type: 'group',
            icon: 'icon-transactions',
            children: [
                {
                    id: 'articles',
                    title: 'Articles',
                    type: 'item',
                    url: '/transactions/articles',
                    icon: 'feather icon-file-text',
                },
                {
                    id: 'consultations',
                    title: 'Online Consultations',
                    type: 'item',
                    url: '/transactions/online-consultations',
                    icon: 'feather icon-box',
                },
                {
                    id: 'homecares',
                    title: 'Homecares',
                    type: 'item',
                    url: '/transactions/homecares',
                    icon: 'feather icon-heart',
                }
            ]
        },
        {
            id: 'masters',
            title: 'Masters',
            type: 'group',
            icon: 'icon-masters',
            children: [
                {
                    id: 'categories',
                    title: 'Categories',
                    type: 'item',
                    url: '/masters/categories',
                    icon: 'feather icon-github',
                },
                {
                    id: 'treatments',
                    title: 'Medical Treatments',
                    type: 'item',
                    url: '/masters/medical-treatments',
                    icon: 'feather icon-thermometer',
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/masters/users',
                    icon: 'feather icon-pocket',
                },
                {
                    id: 'vendors',
                    title: 'Vendors',
                    type: 'item',
                    url: '/masters/vendors',
                    icon: 'feather icon-briefcase'
                }
            ]
        }
    ]
};