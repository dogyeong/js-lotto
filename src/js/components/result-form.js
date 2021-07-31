import { Component } from '../core/component.js'

const template = `
  <form class="mt-9" data-cy="result-form">
    <label class="flex-auto d-inline-block mb-3"
      >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
    >
    <div class="d-flex">
      <div>
        <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
        <div>
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number"
          />
          <input
            type="number"
            class="winning-number mx-1 text-center"
            data-cy="winning-number"
          />
        </div>
      </div>
      <div class="bonus-number-container flex-grow">
        <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
        <div class="d-flex justify-center">
          <input type="number" class="bonus-number text-center" data-cy="bonus-number" />
        </div>
      </div>
    </div>
    <button
      type="button"
      class="open-result-modal-button mt-5 btn btn-cyan w-100"
      data-cy="result-btn"
    >
      결과 확인하기
    </button>
  </form>
`

class ResultForm extends Component {
  constructor() {
    super({
      template,
      methods: {
        handleChangeVisible: (visible) => {
          const isVisible = visible === 'true'
          this.root.querySelector('form').style.visibility = isVisible ? 'visible' : 'hidden'
        },
      },
    })
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'visible':
        this.methods.handleChangeVisible(newValue)
        break
      default:
    }
  }

  static get observedAttributes() {
    return ['visible']
  }
}

window.customElements.define('result-form', ResultForm)