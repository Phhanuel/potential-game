let wheat = 100; // Starting wheat amount
let wood = 0; // Starting wood amount
let ore = 0; // Starting ore amount

let farmers = 0; // Starting farmers amount
let lumberjacks = 0; // Starting lumberjacks amount
let miners = 0; // Starting miners amount


const farmerCost = 10; // Cost to buy a farmer
const lumberjackCost = 15; // Cost to buy a lumberjack
const minerCost = 15; // Cost to buy a miner

//function harvestWheat() {
  //wheat++;
  //updateDisplay();
//}

function buyFarmer() { // Function to buy a farmer
  if (wheat >= farmerCost) { // Check if enough wheat to buy a farmer
    wheat -= farmerCost;
    farmers++; // Increment the number of farmers
    updateDisplay();
  }
}

function buyLumberjacks() { // Function to buy a lumberjack
  if (wheat >= lumberjackCost) { // Check if enough wheat to buy a lumberjack
    wheat -= lumberjackCost;
    lumberjacks++; // Increment the number of lumberjacks
    updateDisplay();
  }
}

function buyMiner() { // Function to buy a miner
  if (wheat >= minerCost) { // Check if enough wheat to buy a miner
    wheat -= minerCost;
    miners++; // Increment the number of miners
    updateDisplay();
  }
}

function updateDisplay() { // Function to update the display
  document.getElementById("wheat-count").textContent = `You have ${wheat} wheat`;
  document.getElementById("farmer-count").textContent = `You have ${farmers} farmers`;

  document.getElementById("wood-count").textContent = `You have ${wood} wood`;
  document.getElementById("lumberjack-count").textContent = `You have ${lumberjacks} lumberjacks`;

  document.getElementById("ore-count").textContent = `You have ${ore} wood`;
  document.getElementById("miner-count").textContent = `You have ${miners} lumberjacks`;


  document.getElementById("buy-farmer-btn").disabled = wheat < farmerCost; // Disable button if not enough wheat
  document.getElementById("buy-lumberjack-btn").disabled = wheat < lumberjackCost; // Disable button if not enough wheat
  document.getElementById("buy-miner-btn").disabled = wheat < minerCost; // Disable button if not enough wheat

}


setInterval(() => { // Production automatique toutes les 1 secondes
  wheat += farmers;
  wood += lumberjacks;
  ore += miners;

  updateDisplay();
}, 1000);

updateDisplay(); // Initialisation au chargement
