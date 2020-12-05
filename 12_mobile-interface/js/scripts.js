// what is the path to the JSON file?
const jsonData = "/12_mobile-interface/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(jsonData)
  .then((response) => response.json())
  .then((data) => {
    //Once it comes back, display it to the console.
    console.log(data)

    data.forEach((hotel) => {
      let section = document.createElement("section")

      let image = document.createElement("img")
      let caption = document.createElement("figcaption")
      let figure = document.createElement("figure")

      image.src = hotel.photo
      caption.innerText = hotel.name

      figure.appendChild(image)
      figure.appendChild(caption)

      let div = document.createElement("div")

      let address = document.createElement("span")
      address.innerHTML = `
      <i class="icon ion-md-car"></i>
      <p>${hotel.address[0]}</p>
      <p>${hotel.address[1]}</p>
      `

      let phone = document.createElement("span")
      phone.innerHTML = `
      <i class="icon ion-md-call"></i>
      <p>${hotel.phone}</p>
      `

      div.appendChild(address)
      div.appendChild(phone)

      section.appendChild(figure)
      section.appendChild(div)

      document.getElementById("hotels-div").appendChild(section)
    })
  }) //end of "then" fat arrow function
