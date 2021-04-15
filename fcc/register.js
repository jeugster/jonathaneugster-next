function checkCashRegister(price, cash, cid) {
    var toChange = cash - price
    var response = {status: "", change: []}

    var cidTotal = cid.forEach(a,b => a+b)
    console.log(cidTotal)
    

    var currency = [
        ["PENNY", 1],
        ["NICKEL", 5],
        ["DIME", 10],
        ["QUARTER", 25],
        ["ONE", 100],
        ["FIVE", 500],
        ["TEN", 1000],
        ["TWENTY", 2000],
        ["ONE HUNDRED", 10000]
      ]      

    if (toChange > cidTotal) {
      response.status = "INSUFFICIENT_FUNDS"
      response.change = []
    } 
    
    else if (toChange == cidTotal) {
     response.status = "CLOSED"
     response.change = cid
    }

    else if (toChange < cidTotal) {
        response.status = "OPEN"
        response.change = [] //todo
    }

    return response
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])