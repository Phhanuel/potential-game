let wheat = 100; // Starting wheat amount
let wood = 0; // Starting wood amount
let ore = 0; // Starting ore amount

let maxwheat = 500; // Maximum wheat amount
let maxwood = 500; // Maximum wood amount  
let maxore = 500; // Maximum ore amount

let farmers = 0; // Starting farmers amount
let lumberjacks = 0; // Starting lumberjacks amount
let miners = 0; // Starting miners amount

let warehouse = 0; // Starting warehouse amount
let WoodWarehouseCost = 100;
let OreWarehouseCost = 100;



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

function buyWarehouse() { // Function to buy a miner
  if (wood >= WoodWarehouseCost && ore >= OreWarehouseCost) { // Check if enough wheat to buy a miner
    wood -= WoodWarehouseCost;
    ore -= OreWarehouseCost;
    warehouse++; // Increment the number of warehouses

    maxwheat += 100; // Increase max wheat capacity
    maxwood += 100; // Increase max wood capacity
    maxore += 100; // Increase max ore capacity 
 
    WoodWarehouseCost += 50; // Increase wood warehouse cost
    OreWarehouseCost += 50; // Increase ore warehouse cost

    updateDisplay();
  }
}

function updateDisplay() { // Function to update the display
  document.getElementById("wheat-count").textContent = `${wheat} / ${maxwheat} wheat`; 
  document.getElementById("farmer-count").textContent = `${farmers}`; 

  document.getElementById("wood-count").textContent = `${wood} / ${maxwood} wood`; 
  document.getElementById("lumberjack-count").textContent = `${lumberjacks}`;

  document.getElementById("ore-count").textContent = `${ore} / ${maxore} ore`;
  document.getElementById("miner-count").textContent = `${miners}`;

  document.getElementById("warehouse-count").textContent = `${warehouse}`;
  

  document.getElementById("buy-farmer-btn").disabled = wheat < farmerCost; // Disable button if not enough wheat
  document.getElementById("buy-lumberjack-btn").disabled = wheat < lumberjackCost; // Disable button if not enough wheat
  document.getElementById("buy-miner-btn").disabled = wheat < minerCost; // Disable button if not enough wheat
  document.getElementById("buy-warehouse-btn").disabled = wood < WoodWarehouseCost || ore < OreWarehouseCost; // Disable button if not enough resources

}


setInterval(() => { // Production automatique toutes les 1 secondes
  while (wheat < maxwheat) { 
    wheat = Math.min(wheat + farmers, maxwheat);
  }

  while (wood < maxwood) { 
    wood = Math.min(wood + lumberjacks, maxwood);
  }

  while (ore < maxore) { 
    ore = Math.min(ore + miners, maxore);
  }

  updateDisplay();
}, 1000);

updateDisplay(); // Initialisation au chargement
