let wheat = 0;
let wood = 0;
let farmers = 0;
let lumberjacks = 0;
const farmerCost = 10;
const lumberjackCost = 10;

function harvestWheat() {
  wheat++;
  updateDisplay();
}

function buyFarmer() {
  if (wheat >= farmerCost) {
    wheat -= farmerCost;
    farmers++;
    updateDisplay();
  }
}

function buyLumbejacks() {
  if (wheat >= lumberjackCost) {
    wheat -= lumberjackCost;
    lumberjacks++;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("resource-count").textContent = `You have ${wheat} wheat`;
  document.getElementById("farmer-count").textContent = `You have ${farmers} farmers`;
  document.getElementById("resource-count").textContent = `You have ${wood} wheat`;
  document.getElementById("lumberjack-count").textContent = `You have ${lumberjacks} farmers`;

  const buyButton = document.getElementById("buy-farmer-btn");
  buyButton.disabled = wheat < farmerCost;

  const buyButtonLum = document.getElementById("buy-lumberjack-btn");
  buyButtonLum.disabled = wheat < lumberjackCost;

}

// Production automatique toutes les 1 secondes
setInterval(() => {
  wheat += farmers;
  wood += lumberjacks;

  updateDisplay();
}, 1000);

updateDisplay(); // Initialisation au chargement
