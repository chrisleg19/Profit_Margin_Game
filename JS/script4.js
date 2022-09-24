//setting global vars 
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
let statementOne
let statementTwo
let statementThree
let statementFour
let statementFive
let statementSix
let statementSeven
let statementEight
let statementNine
let statementTen
let statementEleven
let statementTwelve
let statementThirteen
let statementFourteen
let statementFifteen
let statementSixteen
let clear1 = document.querySelector("#clear1")
let next1 = document.querySelector("#next1")
let clear2 = document.querySelector("#clear2")
let next2 = document.querySelector("#next2")
let clear3 = document.querySelector("#clear3")
let next3 = document.querySelector("#next3")
let clear4 = document.querySelector("#clear4")
let finish = document.querySelector("#finish")
const scenario1 = document.querySelector(".scenario1")
const scenario2 = document.querySelector(".scenario2")
const scenario3 = document.querySelector(".scenario3")
const scenario4 = document.querySelector(".scenario4")
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []
// let scenario2AArr = []

//prototype class
class masterIncomeStatement{
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
}

statementStart = new masterIncomeStatement(
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

statementOne = new masterIncomeStatement(
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

statementTwo = new masterIncomeStatement(
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

statementThree = new masterIncomeStatement(
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

statementFour = new masterIncomeStatement(
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
)

statementFive = arr1

statementSix = arr1

statementSeven = arr1


statementEight = new masterIncomeStatement(
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
            )
            
statementNine = arr2

statementTen = arr2

statementEleven = arr2

statementTwelve = new masterIncomeStatement(
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
)

statementThirteen = arr3

statementFourteen = arr3

statementFifteen = arr3

// statementSixteen = arr4
statementSixteen = new masterIncomeStatement(
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
)

statementStart.show(statementStart)

scenario1.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("submit works")
        if (scenario1.issue1.value === "1A"){
            console.log(scenario1.issue1.value)
            console.log(statementOne)
            arr1.push(statementOne)
            statementFour.revenue = arr1[0].revenue
            statementFour.cogs = arr1[0].cogs
            statementFour.rawMat = arr1[0].rawMat
            statementFour.freight = arr1[0].freight
            statementFour.factoryLabor = arr1[0].factoryLabor
            statementFour.storage = arr1[0].storage
            statementFour.grossProfit = arr1[0].grossProfit
            statementFour.otherOpCosts = arr1[0].otherOpCosts
            statementFour.indirectLabor = arr1[0].indirectLabor
            statementFour.legal = arr1[0].legal
            statementFour.officeEquip = arr1[0].officeEquip
            statementFour.opProfit = arr1[0].opProfit
            statementFour.opm = arr1[0].opm
            
            console.log(statementFour)
            console.log(arr1)
            statementOne.show(statementOne)
            
        } else if(scenario1.issue1.value === "1B"){
            console.log(scenario1.issue1.value)
            console.log(statementTwo)
            arr1.push(statementTwo)
            statementFour.revenue = arr1[0].revenue
            statementFour.cogs = arr1[0].cogs
            statementFour.rawMat = arr1[0].rawMat
            statementFour.freight = arr1[0].freight
            statementFour.factoryLabor = arr1[0].factoryLabor
            statementFour.storage = arr1[0].storage
            statementFour.grossProfit = arr1[0].grossProfit
            statementFour.otherOpCosts = arr1[0].otherOpCosts
            statementFour.indirectLabor = arr1[0].indirectLabor
            statementFour.legal = arr1[0].legal
            statementFour.officeEquip = arr1[0].officeEquip
            statementFour.opProfit = arr1[0].opProfit
            statementFour.opm = arr1[0].opm
            
            console.log(statementFour)
            console.log(arr1)
            statementTwo.show(statementTwo)
            
        } else if (scenario1.issue1.value === "1C"){
            console.log(scenario1.issue1.value)
            //push results from answer to array and then assign results to object for next scenario
            console.log(statementThree)
            arr1.push(statementThree)
            statementFour.revenue = arr1[0].revenue
            statementFour.cogs = arr1[0].cogs
            statementFour.rawMat = arr1[0].rawMat
            statementFour.freight = arr1[0].freight
            statementFour.factoryLabor = arr1[0].factoryLabor
            statementFour.storage = arr1[0].storage
            statementFour.grossProfit = arr1[0].grossProfit
            statementFour.otherOpCosts = arr1[0].otherOpCosts
            statementFour.indirectLabor = arr1[0].indirectLabor
            statementFour.legal = arr1[0].legal
            statementFour.officeEquip = arr1[0].officeEquip
            statementFour.opProfit = arr1[0].opProfit
            statementFour.opm = arr1[0].opm
            
            console.log(statementFour)
            console.log(arr1)
            
            statementThree.show(statementThree)
        } 
    })

clear1.addEventListener("click", ()=>{
    statementStart.show(statementStart)
    arr1 = []
    console.log("clear button works")
    console.log(arr1)
})

next1.addEventListener("click", ()=>{
    statementFour.show(statementFour)
    console.log("next1 works")
    console.log(statementFour)
    //add an event to reveal the next scenario
})




scenario2.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("submit2 works")

    if (scenario2.issue2.value === "2A"){
        console.log(scenario2.issue2.value)
        // statementFive[0].show(statementFive[0])
        console.log(statementFive[0])

        console.log(statementFive[0].rawMat)
        
        let increase = statementFive[0].rawMat * .20

        statementFive[0].rawMat = increase + statementFive[0].rawMat

        statementFive[0].show(statementFive[0])

        console.log(statementFive[0].rawMat)

        arr2.push(statementFive[0])
        statementEight.revenue = arr2[0].revenue
        statementEight.cogs = arr2[0].cogs
        statementEight.rawMat = arr2[0].rawMat
        statementEight.freight = arr2[0].freight
        statementEight.factoryLabor = arr2[0].factoryLabor
        statementEight.storage = arr2[0].storage
        statementEight.grossProfit = arr2[0].grossProfit
        statementEight.otherOpCosts = arr2[0].otherOpCosts
        statementEight.indirectLabor = arr2[0].indirectLabor
        statementEight.legal = arr2[0].legal
        statementEight.officeEquip = arr2[0].officeEquip
        statementEight.opProfit = arr2[0].opProfit
        statementEight.opm = arr2[0].opm
        
        console.log(arr2)
        console.log(arr2[0][0])
        console.log(statementEight)
        
        
    } else if(scenario2.issue2.value === "2B"){
        console.log(scenario2.issue2.value)
        // statementSix[0].show(statementSix[0])
       
        console.log(arr1)
        
        console.log(statementSix[0].storage)

        let decrease = statementSix[0].storage * .10

        statementSix[0].storage = statementSix[0].storage - decrease 

        statementSix[0].show(statementSix[0])

        console.log(statementSix[0].storage)
        
        arr2.push(statementSix[0])
        console.log(arr2)
        statementEight.revenue = arr2[0].revenue
        statementEight.cogs = arr2[0].cogs
        statementEight.rawMat = arr2[0].rawMat
        statementEight.freight = arr2[0].freight
        statementEight.factoryLabor = arr2[0].factoryLabor
        statementEight.storage = arr2[0].storage
        statementEight.grossProfit = arr2[0].grossProfit
        statementEight.otherOpCosts = arr2[0].otherOpCosts
        statementEight.indirectLabor = arr2[0].indirectLabor
        statementEight.legal = arr2[0].legal
        statementEight.officeEquip = arr2[0].officeEquip
        statementEight.opProfit = arr2[0].opProfit
        statementEight.opm = arr2[0].opm

        console.log(statementEight)
        console.log(arr2)
        
    } else if (scenario2.issue2.value === "2C"){
        console.log(scenario2.issue2.value)
        // statementSeven[0].show(statementSeven[0])

        console.log(statementSeven[0].freight)

        let decrease = statementSeven[0].freight * .10
        
        statementSeven[0].freight = statementSeven[0].freight - decrease

        statementSeven[0].show(statementSeven[0])

        console.log(statementSeven[0].freight)


        //push results from answer to array and then assign results to object for next scenario
        arr2.push(statementSeven[0])
        statementEight.revenue = arr2[0].revenue
        statementEight.cogs = arr2[0].cogs
        statementEight.rawMat = arr2[0].rawMat
        statementEight.freight = arr2[0].freight
        statementEight.factoryLabor = arr2[0].factoryLabor
        statementEight.storage = arr2[0].storage
        statementEight.grossProfit = arr2[0].grossProfit
        statementEight.otherOpCosts = arr2[0].otherOpCosts
        statementEight.indirectLabor = arr2[0].indirectLabor
        statementEight.legal = arr2[0].legal
        statementEight.officeEquip = arr2[0].officeEquip
        statementEight.opProfit = arr2[0].opProfit
        statementEight.opm = arr2[0].opm

        console.log(statementEight)
    } 
})

clear2.addEventListener("click", ()=>{
    statementFour.show(statementFour)
    arr2 = arr1
    console.log(arr1)
})

next2.addEventListener("click", (e)=>{
    e.preventDefault()
    statementEight.show(statementEight)
    console.log(statementEight)
    console.log(arr2)
    console.log(statementNine[0])
    console.log(statementNine[0])
    
    console.log("next2 works")
    //add an event to reveal the next scenario
})


scenario3.addEventListener("submit", (e)=>{
    e.preventDefault()

    if (scenario3.issue3.value === "3A"){
        console.log(scenario3.issue3.value)

        // console.log(arr2)

        // console.log(statementNine[0][0])

        console.log(statementNine[0].rawMat)

        let increase = statementNine[0].rawMat * .3

        console.log(increase)
        
        statementNine[0].rawMat = increase + statementNine[0].rawMat

        console.log(statementNine[0].rawMat)

        console.log(statementNine[0])

        // statementNine[0].show(statementNine[0])  //HERE IS THE PROBLEM...look at the show function

        console.log(statementNine[0])

        // console.log(statementNine[0].freight)

        console.log(statementNine[0])









//* FIGURE OUT WHY COGS IS NOT CALCULATING PROPERLY=======
        let decrease = statementNine[0].freight *.75

        statementNine[0].freight = statementNine[0].freight - decrease
 //*FIGURE OUT WHY COGS IS NOT CALCULATING PROPERLY=======
 
 


 




        // statementNine[0][0].freight = statementNine[0][0].freight - (statementNine[0][0] * .75)
        // statementNine[0][0].show(statementNine[0][0])

        // console.log(statementNine[0][0].rawMat)
        // console.log(statementNine[0][0].freight)

        arr3.push(statementNine[0])
        statementTwelve.revenue = arr3[0].revenue
        statementTwelve.cogs = arr3[0].cogs
        statementTwelve.rawMat = arr3[0].rawMat
        statementTwelve.freight = arr3[0].freight
        statementTwelve.factoryLabor = arr3[0].factoryLabor
        statementTwelve.storage = arr3[0].storage
        statementTwelve.grossProfit = arr3[0].grossProfit
        statementTwelve.otherOpCosts = arr3[0].otherOpCosts
        statementTwelve.indirectLabor = arr3[0].indirectLabor
        statementTwelve.legal = arr3[0].legal
        statementTwelve.officeEquip = arr3[0].officeEquip
        statementTwelve.opProfit = arr3[0].opProfit
        statementTwelve.opm = arr3[0].opm
        
        // console.log(statementTwelve)
        // console.log(arr3)
        
        statementNine[0].show(statementNine[0])        // adding show function at the end of 3A     
        
        
    } else if(scenario3.issue3.value === "3B"){
        console.log(scenario3.issue3.value)
        
        console.log(statementTen[0])

        let decrease = statementTen[0].freight *.10

        statementTen[0].freight = statementTen[0].freight -decrease

        console.log(statementTen[0])

        arr3.push(statementTen[0])

        statementTwelve.revenue = arr3[0].revenue
        statementTwelve.cogs = arr3[0].cogs
        statementTwelve.rawMat = arr3[0].rawMat
        statementTwelve.freight = arr3[0].freight
        statementTwelve.factoryLabor = arr3[0].factoryLabor
        statementTwelve.storage = arr3[0].storage
        statementTwelve.grossProfit = arr3[0].grossProfit
        statementTwelve.otherOpCosts = arr3[0].otherOpCosts
        statementTwelve.indirectLabor = arr3[0].indirectLabor
        statementTwelve.legal = arr3[0].legal
        statementTwelve.officeEquip = arr3[0].officeEquip
        statementTwelve.opProfit = arr3[0].opProfit
        statementTwelve.opm = arr3[0].opm
    
        statementTen[0].show(statementTen[0])

        console.log(statementTwelve)

    } else if(scenario3.issue3.value === "3C"){
        console.log(scenario3.issue3.value)

        console.log(statementEleven[0])

        let decrease = statementEleven[0].freight *.05

        statementEleven[0].freight = statementEleven[0].freight - decrease

        console.log(statementEleven[0])
        console.log(statementEleven[0].indirectLabor)

        let increase = statementEleven[0].indirectLabor *.10

        statementEleven[0].indirectLabor = statementEleven[0].indirectLabor + increase

        console.log(statementEleven[0].indirectLabor)

        arr3.push(statementEleven[0])

        statementTwelve.revenue = arr3[0].revenue
        statementTwelve.cogs = arr3[0].cogs
        statementTwelve.rawMat = arr3[0].rawMat
        statementTwelve.freight = arr3[0].freight
        statementTwelve.factoryLabor = arr3[0].factoryLabor
        statementTwelve.storage = arr3[0].storage
        statementTwelve.grossProfit = arr3[0].grossProfit
        statementTwelve.otherOpCosts = arr3[0].otherOpCosts
        statementTwelve.indirectLabor = arr3[0].indirectLabor
        statementTwelve.legal = arr3[0].legal
        statementTwelve.officeEquip = arr3[0].officeEquip
        statementTwelve.opProfit = arr3[0].opProfit
        statementTwelve.opm = arr3[0].opm

        console.log(statementTwelve)

        statementEleven[0].show(statementEleven[0])

    }

    // FINISH COPYING FROM SCENARIO 2


})

//??PUSH SCENARIO RESULTS TO NEW ARRAY AND REPEAT BETWEEN SCENARIO 2 & 3

clear3.addEventListener("click", ()=>{
    statementEight.show(statementEight)
    arr3 = arr2
})

next3.addEventListener("click", (e)=>{
    e.preventDefault()
    statementTwelve.show(statementTwelve)
    console.log("next3 works")
    //add an event to reveal the next scenario
})

scenario4.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    if(scenario4.issue4.value === "4A"){
        console.log(scenario4.issue4.value)
        console.log(statementSixteen)

    let decrease = statementThirteen[0].factoryLabor *.10

    statementThirteen[0].factoryLabor = statementThirteen[0].factoryLabor - decrease

    let increase = statementThirteen[0].indirectLabor * .05

    statementThirteen[0].indirectLabor = statementThirteen[0].indirectLabor + increase

    arr4.push(statementThirteen[0])
    console.log(arr4[0])
    console.log(arr4)
    console.log(statementSixteen)
    statementSixteen.revenue = arr4[0].revenue
    statementSixteen.cogs = arr4[0].cogs
    statementSixteen.rawMat = arr4[0].rawMat
    statementSixteen.freight = arr4[0].freight
    statementSixteen.factoryLabor = arr4[0].factoryLabor
    statementSixteen.storage = arr4[0].storage
    statementSixteen.grossProfit = arr4[0].grossProfit
    statementSixteen.otherOpCosts = arr4[0].otherOpCosts
    statementSixteen.indirectLabor = arr4[0].indirectLabor
    statementSixteen.legal = arr4[0].legal
    statementSixteen.officeEquip = arr4[0].officeEquip
    statementSixteen.opProfit = arr4[0].opProfit
    statementSixteen.opm = arr4[0].opm

    console.log(statementSixteen)
    statementThirteen[0].show(statementThirteen[0])



    } else if (scenario4.issue4.value === "4B"){
        console.log(scenario4.issue4.value)

        let increase = statementFourteen[0].factoryLabor * .05
        
        statementFourteen[0].factoryLabor = statementFourteen[0].factoryLabor + increase

    arr4.push(statementFourteen[0])
    statementSixteen.revenue = arr4[0].revenue
    statementSixteen.cogs = arr4[0].cogs
    statementSixteen.rawMat = arr4[0].rawMat
    statementSixteen.freight = arr4[0].freight
    statementSixteen.factoryLabor = arr4[0].factoryLabor
    statementSixteen.storage = arr4[0].storage
    statementSixteen.grossProfit = arr4[0].grossProfit
    statementSixteen.otherOpCosts = arr4[0].otherOpCosts
    statementSixteen.indirectLabor = arr4[0].indirectLabor
    statementSixteen.legal = arr4[0].legal
    statementSixteen.officeEquip = arr4[0].officeEquip
    statementSixteen.opProfit = arr4[0].opProfit
    statementSixteen.opm = arr4[0].opm

    statementFourteen[0].show(statementFourteen[0])  
    
    console.log(statementSixteen)
    console.log(arr4)

    }else if (scenario4.issue4.value === "4C"){
        console.log(scenario4.issue4.value)

    let increase = statementFifteen[0].indirectLabor *.10

    statementFifteen[0].indirectLabor = statementFifteen[0].indirectLabor + increase

    let decrease = statementFifteen[0].factoryLabor * .10

    statementFifteen[0].factoryLabor = statementFifteen[0].factoryLabor - decrease

    arr4.push(statementFifteen[0])
    statementSixteen.revenue = arr4[0].revenue
    statementSixteen.cogs = arr4[0].cogs
    statementSixteen.rawMat = arr4[0].rawMat
    statementSixteen.freight = arr4[0].freight
    statementSixteen.factoryLabor = arr4[0].factoryLabor
    statementSixteen.storage = arr4[0].storage
    statementSixteen.grossProfit = arr4[0].grossProfit
    statementSixteen.otherOpCosts = arr4[0].otherOpCosts
    statementSixteen.indirectLabor = arr4[0].indirectLabor
    statementSixteen.legal = arr4[0].legal
    statementSixteen.officeEquip = arr4[0].officeEquip
    statementSixteen.opProfit = arr4[0].opProfit
    statementSixteen.opm = arr4[0].opm

    statementFifteen[0].show(statementFifteen[0])


    }
})

clear4.addEventListener("click", ()=>{
    statementTwelve.show(statementTwelve)
    arr4 = arr3
})

finish.addEventListener("click", (e)=>{
    e.preventDefault()
    statementSixteen.show(statementSixteen)
    console.log(statementSixteen)

    // console.log(statementThirteen[0])
    // console.log(statementSixteen)
    // console.log(arr4[0])
    // console.log(statementStart)

    if (statementSixteen.opm > statementStart.opm){
        console.log("you win!")
    } else {
        console.log("you lose!")
    }
})



//COMPLETE THE FINISH BUTTON 
//SHOW WIN STATE

//FIGURE OUT WHY MULTIPLE CLICKS OVERWRITES THE CORRECT DATA
//MAKE IT LOOK LIKE AN ACTUAL GAME (STYLING!!!!!!!)