
//setting global vars with DOM
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
let statementStart
let statementTwo
let statementThree
let statementFour
let clear1 = document.querySelector("#clear1")
const scenario1 = document.querySelector(".scenario1")

//prototype class
class incomeStatement{
    constructor(
    revenue,
    cogs,
    rawMat, 
    freight,
    factoryLabor,
    storage,
    grossProfit,
    otherOpCosts,
    indirectLabor,
    legal,
    officeEquip,
    opProfit,
    opm
    ){

    this.revenue = revenue;
    this.cogs = cogs;
    this.rawMat = rawMat;
    this.freight = freight;
    this.factoryLabor = factoryLabor;
    this.storage = storage;
    this.grossProfit = grossProfit;
    this.otherOpCosts = otherOpCosts;
    this.indirectLabor = indirectLabor;
    this.legal = legal;
    this.officeEquip = officeEquip;
    this.opProfit = opProfit;
    this.opm = opm;
    }

//function to display income statement numbers
show(statement){
    revenue.textContent = statement.revenue

    statement.cogs = statement.rawMat + statement.freight + statement.factoryLabor + statement.storage

    cogs.textContent = statement.cogs

    rawMat.textContent = statement.rawMat

    freight.textContent = statement.freight

    factoryLabor.textContent = statement.factoryLabor

    storage.textContent = statement.storage

    statement.grossProfit = statement.revenue - statement.cogs

    grossProfit.textContent = statement.grossProfit

    statement.otherOpCosts = statement.indirectLabor + statement.legal + statement.officeEquip

    otherOpCosts.textContent = statement.otherOpCosts

    indirectLabor.textContent = statement.indirectLabor

    legal.textContent = statement.legal

    officeEquip.textContent = statement.officeEquip

    statement.opProfit = statement.grossProfit - statement.otherOpCosts

    opProfit.textContent = statement.opProfit

    statement.opm = (statement.opProfit / statement.revenue) *100

    opm.textContent = statement.opm
    }

//function to set current statement values to the next scenario income statement

setStatementValues(statement){
    statement.revenue = revenue;
    this.cogs = cogs;
    this.rawMat = rawMat;
    this.freight = freight;
    this.factoryLabor = factoryLabor;
    this.storage = storage;
    this.grossProfit = grossProfit;
    this.otherOpCosts = otherOpCosts;
    this.indirectLabor = indirectLabor;
    this.legal = legal;
    this.officeEquip = officeEquip;
    this.opProfit = opProfit;
    this.opm = opm;
}


}

statementStart = new incomeStatement(
    510000,
    null,
    30000,
    20000,
    75000,
    25000,
    null,
    null,
    150000,
    50000,
    100000,
    null,
    null
)

statementOne = new incomeStatement(
    510000, 
    null,
    30000,
    20000, 
    75000, 
    25000, 
    null, 
    null, 
    172500, 
    50000, 
    100000, 
    null,
    null 
)

statementTwo = new incomeStatement(
    510000, 
    null,
    30000,
    20000, 
    75000, 
    25000, 
    null, 
    null, 
    150000, 
    50000, 
    125000, 
    null,
    null
)

statementThree = new incomeStatement(
    510000, 
    null,
    30000,
    20000, 
    75000, 
    37500, 
    null, 
    null, 
    135000, 
    50000, 
    100000, 
    null,
    null 
)

statementStart.show(statementStart)

scenario1.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("submit works")
    // for (let ans = 0; ans<3; ans++){
    //     if(scenario1.issue1[ans].checked){
    //         break;
    //     } 
    // }
    // console.log(scenario1.issue1.value)
        if (scenario1.issue1.value === "1A"){
            console.log(scenario1.issue1.value)
            statementOne.show(statementOne)
            
        } else if(scenario1.issue1.value === "1B"){
            console.log(scenario1.issue1.value)
            statementTwo.show(statementTwo)
            
        } else if (scenario1.issue1.value === "1C"){
            console.log(scenario1.issue1.value)
            statementThree.show(statementThree)
           
            
        } 
})

clear1.addEventListener("click", ()=>{
    statementStart.show(statementStart)
})











// statementStart.show(statementStart)
// statementOne.show(statementOne)
// statementTwo.show(statementTwo)
// statementThree.show(statementThree)





