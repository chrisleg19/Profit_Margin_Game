//establishing global variables
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
let results = document.querySelector(".results")
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
const radio1A = document.querySelector("#issue1A")
const radio1B = document.querySelector("#issue2A")
const radio1C = document.querySelector("#issue3A")
const radio2A = document.querySelector("#issue2A")
const radio2B = document.querySelector("#issue2B")
const radio2C = document.querySelector("#issue2C")
const radio3A = document.querySelector("#issue3A")
const radio3B = document.querySelector("#issue3B")
const radio3C = document.querySelector("#issue3C")
const radio4A = document.querySelector("#issue4A")
const radio4B = document.querySelector("#issue4B")
const radio4C = document.querySelector("#issue4C")
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []
let resetBtn = document.querySelector("#resetBtn")
let q1 = document.querySelector("#q1")

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
    //function to execute Bold income statement math and display numbers
    show(statement){
        revenue.textContent = "$" + statement.revenue
        statement.cogs = statement.rawMat + statement.freight + statement.factoryLabor + statement.storage
        cogs.textContent = "$" + statement.cogs
        rawMat.textContent = "$" + statement.rawMat
        freight.textContent = "$" + statement.freight
        factoryLabor.textContent = "$" + statement.factoryLabor
        storage.textContent = "$" + statement.storage
        statement.grossProfit = statement.revenue - statement.cogs
        grossProfit.textContent = "$" + statement.grossProfit
        statement.otherOpCosts = statement.indirectLabor + statement.legal + statement.officeEquip
        otherOpCosts.textContent = "$" + statement.otherOpCosts
        indirectLabor.textContent = "$" + statement.indirectLabor
        legal.textContent = "$" + statement.legal
        officeEquip.textContent = "$" + statement.officeEquip  
        statement.opProfit = statement.grossProfit - statement.otherOpCosts
        opProfit.textContent = "$" + statement.opProfit
        statement.opm = (statement.opProfit / statement.revenue) *100
        opm.textContent = statement.opm.toFixed(2) + "%"
    }
    show2A(){
        revenue2.textContent = 100
    }
}

//starting class/object with figures given plus the first 3 outcome objects with figures given for each scenario

//statement at the beginning of the game
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
//statement for 1A
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
//statement for 1B
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
//statement for 1C
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
//Answer selected from scenario 1 is stored in this object after being pushed into arr1
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

//setting starting case for scenario 2.  Selection from scenario 1 is stored in arr1 so numbers can accumulate over to scenario 2

//statement for 2A
statementFive = arr1

//statement for 2B
statementSix = arr1

//statement for 2C
statementSeven = arr1

//Answer selected from scenario 2 is stored in this object after being pushed into arr2
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

//setting starting case for scenario 3.  Selection from scenario 2 is stored in arr2 so numbers can accumulate over to scenario 3

//statement for 3A
statementNine = arr2

//statement for 3A
statementTen = arr2

//statement for 3A
statementEleven = arr2

//Answer selected from scenario 3 is stored in this object after being pushed into arr3
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

//setting starting case for scenario 4.  Selection from scenario 3 is stored in arr3 so numbers can accumulate over to scenario 4

//statement for 4A
statementThirteen = arr3

//statement for 4A
statementFourteen = arr3

//statement for 4A
statementFifteen = arr3

//Answer selected from scenario 4 is stored in this object after being pushed into arr4
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

//displays the income statement at the beginning of the game
statementStart.show(statementStart)

//Scenario 1 SUBMIT button event listener with if statements based on the answer selected.  Each block pushes the answer chosen to an array then displays income statement based on decision made 
scenario1.addEventListener("submit", (e)=>{
    e.preventDefault()
        if (scenario1.issue1.value === "1A"){
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
            
            statementOne.show(statementOne)

            
        } else if(scenario1.issue1.value === "1B"){
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
            
            statementTwo.show(statementTwo)
            
        } else if (scenario1.issue1.value === "1C"){
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
            
            statementThree.show(statementThree)
        } 
    })

    //Clear button resets the display and the array carrying over results to the next scenario
    clear1.addEventListener("click", ()=>{
        statementStart.show(statementStart)
        arr1 = []
    })
    
    //Next button displays the object/array used to store the answer selected in scenario 1
    next1.addEventListener("click", ()=>{
        statementFour.show(statementFour)
        console.log(statementThree)
        console.log(statementFour)
    })

    //Scenario 2 SUBMIT button event listener with if statements based on the answer selected.  Each block pushes the answer chosen to an array then displays income statement based on decision made 
    scenario2.addEventListener("submit", (e)=>{
        e.preventDefault()
        if (scenario2.issue2.value === "2A"){
            // calculation applied to decision 
                
            console.log(statementFour)
            console.log(statementFive)  
           
            let increase = statementFive[0].rawMat * .20
            statementFive[0].rawMat = increase + statementFive[0].rawMat
            
            
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
            
            statementFive[0].show(statementFive[0])

            console.log(statementFour)
            console.log(statementFive)
            
        } else if(scenario2.issue2.value === "2B"){
            // calculation applied to decision 
            console.log(statementFour)
            console.log(statementSix)
            let decrease = statementSix[0].storage * .10
            statementSix[0].storage = statementSix[0].storage - decrease 
            
            arr2.push(statementSix[0])
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
            
            statementSix[0].show(statementSix[0])

        } else if (scenario2.issue2.value === "2C"){
            // calculation applied to decision
            let decrease = statementSeven[0].freight * .10
            statementSeven[0].freight = statementSeven[0].freight - decrease

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

            statementSeven[0].show(statementSeven[0])
        } 
    })
    
    clear2.addEventListener("click", ()=>{
        statementFour.show(statementFour)
        arr2 = arr1
        console.log(arr2)
        console.log(statementFour)
        console.log(statementFive)
    })
    
    next2.addEventListener("click", (e)=>{
        e.preventDefault()
        statementEight.show(statementEight)
    })

    scenario3.addEventListener("submit", (e)=>{
        e.preventDefault()
        if (scenario3.issue3.value === "3A"){
            let increase = statementNine[0].rawMat * .3
            statementNine[0].rawMat = increase + statementNine[0].rawMat
            let decrease = statementNine[0].freight *.75  
            statementNine[0].freight = statementNine[0].freight - decrease
    
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
            
            statementNine[0].show(statementNine[0])             
            
        } else if(scenario3.issue3.value === "3B"){
            let decrease = statementTen[0].freight *.10
            statementTen[0].freight = statementTen[0].freight -decrease
    
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
    
        } else if(scenario3.issue3.value === "3C"){
            let decrease = statementEleven[0].freight *.05
            statementEleven[0].freight = statementEleven[0].freight - decrease
            let increase = statementEleven[0].indirectLabor *.10
            statementEleven[0].indirectLabor = statementEleven[0].indirectLabor + increase
    
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
    
            statementEleven[0].show(statementEleven[0])
        }
    })

    clear3.addEventListener("click", ()=>{
        statementEight.show(statementEight)
        arr3 = arr2
    })
    
    next3.addEventListener("click", (e)=>{
        e.preventDefault()
        statementTwelve.show(statementTwelve)
    })

    scenario4.addEventListener("submit", (e)=>{
        e.preventDefault()
        if(scenario4.issue4.value === "4A"){    
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

        statementThirteen[0].show(statementThirteen[0])
    
        } else if (scenario4.issue4.value === "4B"){
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
    
        }else if (scenario4.issue4.value === "4C"){
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
        console.log(statementStart)
        console.log(statementFour)
        console.log(statementEight)
        console.log(statementTwelve)
        console.log(statementSixteen)
        
        //If statement to determine win/loss state
        if (statementSixteen.opm > statementStart.opm){
            // results.innerHTML = "<h2>Congratulations, your operating margin is higher! You will receive a $10,000 bonus.</h2>"
            alert("Congratulations, your operating margin is higher than 11.76%! You will receive a $10,000 bonus.")
            console.log("you win!")
            console.log(statementStart)
            console.log(statementFour)
            console.log(statementEight)
            console.log(statementTwelve)
            console.log(statementSixteen)
        } else {
            // results.innerHTML = "<h2>Sorry, due to poor performance the operating margin is lower than 11.76%, therefore your employment is hereby terminated.  Report to HR immediately.</h2>"
            alert("Sorry, due to poor performance the operating margin is lower than 11.76%, therefore your employment is hereby terminated.  Report to HR immediately.")
            console.log("you lose!")
            console.log(statementStart)
            console.log(statementFour)
            console.log(statementEight)
            console.log(statementTwelve)
            console.log(statementSixteen)
        }
    })


    resetBtn.addEventListener("click", ()=>{
        location.reload()
    })

    //TO DO: PUT A LOOP SOMEWHERE IN EACH ANSWER SO THE CALCULATION IS ONLY DONE ONCE.  CALCULATION CONTINUES TO EXECUTE AND ACCUMULATE RESULTS EVERY TIME YOU SELECT ANSWERS WITHIN SCENARIO 2, 3, & 4.

   
