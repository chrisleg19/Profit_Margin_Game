
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
const scenario1 = document.querySelector(".scenario1")

//original income statement
let lastYearStatement = {
    revenue : 510000,
    cogs : 150000,
    rawMat : 30000,
    freight : 20000,
    factoryLabor : 75000,
    storage : 25000,
    grossProfit : 360000,
    otherOpCosts : 300000,
    indirectLabor : 150000,
    legal : 50000,
    officeEquip : 100000,
    opProfit : 60000,
    opm: 11.76470588235294
}

//income statement object that changes through out the game
let statement1 = {
    revenue : 510000,
    cogs : null,
    rawMat : 30000,
    freight : 20000,
    factoryLabor : 75000,
    storage : 25000,
    grossProfit : null,
    otherOpCosts : null,
    indirectLabor : 150000,
    legal : 50000,
    officeEquip : 100000,
    opProfit : null,
    opm: null,
}

//filling out values of income statement through DOM
//putting this in a function to reset when selecting different answers
//reset function has a parameter for the statement obj
let reset = (st)=>{
revenue.textContent = st.revenue

st.cogs = st.rawMat + st.freight + st.factoryLabor + st.storage

cogs.textContent = st.cogs

rawMat.textContent = st.rawMat

freight.textContent = st.freight

factoryLabor.textContent = st.factoryLabor

storage.textContent = st.storage

st.grossProfit = st.revenue - st.cogs

grossProfit.textContent = st.grossProfit

st.otherOpCosts = st.indirectLabor + st.legal + st.officeEquip

otherOpCosts.textContent = st.otherOpCosts

indirectLabor.textContent = st.indirectLabor

legal.textContent = st.legal

officeEquip.textContent = st.officeEquip

st.opProfit = st.grossProfit - st.otherOpCosts

opProfit.textContent = st.opProfit

st.opm = (st.opProfit / st.revenue) *100

opm.textContent = st.opm

}

reset(statement1)

//effects of answer A for Question 1
let oneA = (st)=>{

st.indirectLabor = (st.indirectLabor *.15) + st.indirectLabor

revenue.textContent = st.revenue

st.cogs = st.rawMat + st.freight + st.factoryLabor + st.storage

cogs.textContent = st.cogs

rawMat.textContent = st.rawMat

freight.textContent = st.freight

factoryLabor.textContent = st.factoryLabor

storage.textContent = st.storage

st.grossProfit = st.revenue - st.cogs

grossProfit.textContent = st.grossProfit

st.otherOpCosts = st.indirectLabor + st.legal + st.officeEquip

otherOpCosts.textContent = st.otherOpCosts

indirectLabor.textContent = st.indirectLabor

legal.textContent = st.legal

officeEquip.textContent = st.officeEquip

st.opProfit = st.grossProfit - st.otherOpCosts

opProfit.textContent = st.opProfit

st.opm = (st.opProfit / st.revenue) *100

opm.textContent = st.opm

}

oneA(statement1)



//effects of answer B for Question 1
let oneB = (st)=>{

    st.officeEquip = (st.officeEquip *.25) + st.officeEquip

    revenue.textContent = st.revenue
    
    st.cogs = st.rawMat + st.freight + st.factoryLabor + st.storage
    
    cogs.textContent = st.cogs
    
    rawMat.textContent = st.rawMat
    
    freight.textContent = st.freight
    
    factoryLabor.textContent = st.factoryLabor
    
    storage.textContent = st.storage
    
    st.grossProfit = st.revenue - st.cogs
    
    grossProfit.textContent = st.grossProfit
    
    st.otherOpCosts = st.indirectLabor + st.legal + st.officeEquip
    
    otherOpCosts.textContent = st.otherOpCosts
    
    indirectLabor.textContent = st.indirectLabor
    
    legal.textContent = st.legal
    
    officeEquip.textContent = st.officeEquip
    
    st.opProfit = st.grossProfit - st.otherOpCosts
    
    opProfit.textContent = st.opProfit
    
    st.opm = (st.opProfit / st.revenue) *100
    
    opm.textContent = st.opm
}

// oneB()

//effects of answer C for Question 1
let oneC = (st)=>{

    st.storage = (st.storage *.50) + st.storage

    st.indirectLabor = st.indirectLabor - (st.indirectLabor * .10)

    revenue.textContent = st.revenue
    
    st.cogs = st.rawMat + st.freight + st.factoryLabor + st.storage
    
    cogs.textContent = st.cogs
    
    rawMat.textContent = st.rawMat
    
    freight.textContent = st.freight
    
    factoryLabor.textContent = st.factoryLabor
    
    storage.textContent = st.storage
    
    st.grossProfit = st.revenue - st.cogs
    
    grossProfit.textContent = st.grossProfit
    
    st.otherOpCosts = st.indirectLabor + st.legal + st.officeEquip
    
    otherOpCosts.textContent = st.otherOpCosts
    
    indirectLabor.textContent = st.indirectLabor
    
    legal.textContent = st.legal
    
    officeEquip.textContent = st.officeEquip
    
    st.opProfit = st.grossProfit - st.otherOpCosts
    
    opProfit.textContent = st.opProfit
    
    st.opm = (st.opProfit / st.revenue) *100
    
    opm.textContent = st.opm
}


// oneC()

//*EVENTLISTENER FOR SUBMIT BUTTON===================

scenario1.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("submit works")
    for (let ans = 0; ans<3; ans++){
        if(scenario1.issue1[ans].checked)
        break;
    }
    console.log(scenario1.issue1.value)
        if (scenario1.issue1.value === "1A"){
            
            oneA()
        } else if(scenario1.issue1.value === "1B"){
            
            oneB()
        } else if (scenario1.issue1.value === "1C"){
            
            oneC()
        }
})



// scenario1.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     let answer = new FormData(scenario1)
//     let output = "";
//     console.log(answer)
//     for(let entry of answer){
//         output= ``
//     }

// })







// let reset = ()=>{
//     revenue.textContent = 510000
//     cogs.textContent = 150000
//     rawMat.textContent = 30000
//     freight.textContent = 20000
//     factoryLabor.textContent = 75000
//     storage.textContent = 25000
//     grossProfit.textContent = 360000
//     otherOpCosts.textContent = 300000
//     indirectLabor.textContent = 150000
//     legal.textContent = 50000
//     officeEquip.textContent = 100000
//     opProfit.textContent = 60000

//     opm.textContent = (opProfit.textContent/revenue.textContent)*100
// }



//Create objects with values.  Pull & update object values


//create multiple objects for statements between each scenario.  The results from each scenario will be pushed into the corresponding object.  
//there will be a "clear" button to reset the object for statement if a new answer needs to be selected
//each object between scenarios will show the effects of each decision made

//maybe try this with classes


