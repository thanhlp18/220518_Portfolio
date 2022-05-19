const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Function Common
function appendImageElement(parentElement, data) {
    var tempNode = document.createElement("span")
    tempNode.innerHTML = `<img src="${data}" data-target="#indicators" data-slide-to="0" alt="" /> `
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
    console.log(data) 
    if(projectIndex < project.length) {
        appendImageElement(project[projectIndex], data.src)
        projectIndex++
    } else {
        projectIndex = 0
        appendImageElement(project[projectIndex], data.src)
        projectIndex++
    }
})