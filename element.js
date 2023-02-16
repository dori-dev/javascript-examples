let elementById = document.getElementById("elementId");
let elementByClassName = document.getElementsByClassName("elementClassName");
let elementByTagName = document.getElementsByTagName("elementTagName");

// Better Way:
let element = document.querySelector("elementQuery");
let elements = document.querySelectorAll("elementsQuery");

// Set/Get Attribute
element.getAttribute("attributeName");
element.setAttribute("title", "Example element title.");
element.title = "Example element title.";
// Data Attribute
element.setAttribute("data-attributeName", "attributeValue");
element.dataset.attributeName = "attributeValue";
element.dataset.attributeName;

// Element Class
element.classList;
element.classList.add("new-class-name");
element.classList.remove("exists-class-name");
element.classList.toggle("class-name");
