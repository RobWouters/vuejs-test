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
</div>
`,
})
export default class FormGroup extends Vue {
    mounted() {
        const el = <Element> this.$slots['default'][0].elm
        if (el.getAttribute('required')) {
            this.$el.classList.add('required')
        }
    }
}
