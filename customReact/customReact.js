function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/

    //better code(approach)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
    }
}


const reactElement = {  //react understand this type of syntax. Any component we create in the jsx file it gets converted to this object like form
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)   //this is the render method

console.log('Hello World');