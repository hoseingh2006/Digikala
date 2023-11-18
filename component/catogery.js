const template=document.createElement("template")
template.innerHTML=`
<link rel="stylesheet" href="css/style.css">

 <div class="category-popup-services-box">
                    <a class="category-popup-services-link" href="">
                        <img class="category-popup-services-img" src="img/jet.png" alt="category-image">
                        <div class="category-popup-services-details">
                            <div>
                                <p class="category-popup-services-p"></p>
                                <svg class="category-popup-services-icon">
                                    <use xlink:href="icon/symbol-defs.svg#icon-chevron-up"></use>
                                </svg>

                            </div>
                            <p class="category-popup-services-info"></p>
                        </div>
                    </a>
                </div>
`
class customCaregory extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
      let img=this.getAttribute("link-img")
      this.shadowRoot.querySelector(".category-popup-services-img").setAttribute("src",img)
      let name=this.getAttribute("name-catogery")
      this.shadowRoot.querySelector(".category-popup-services-p").innerHTML=name
      let info=this.getAttribute("info-catogery")
      this.shadowRoot.querySelector(".category-popup-services-info").innerHTML=info

    }
}

export{customCaregory}