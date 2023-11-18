const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="css/style.css">

<div class="amazing-box-kala">
                <img class="amazing-box-kala-img" src="img/amazing_phone1.webp" alt="amazing_phone">
                <div class="amazing-box-kala-price-box">
                    <p class="amazing-box-kala-price">۱۵,۶۵۵,۰۰۰</p>
                    <p class="amazing-box-kala-price-unit">تومان</p>
                </div>
            </div>
`
const template_2 = document.createElement("template")
template_2.innerHTML = `
<link rel="stylesheet" href="css/style.css">

<div class="amazing-box-kala">
<img class="amazing-box-kala-img" src="img/amazing_phone1.webp" alt="amazing_phone">
<div class="amazing-box-kala-price-box">
    <p class="amazing-box-kala-price-discount">13%</p>
    <p class="amazing-box-kala-price">۱۵,۶۵۵,۰۰۰</p>
    <p class="amazing-box-kala-price-unit">تومان</p>
</div>
<p class="amazing-box-kala-price-last">۱۵,۶۵۵,۰۰۰</p>
</div>
`


class Amazing extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: "open"
        })
        if (this.getAttribute("discount") == null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        } else {
            this.shadowRoot.appendChild(template_2.content.cloneNode(true))
        }
    }
    connectedCallback() {
        if (this.getAttribute("discount") == null) {
            let img = this.getAttribute("link-img")
            this.shadowRoot.querySelector(".amazing-box-kala-img").setAttribute("src", img)
            let price = this.getAttribute("price")
            this.shadowRoot.querySelector(".amazing-box-kala-price").innerHTML = price
        } else {
            let img = this.getAttribute("link-img")
            this.shadowRoot.querySelector(".amazing-box-kala-img").setAttribute("src", img)
            let price = this.getAttribute("price")
            this.shadowRoot.querySelector(".amazing-box-kala-price").innerHTML = price

            let discount = this.getAttribute("discount")
            this.shadowRoot.querySelector(".amazing-box-kala-price-discount").innerHTML = discount+"%"
            let last_price = this.getAttribute("last-price")
            this.shadowRoot.querySelector(".amazing-box-kala-price-last").innerHTML = last_price
        }
    }
}

export {
    Amazing
}