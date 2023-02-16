// JavaScript Document


//Global Variables Start//

const navBar = document.getElementById("navBar");
const navUl = document.getElementById("navUl");
const sections = document.querySelectorAll('section');

//Global Variables End//

//Dynamically Built Nav Start//

function buildNav(){
	//Loop through sections
	for (let i = 0; i < sections.length; i++){
		//Create li for each section
		let newListItem = document.createElement("li");
		
		//Store data from each section while iterating
		let sectionName = sections[i].getAttribute('data-nav');
		let sectionID = sections[i].getAttribute('id');
		
		//Create html for new li tags
		newListItem.innerHTML = "<li><a class='navItem' href=#" + sectionID + ">" + sectionName + "</a></li>";
		
		//Append li tags with html
		navUl.append(newListItem);	
		
	}
}

//Dynamically Built Nav End//

buildNav();

//Ensure smooth scrolling to Sections Start//

//Select all anchor tags in nav
const anchors = document.querySelectorAll(".navItem");

//Loop through anchor tags applying click event listener and calling clicjHandler function
for (const anchor of anchors) {
  anchor.addEventListener("click", clickHandler);
}

//function to be called when anchor is clicked
function clickHandler(e) {
	//Prevent default behavior
  e.preventDefault();
	
	//Select href for scrolling target
  const href = this.getAttribute("href");
	
	//ensure smooth scroll to target
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

//Ensure smooth scrolling to Sections End//

//Highlight active section Start//

function activeSection (){
    // Select all anchor using "active" class
    const activeAnchor = document.querySelectorAll(".navItem")
    sections.forEach((section, i)=>{
        //Get the boundingrect for each section 
        const sectionBox = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionBox.top <= 380 && sectionBox.bottom >= 350){
            //add 'active' class to the section
            section.classList.add("active");
            //add 'active' class to corresponding section
            activeAnchor[i].classList.add("active");
        } else{
            //Remove active class when section is not in viewport
            section.classList.remove("active");
            activeAnchor[i].classList.remove("active");
        }
    })
}

document.addEventListener("scroll", function(){activeSection();});

//Highlight active section End//

