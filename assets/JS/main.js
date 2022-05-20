const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Function Common
function appendImageElement(parentElement, data) {
    var tempNode = document.createElement("span")
    tempNode.innerHTML = `<img src="${data}"  alt="" /> `
    parentElement.appendChild(tempNode)
}

// Nav bar
var navbarItem = $('#navbarNavAltMarkup > .app__navbarItem')
var navbarLogo = $('.app__navbar > .app__navbarLogo')

// Nav item insert from data.js
headerData.navbarItems.forEach((data, index) => {
    var  elementNode = document.createElement("a");
    elementNode.innerText = data
    elementNode.classList.add("nav-link", "ps-4")
    elementNode.setAttribute("href",`#app__${data}`)
    elementNode.setAttribute("style","text-transform: capitalize")
    navbarItem.appendChild(elementNode)
})
navbarLogo.innerHTML = `${headerData.navbarLogo}`

// --------
// Home
// Intro text insert from data.js
const homeIntro = $('#app__home-intro')
homeIntro.innerHTML = introTextData

// Project
// Insert image from data.js
const project = $('#app__project > .app__project-wrap').children
var projectIndex = 0

projectImagesData.forEach((data, index) => {
    if(projectIndex < project.length) {
        appendImageElement(project[projectIndex], data.src)
        projectIndex++
    } else {
        projectIndex = 0
        appendImageElement(project[projectIndex], data.src)
        projectIndex++
    }
})



const Projects = $$('#app__project > .app__project-wrap img')
// Show project Iamge
function hideImages() {
    $('#modal').style.display = 'none'
}


Projects.forEach((data, index)=> {
    Projects[index].addEventListener('click', (e)=> {
        if(window.screen.width > "1024") {
            $('#modal').style.display = 'flex'
            console.log(e.path[0].getAttribute('src'))
            showIamges(e.path[0].getAttribute('src'))

        }
    })  
})

function showIamges(src) {
    $('#modal').innerHTML = `
    <img src="${src}" class="col-8" alt="" /> 
    `
}
