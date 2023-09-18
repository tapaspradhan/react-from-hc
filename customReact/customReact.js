function customRender(reactElement,container){
    // Approch 01
    /*
    const domElment=document.createElement
    (reactElement.type)
    domElment.innerHTML=reactElement.children
    domElment.setAttribute("href",reactElement.props.href)
    domElment.setAttribute("traget",reactElement.props.traget)

    container.appendChild(domElment)
    */
// Approch 02
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if (prop==="children")continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        traget:"_blank"
    },
    children:"Click me to visit google"
}

const mainCintainer=document.querySelector("#root")

customRender (reactElement,mainCintainer)