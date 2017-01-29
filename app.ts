/// <reference path="typings.d.ts"/>

require('bootstrap/dist/css/bootstrap.min.css')
require('./app.scss')

import Vue = require('vue')
import UserForm from './user-form.component'

const app = new Vue({
    el: '#vue-container',
    template: '<user-form/>',
    components: {
        UserForm,
    },
})
export default app
