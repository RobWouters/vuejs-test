/// <reference path="typings.d.ts"/>

require('bootstrap/dist/css/bootstrap.min.css')
require('./app.scss')

import Vue = require('vue')
import VeeValidate = require('vee-validate')

import UserForm from './user-form.component'

Vue.use(VeeValidate)
const app = new Vue({
    el: '#vue-container',
    template: '<user-form/>',
    components: {
        UserForm,
    },
})
export default app
