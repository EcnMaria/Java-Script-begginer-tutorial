//adding an image changer

const myImage = document.querySelector ("img");   //a reference stored in <img> element in myImage

myImage.onclick = () =>       //onclick event handler property equal to a function with no name

{            
    const mySrc = myImage.getAttribute ("src");      //the code retrieves the value of the image's src attribute
    if (mySrc === "images/firefox-icon.png") {       // the code uses a conditional to check if the src value is equal to the path of the original image
        myImage.setAttribute ("src", "images/fox.png");     //if it is true, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element
    }

    else {
        myImage.setAttribute ("src", "images/firefox-icon.png");  //if it is false (meaning it must already have changed), the src value swaps back to the original image path, to the original state.
    }
}

//personalised welcome page

let myButton = document.querySelector("button");
let myHeading = document.querySelector ("h1");
function setUserName() {                                    //the setUserName() function contains a prompt() function, which displays a dialog box
    const myName = prompt("Please enter your name.");      //this prompt() function asks the user to enter data, and storing it in a variable after the user clicks OK
    if (!myName) {
        setUserName();  //it display the dialog box if the user press ok/cancel button without entering a name
    }
    else {
    localStorage.setItem("name", myName);                 //the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name.
    myHeading.textContent = `Mozzila is cool, ${myName}`   //we set the textContent of the heading to a string, plus the user's newly stored name.
    }
}
    //condition block to make it work (initialization code, as it structures the app when it first loads)

    if(!localStorage.getItem("name")) {     //this line uses the negation operator to check whether the name data exists
        setUserName()  //if not, the setUserName() function runs to create it (the negation is true)
    }
    else {
        const storedName = localStorage.getItem("name");   //if it exists (the user set a user name during a previous visit), we retrieve the stored name using getItem()
        myHeading.textContent = `Mozilla is cool, ${storedName}`;  //set the textContent of the heading to a string, plus the user's name, as we did inside setUserName()
      }

    myButton.onclick = () => { //onclick event handler
        setUserName();    //when clicked, setUserName() runs
    }



