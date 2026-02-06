let userInput = prompt(`Select a weather:
   1- summer
   2- winter
   3- spring
   4- autumn
   5- monsoon`).toLowerCase();
if (userInput === "summer") {
  document.writeln(`<div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: #b4ae3a;
background: linear-gradient(90deg, rgba(180, 174, 58, 1) 0%, rgba(253, 29, 29, 1) 20%, rgba(252, 176, 69, 1) 100%);">

<div class="card" style="width: 18rem;">
  <img src="Images/summer gif.gif" class="card-img-top" alt="Summer Season">
  <div class="card-body">
    <h5 class="card-title text-center">Summer</h5>
    <p class="card-text text-center">Summer is the hottest of the four temperate seasons, characterized by high temperatures and long, bright, sunny days.</p>
  </div>
</div>
    </div>`);
} else if (userInput === "winter") {
  document.writeln(`<div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: #EEAECA;
background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 87%);">

        <div class="card" style="width: 18rem;">
            <img src="Images/winter gif.gif" class="card-img-top" alt="Winter Season">
            <div class="card-body">
                <h5 class="card-title text-center">Winter</h5>
                <p class="card-text text-center">Winter is the coldest season of the year, characterized by chilly winds and a drop in temperature.</p>
            </div>
        </div>
    </div>
`);
} else if (userInput === "spring") {
  document.writeln(`<div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: #22C1C3;
background: linear-gradient(0deg, rgba(34, 193, 195, 1) 7%, rgba(81, 153, 119, 1) 41%, rgba(227, 52, 119, 1) 59%, rgba(245, 201, 108, 1) 99%);">

        <div class="card" style="width: 18rem;">
            <img src="Images/spring gif.gif" class="card-img-top" alt="Spring Season">
            <div class="card-body">
                <h5 class="card-title text-center">Spring</h5>
                <p class="card-text text-center">Spring is a vibrant season following winter, marked by warming weather, blooming flowers, and new leaves, typically spanning February to April. Known for its pleasant, breezy, and sunny days.</p>
            </div>
        </div>
    </div> `);
} else if (userInput === "autumn") {
  document.writeln(`<div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: #4a0617;
background: linear-gradient(44deg, rgba(74, 6, 23, 1) 0%, rgba(245, 100, 100, 1) 50%, rgba(235, 141, 9, 1) 100%);">

        <div class="card" style="width: 18rem;">
            <img src="Images/autumn gif.gif" class="card-img-top" alt="Autumn Season">
            <div class="card-body">
                <h5 class="card-title text-center">Autumn</h5>
                <p class="card-text text-center">Autumn is the transition season between summer and winter, characterized by cooler, pleasant weather and falling, color-changing leaves. Known as "fall" in some regions.</p>
            </div>
        </div>
    </div>  
`);
} else if (userInput === "monsoon") {
  document.writeln(` <div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: #e9e9f2;
background: linear-gradient(167deg, rgba(233, 233, 242, 1) 0%, rgba(86, 86, 209, 1) 35%, rgba(58, 91, 97, 1) 100%);">

        <div class="card" style="width: 18rem;">
            <img src="Images/rainy gif.gif" class="card-img-top" alt="Monsoon Season">
            <div class="card-body">
                <h5 class="card-title text-center">Monsoon</h5>
                <p class="card-text text-center">The rainy season, or monsoon, is a refreshing period following hot summer months, usually spanning from June to September. It brings cooler temperatures, lush green landscapes, and vital water for agriculture.</p>
            </div>
        </div>
    </div>  `);
}
