import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
    props: {
        label: String,
    },
    template: `
<div class="form-group">
    <label>
        {{ label }}
        <span class="required-marker"></span>
    </label>
    <slot></slot>
    <div v-show="errorMsg" class="text-danger">
        {{ errorMsg }}
    </div>
</div>
`,
})
export default class FormGroup extends Vue {
    fieldName = null
    get errorMsg() {
        const $c: any = this
        if (! this.fieldName) {
            return ''
        }
        const errors = $c.$parent.errors.collect(this.fieldName, null, false)
        return errors.map(e => {
            if (e.rule === 'required') {
                return 'Dit veld is verplicht.'
            } else if (e.rule === 'email') {
                return 'Dit is geen geldig emailadres.'
            } else {
                return 'Dit veld bevat fouten.'
            }
        }).join(' - ')
    }
    beforeMount() {
        const slot = this.$slots['default'][0]
        if (! slot.data.attrs) {
            return
        }
        this.fieldName = slot.data.attrs['name']
    }
}
