
let revenue = document.querySelector(".revenueNum")
let cogs = document.querySelector(".cogsNum")
let rawMat = document.querySelector(".rawMatNum")
let freight = document.querySelector(".freightNum")
let factoryLabor = document.querySelector(".factoryLaborNum")
let storage = document.querySelector(".storageNum")
let grossProfit = document.querySelector(".grossProfitNum")
let otherOpCosts = document.querySelector(".otherOpCostsNum")
let indirectLabor = document.querySelector(".indirectLaborNum")
let legal = document.querySelector(".legalNum")
let officeEquip = document.querySelector(".officeEquipNum")
let opProfit = document.querySelector(".opProfitNum")
let opm = document.querySelector(".opmNum")


let start = ()=>{
    revenue.textContent = 510000
    cogs.textContent = 150000
    rawMat.textContent = 30000
    freight.textContent = 20000
    factoryLabor.textContent = 75000
    storage.textContent = 25000
    grossProfit.textContent = 360000
    otherOpCosts.textContent = 300000
    indirectLabor.textContent = 150000
    legal.textContent = 50000
    officeEquip.textContent = 100000
    opProfit.textContent = 60000

    opm.textContent = (opProfit.textContent/revenue.textContent)*100
}

start()


