const coffeeCardContainer = document.querySelector("[data-coffee-cards-container]")
const coffeeCardTemplate = document.querySelector("[data-coffee-template]")
const searchInput = document.querySelector("[data-search]")

let coffees = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  coffees.forEach(coffee => {
    const isVisible =
      coffee.title.toLowerCase().includes(value) //||
     // coffee.email.toLowerCase().includes(value)
    coffee.element.classList.toggle("hide", !isVisible) //will stop showing items not related to serach input only
  })
})


fetch("https://api.sampleapis.com/coffee/hot/")
  .then(res => res.json())
  .then(data => {
     coffees = data.map(coffee => {
       const card = coffeeCardTemplate.content.cloneNode(true).children[0]
       const header = card.querySelector("[data-header]")
       const body = card.querySelector("[data-body]")
      //  const image = card.querySelector("[data-image]")
       header.textContent = coffee.title
       body.textContent = coffee.ingredients
      //  image.image= coffee.image 

       //{<input type="button" value="Click" onClick="myFunc();"/>}

    //    const box = `
    //  <div id='box'>
    //  <button id='button-1'>Button</button>
    //  </div>`;
    //   body.content = box;

    //    const button = coffeeCardTemplate.createElement('button');
    //    button.innerText = 'Button';
    //    button.id = 'button-1';
    //    coffeeCardTemplate.body.appendChild(button);

       //newLink.setAttribute("href", "singleCardDetail.html");

    //    const clickbtn = card.querySelector("[data-btn]");
    //    clickbtn.addEventListener('click',newPage)


    //    (<button class="btn">Click</button>)


    // var generateBtn = document.getElementById('btn');
    // generateBtn.addEventListener('click', newPage);
    // function newPage(){
    //     // Create anchor element.
    //     var a = document.createElement('a'); 
    // // Set the href property.
    // a.href = "singleCardDetail"; 
    // }
    

      coffeeCardContainer.append(card)
      return { title: coffee.title, ingredients: coffee.ingredients, element: card}
     });
     console.log(coffees);
  }); 
    

  // function viewItem(){
  //   const anchorElement = coffeeCardTemplate.createElement('a');
  //   anchorElement.setAttribute('target', '_blank');
  //   coffeeCardTemplate.appendChild(anchorElement);
  //  }



//   function myFunction() {
//     document.getElementById("btn").style.color = "red";
// }


//   function newPage(){
//     // Create anchor element.
//     var a = document.createElement('a'); 
// // Set the href property.
// a.href = "singleCardDetail"; 

//   }

  // function myFetcher() {
  //   fetch('https://api.sampleapis.com/coffee/hot')
  //     .then(
  //       function(response) {
  //         if (response.status !== 200) {
  //           console.log('Looks like there was a problem. Status Code: ' + response.status);
  //           return;
  //         }
  //         response.json().then(function(data) {
  //           console.log(data);
  //           document.getElementById('w3review').value = data;
  //         });
  //       }
  //     )
  //     .catch(function(err) {
  //       console.log('Fetch Error :-S', err);
  //     })
  //   }
  //   myFetcher();
