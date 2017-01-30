import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
    template: `
<button type="submit" class="btn btn-primary">
    Submit
</button>`,
})
export default class SubmitButton extends Vue {
}
