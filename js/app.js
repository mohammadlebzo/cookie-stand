'use strict'
let purchCookPerH = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Daily Location Total:'];
let stores = [];
let totalPerH_Stores = [];

let output = document.getElementById('output');
let tableEl = document.createElement('table');
output.appendChild(tableEl);
let formEl = document.getElementById('storeForm')
formEl.addEventListener('submit', addStore);

////Constructor::::
function StoresLocation(location, minCustPerH, maxCustPerH, avgCookiePerSale)
{
    this.location = location;
    this.minCustPerH = minCustPerH;
    this.maxCustPerH = maxCustPerH;
    this.avgCookiePerSale = avgCookiePerSale;
    this.salesOutput = [];
    stores.push(this);
}
////Used to select a random number of customers::::
StoresLocation.prototype.randCustPerH = function()
{
    let min = Math.ceil(this.minCustPerH);
    let max = Math.floor(this.maxCustPerH);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
////Used to fill the store info about how many cookies were sold / hour / store::::
StoresLocation.prototype.salesPerH = function()
{
    let sumOfSales = 0;
        for(let i = 0; i < purchCookPerH.length; i++)
        {
            if(i == (purchCookPerH.length - 1))
            {
                this.salesOutput[i] = sumOfSales;
            }
            else
            {
            let sales = Math.ceil(this.randCustPerH() * this.avgCookiePerSale);
            this.salesOutput[i] = sales;
            sumOfSales += sales;
            }
        }
        
        this.messageTotal = `Total: ${sumOfSales} cookies`
        return this.salesOutput
}
////Used to calculate the total of sold cookies / hour for all stors:::: 
function calTotalPerH_Stores()
{
    for(let k = 0; k < stores[0].salesOutput.length; k++)
    {
        totalPerH_Stores[k] = 0;
    }
    for(let i = 0; i < stores.length; i++)
    {
        for(let j = 0; j < stores[0].salesOutput.length; j++)
        {
            totalPerH_Stores[j] += stores[i].salesOutput[j];
        }
        // for(let d = 0; d < totalPerH_Stores.length; d++)
        // {
        //     console.log(totalPerH_Stores[d]);
        // }
        
    }
    // console.log(totalPerH_Stores);
}

////Used to render the head of the table::::
function renderTableHead()
{
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    let thElEmpty = document.createElement('th');
    thElEmpty.textContent = "";
    trEl.appendChild(thElEmpty);
    for(let i = 0; i < purchCookPerH.length; i++)
    {
        let thEl = document.createElement('th');
        thEl.textContent = purchCookPerH[i];
        trEl.appendChild(thEl);
    }
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
}

////Used to render the body of the table::::
StoresLocation.prototype.renderTableBody = function()
{
    this.salesPerH();
    
    let tbodyEl = document.createElement('tbody');
    let trEl = document.createElement('tr');
    let tdElLocation = document.createElement('td');
    tdElLocation.textContent = this.location;
    trEl.appendChild(tdElLocation);
    for(let i = 0; i < this.salesOutput.length; i++)
    {
        let tdEl = document.createElement('td');
        tdEl.textContent = this.salesOutput[i];
        trEl.appendChild(tdEl);
    }
    tbodyEl.appendChild(trEl);
    tableEl.appendChild(tbodyEl);
}

////Used to render the footer of the table::::
function renderTableFooter()
{
    calTotalPerH_Stores();
    let tfootEl = document.createElement('tfoot');
    tfootEl.setAttribute("id", "foot");
    let trEl = document.createElement('tr');
    let tdElTotal = document.createElement('td');
    tdElTotal.textContent = "Total";
    trEl.appendChild(tdElTotal);
    for(let i = 0; i < purchCookPerH.length; i++)
    {
        let tdEl = document.createElement('td');
        tdEl.textContent = totalPerH_Stores[i];
        trEl.appendChild(tdEl);
    }
    tfootEl.appendChild(trEl);
    tableEl.appendChild(tfootEl);
}

function deletefootChild() {
    let tfootEl = document.getElementById('foot');
    
    // let child = tfootEl.lastElementChild; 
    // while (child) {
    //     tfootEl.removeChild(child);
    //     child = tfootEl.lastElementChild;
    // }
    tfootEl.remove();
}

////Used to render the entier table::::
function render()
{
    renderTableHead();
    for(let i = 0; i < stores.length; i++)
    {
        stores[i].renderTableBody();
    }
    renderTableFooter();
}

function addStore(event)
{
    event.preventDefault();
    let locarion = event.target.location.value;
    let minCust = event.target.minCust.value;
    let maxCust = event.target.maxCust.value;
    let avg = event.target.avg.value;

    let newStore = new StoresLocation(locarion, minCust, maxCust, avg);
    newStore.renderTableBody();
    deletefootChild();
    renderTableFooter();
    document.getElementById("storeForm").reset();
    // console.log(stores);
}

////Making new objects and using the render() function::::
new StoresLocation('Seattle', 23, 65, 6.3);
new StoresLocation('Tokyo', 3, 24, 1.2);
new StoresLocation('Dubai', 11, 38, 3.7);
new StoresLocation('Paris', 20, 38, 2.3);
new StoresLocation('Lima', 2, 16, 4.6);
render();

