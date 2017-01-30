import Vue = require('vue')
import Component from 'vue-class-component'
import FormGroup from './form-group.component'
import SubmitButton from './submit-button.component'
import {Watch} from 'vue-property-decorator'

@Component({
    template: `
<form v-on:submit.prevent="submit">
    <form-group label="Lastname">
        <input v-model="form.firstName" class="form-control"
            v-validate="'required'" name="firstName">
    </form-group>
    <form-group label="Firstname">
        <input v-model="form.lastName" class="form-control"
            v-validate="'required'" name="lastName">
    </form-group>
    <form-group label="Email">
        <input v-model="form.email" class="form-control"
            v-validate="'required|email'" name="email">
    </form-group>
    <form-group label="Gender">
        <select v-model="form.gender" class="form-control"
            name="gender" v-validate="'required'">
            <option value="">-- Choose gender --</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
    </form-group>
    <submit-button/>

    <div v-if="showResult">
        <hr>

        <div class="alert alert-success">
            Your name is <strong>{{ name }}</strong>.
        </div>

        <h4>Model:</h4>

        <pre>{{ json }}</pre>

        <button type="button" class="btn btn-danger" @click="close">
            Close
        </button>
    </div>
</form>`,
    components: {SubmitButton, FormGroup},
})
export default class UserForm extends Vue {
    form = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
    }
    showResult = false

    get name() {
        return `${this.form.firstName} ${this.form.lastName}`.trim()
    }

    get json() {
        return JSON.stringify(this.form, null, 4)
    }

    submit() {
        const $this: any = this
        $this.$validator.validateAll().then(success => {
            if (! success) {
                alert('Bevat fouten!')
            }
            this.showResult = true
        })
    }

    close() {
        this.showResult = false
    }

    @Watch('form', {deep: true})
    onFormChanged() {
        this.showResult = false
    }
}
