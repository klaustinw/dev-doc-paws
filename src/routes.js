import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// Navigation
const DashboardDefault = React.lazy(() => import('./pages/Dashboard/Default'));

// Transactions
const Consultations = React.lazy(() => import('./pages/Transactions/Consultations/Consultations'));
const ConsultationDetail = React.lazy(() => import('./pages/Transactions/Consultations/ConsultationDetail'));

const Homecares = React.lazy(() => import('./pages/Transactions/Homecares/Homecares'));
const HomecareDetail = React.lazy(() => import('./pages/Transactions/Homecares/HomecareDetail'));

const Articles = React.lazy(() => import('./pages/Transactions/Articles/Articles'));
const NewArticle = React.lazy(() => import('./pages/Transactions/Articles/NewArticle'));
const EditArticle = React.lazy(() => import('./pages/Transactions/Articles/EditArticle'));

// Masters
const Users = React.lazy(() => import('./pages/Masters/Users/Users'));
const UserDetail = React.lazy(() => import('./pages/Masters/Users/UserDetail'));

const Vendors = React.lazy(() => import('./pages/Masters/Vendors/Vendors'));
const VendorDetail = React.lazy(() => import('./pages/Masters/Vendors/VendorDetail'));

const Categories = React.lazy(() => import("./pages/Masters/Categories/Categories"));
const NewCategory = React.lazy(() => import("./pages/Masters/Categories/NewCategory"));
const EditCategory = React.lazy(() => import("./pages/Masters/Categories/EditCategory"));

const MedicalTreatments = React.lazy(() => import("./pages/Masters/MedicalTreatments/MedicalTreatments"));
const NewMedicalTreatment = React.lazy(() => import("./pages/Masters/MedicalTreatments/NewMedicalTreatment"));
const EditMedicalTreatment = React.lazy(() => import("./pages/Masters/MedicalTreatments/EditMedicalTreatment"));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/transactions/online-consultations', exact: true, name: 'Consultations', component: Consultations },
    { path: '/transactions/online-consultations/detail/:id',exact: true, name: 'Consultation Detail', component: ConsultationDetail },
    { path: '/transactions/homecares', exact: true, name: 'Homecares', component: Homecares },
    { path: '/transactions/homecares/detail/:id',exact: true, name: 'Homecare Detail', component: HomecareDetail },
    { path: '/transactions/articles', exact: true, name: 'Articles', component: Articles },
    { path: '/transactions/articles/create', exact: true, name: 'Create New Article', component: NewArticle },
    { path: '/transactions/articles/edit', exact: true, name: 'Edit Article', component: EditArticle },
    { path: '/masters/users', exact: true, name: 'Users', component: Users },
    { path: '/masters/users/detail', exact: true, name: 'Use Detail', component: UserDetail },
    { path: '/masters/vendors', exact: true, name: 'Vendors', component: Vendors },
    { path: '/masters/vendors/detail', exact: true, name: 'Vendor Detail', component: VendorDetail },
    { path: '/masters/categories', exact: true, name: 'Categories', component: Categories },
    { path: '/masters/categories/create', exact: true, name: 'New Category', component: NewCategory },
    { path: '/masters/categories/edit/:id', exact: true, name: 'Edit Category', component: EditCategory },
    { path: '/masters/medical-treatments', exact: true, name: 'Medical Treatments', component: MedicalTreatments },
    { path: '/masters/medical-treatments/create', exact: true, name: 'Create New Medical Treatment', component: NewMedicalTreatment },
    { path: '/masters/medical-treatments/edit/:id', exact: true, name: 'Edit Medical Treatment', component: EditMedicalTreatment },
];

export default routes;