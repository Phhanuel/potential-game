let wheat = 0;
let farmers = 0;
const farmerCost = 10;

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

function updateDisplay() {
  document.getElementById("resource-count").textContent = `You have ${wheat} wheat`;
  document.getElementById("farmer-count").textContent = `You have ${farmers} farmers`;

  const buyButton = document.getElementById("buy-farmer-btn");
  buyButton.disabled = wheat < farmerCost;
}

// Production automatique toutes les 1 secondes
setInterval(() => {
  wheat += farmers;
  updateDisplay();
}, 1000);

updateDisplay(); // Initialisation au chargement
