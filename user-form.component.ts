import Vue = require('vue')
import Component from 'vue-class-component'
import FormGroup from './form-group.component'
import SubmitButton from './submit-button.component'

@Component({
    template: `
<form v-on:submit.prevent="submit">
    <form-group label="Firstname">
        <input v-model="form.firstName" class="form-control" required>
    </form-group>
    <form-group label="Lastname">
        <input v-model="form.lastName" class="form-control">
    </form-group>
    <submit-button/>

    <div v-if="submitted">
        <hr>

        <div class="alert alert-success">
            Your name is <strong>{{ name }}</strong>.
        </div>
    </div>
</form>`,
    components: {SubmitButton, FormGroup},
})
export default class UserForm extends Vue {
    form = {
        firstName: 'Rob',
        lastName: 'Wouters',
    }
    submitted = false

    get name() {
        return `${this.form.firstName} ${this.form.lastName}`.trim()
    }

    submit() {
        this.submitted = true
        setTimeout(() => {
            this.submitted = false
        }, 3000)
    }
}
