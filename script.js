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

function buyLumberjacks() {
  if (wheat >= lumberjackCost) {
    wheat -= lumberjackCost;
    lumberjacks++;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("wheat-count").textContent = `You have ${wheat} wheat`;
  document.getElementById("farmer-count").textContent = `You have ${farmers} farmers`;
  document.getElementById("wood-count").textContent = `You have ${wood} wood`;
  document.getElementById("lumberjack-count").textContent = `You have ${lumberjacks} lumberjacks`;

  document.getElementById("buy-farmer-btn").disabled = wheat < farmerCost;
  document.getElementById("buy-lumberjack-btn").disabled = wheat < lumberjackCost;

}

// Production automatique toutes les 1 secondes
setInterval(() => {
  wheat += farmers;
  wood += lumberjacks;

  updateDisplay();
}, 1000);

updateDisplay(); // Initialisation au chargement
