// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "output" ]

  search(e) {
    if (this.inputTarget.value.length >= 1) {
      fetch(this.data.get("url") + "/" + this.inputTarget.value)
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
        })
    } else {
      fetch(this.data.get("url"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
        })
    }
  }
}
