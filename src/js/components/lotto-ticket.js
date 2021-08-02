import { Component } from '../core/component.js'

const template = `
  <span class="mx-1 text-4xl" data-cy="ticket">🎟️ 
    <span 
      class="text-base" 
      data-cy="ticket-nums"
      data-ref="nums"
    >
    </span>
  </span>
`

class LottoTicket extends Component {
  constructor() {
    super({
      template,
      data: {
        nums: [],
      },
      methods: {
        pickNums: () => {
          const nums = new Set()

          while (nums.size < 6) {
            nums.add(Math.ceil(Math.random() * 45))
          }

          this.data.nums = [...nums]
          this.ref.nums.textContent = this.data.nums.join(',')
        },
        handleChangeVisible: (isVisible) => {
          this.ref.nums.style.display = isVisible ? 'inline' : 'none'
        },
        check: ({ nums, bonus }) => {
          return {
            count: this.data.nums.filter((n) => nums.includes(n)).length,
            bouns: this.data.nums.includes(bonus),
          }
        },
      },
      mounted() {
        this.methods.pickNums()
      },
      watcher: {
        visible(isVisible) {
          this.methods.handleChangeVisible(isVisible)
        },
      },
    })
  }
}

window.customElements.define('lotto-ticket', LottoTicket)
