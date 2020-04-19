import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Messages',
})
export default class Messages extends Vue {
  private errorMessage = ''

  private successMessage = ''

  public clearMessages(): void {
    this.errorMessage = ''
    this.successMessage = ''
  }
}
