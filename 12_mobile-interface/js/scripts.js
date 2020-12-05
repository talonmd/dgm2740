// what is the path to the JSON file?
const jsonData = "../hoteldata.json"

//Go fetch it and then wait for a response.
fetch(jsonData)
  .then((response) => response.json())
  .then((data) => {
    //Once it comes back, display it to the console.
    console.log(data)

    let imageTag = document.createElement("img")
    imageTag.src = "images/seranat"
  }) //end of "then" fat arrow function
