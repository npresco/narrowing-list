import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["id", "firstname", "lastname", "output"]

  toggleId() {
    if (this.data.get("field") !== "id" ) {

      fetch(this.data.get("url") + "/id/desc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.idTarget.innerHTML = '<i class="fas fa-arrow-down"></i> Id'
          this.firstnameTarget.innerHTML = 'First Name'
          this.lastnameTarget.innerHTML = 'Last Name'
        })

      this.data.set("field", "id")
      this.data.set("dir", "desc")
    } else if (this.data.get("field") === "id" && this.data.get("dir") === "asc")  {
      fetch(this.data.get("url") + "/id/desc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.idTarget.innerHTML = '<i class="fas fa-arrow-down"></i> Id'
          this.firstnameTarget.innerHTML = 'First Name'
          this.lastnameTarget.innerHTML = 'Last Name'
        })

      this.data.set("dir", "desc")
    } else if (this.data.get("field") === "id" && this.data.get("dir") === "desc")  {
      fetch(this.data.get("url") + "/id/asc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.idTarget.innerHTML = '<i class="fas fa-arrow-up"></i> Id'
          this.firstnameTarget.innerHTML = 'First Name'
          this.lastnameTarget.innerHTML = 'Last Name'
        })

      this.data.set("dir", "asc")
    }
  }

  toggleFirstName() {
    if (this.data.get("field") !== "first_name") {
      fetch(this.data.get("url") + "/first_name/desc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.firstnameTarget.innerHTML = '<i class="fas fa-arrow-down"></i> First Name'
          this.idTarget.innerHTML = 'Id'
          this.lastnameTarget.innerHTML = 'Last Name'
        })

      this.data.set("field", "first_name")
      this.data.set("dir", "desc")
    } else if (this.data.get("field") === "first_name" && this.data.get("dir") === "asc")  {
      fetch(this.data.get("url") + "/first_name/desc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.firstnameTarget.innerHTML = '<i class="fas fa-arrow-down"></i> First Name'
          this.idTarget.innerHTML = 'Id'
          this.lastnameTarget.innerHTML = 'Last Name'
        })

      this.data.set("dir", "desc")
    } else if (this.data.get("field") === "first_name" && this.data.get("dir") === "desc")  {
      fetch(this.data.get("url") + "/first_name/asc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.firstnameTarget.innerHTML = '<i class="fas fa-arrow-up"></i> First Name '
          this.idTarget.innerHTML = 'Id'
          this.lastnameTarget.innerHTML = 'Last Name'
        })

      this.data.set("dir", "asc")
    }
  }

  toggleLastName() {
    if (this.data.get("field") !== "last_name") {
      fetch(this.data.get("url") + "/last_name/desc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.lastnameTarget.innerHTML = '<i class="fas fa-arrow-down"></i> Last Name'
          this.idTarget.innerHTML = 'Id'
          this.firstnameTarget.innerHTML = 'First Name'
        })

      this.data.set("field", "last_name")
      this.data.set("dir", "desc")
    } else if (this.data.get("field") === "last_name" && this.data.get("dir") === "asc")  {
      fetch(this.data.get("url") + "/last_name/desc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.lastnameTarget.innerHTML = '<i class="fas fa-arrow-down"></i> Last Name'
          this.firstnameTarget.innerHTML = 'First Name'
          this.idTarget.innerHTML = 'Id'
        })

      this.data.set("dir", "desc")
    } else if (this.data.get("field") === "last_name" && this.data.get("dir") === "desc")  {
      fetch(this.data.get("url") + "/last_name/asc/" + this.data.get("query"))
        .then(response => response.text())
        .then(html => {
          this.outputTarget.innerHTML = html
          this.lastnameTarget.innerHTML = '<i class="fas fa-arrow-up"></i> Last Name'
          this.firstnameTarget.innerHTML = 'First Name'
          this.idTarget.innerHTML = 'Id'
        })

      this.data.set("dir", "asc")
    }
  }
}
