
//Revenue variables:
let annualRev = 7200 
let annualRevUnits = 240
let monthRev = annualRev / 12
    console.log(`Monthly Revenue Goal: ${monthRev}`)
let monthRevUnits = annualRevUnits / 12
    console.log(`Units Sold to meet Monthly Revenue Goal: ${monthRevUnits}`)
//COGS variables:
let rawMatUnits = 25
let pricePerUnit = 30
let finGoodsInv = 5
let finGoodsCost = finGoodsInv * 10
    console.log(`Cost of Finished Goods OH: ${finGoodsCost}`)
let finGoodsValue = finGoodsInv * pricePerUnit
    console.log(`Value of FIG OH: ${finGoodsValue}`)
let rawMatLeadTime = 5
let eoq = 25
let rawMatPrice = 2
let rawMatDeliveryCost = 10
let rawMatCost = (eoq * rawMatPrice) + rawMatDeliveryCost
    console.log(`Cost of raw Material OH: ${rawMatCost}`)
let numOfOpSteps = 5
let costOfOpStep = 2
let numOfOpDays = 5
let costOfOpDay = numOfOpSteps * costOfOpStep
    console.log(`Cost of Operations each day: ${costOfOpDay}`)
let costOfOp = numOfOpDays * costOfOpDay
    console.log(`Cost of Operations for 1 unit: ${costOfOp}`)
let cogs = null
