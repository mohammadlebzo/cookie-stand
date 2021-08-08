'use strict'
let Seattle = {
    minCustPerH: 23,
    maxCustPerH: 65,
    avgCookiePerSale:6.3,

    randCustPerH: function()
    {
        this.minCustPerH = Math.ceil(this.minCustPerH);
        this.maxCustPerH = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (this.maxCustPerH - this.minCustPerH + 1) + this.minCustPerH);
    },

    purchCookPerH: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < this.purchCookPerH.length; i++)
        {
            let sales = Math.round(this.randCustPerH() * this.avgCookiePerSale);
            this.salesOutput[i] = `${this.purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
        }
        let messageTotal = `Total: ${sumOfSales} cookies`
        return [this.salesOutput, messageTotal]
    },
    printLogSalesPerH: function()
    {
        console.log('Seattle');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            console.log(this.salesOutput[i]);
        }
        console.log(Seattle.salesPerH()[1]);
    },
    output: function()
    {
        let location = 'Seattle:';
        this.salesPerH();
        let divEl = document.getElementById('output1');
        let h2El = document.createElement('h2');
        h2El.textContent = location;
        divEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            let liEl = document.createElement('li');
            liEl.textContent = this.salesOutput[i];
            ulEl.appendChild(liEl);
        }
        let liElTotal = document.createElement('li');
        liElTotal.textContent = this.salesPerH()[1];
        ulEl.appendChild(liElTotal);
        divEl.appendChild(ulEl);
    },
    
};
Seattle.salesPerH();
Seattle.printLogSalesPerH();


let Tokyo = {
    minCustPerH: 3,
    maxCustPerH: 24,
    avgCookiePerSale:1.2,

    randCustPerH: function()
    {
        this.minCustPerH = Math.ceil(this.minCustPerH);
        this.maxCustPerH = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (this.maxCustPerH - this.minCustPerH + 1) + this.minCustPerH);
    },

    purchCookPerH: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < this.purchCookPerH.length; i++)
        {
            let sales = Math.round(this.randCustPerH() * this.avgCookiePerSale);
            this.salesOutput[i] = `${this.purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
        }
        let messageTotal = `Total: ${sumOfSales} cookies`
        return [this.salesOutput, messageTotal]
    },
    printLogSalesPerH: function()
    {
        console.log('Tokyo');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            console.log(this.salesOutput[i]);
        }
        console.log(Seattle.salesPerH()[1]);
    },
    output: function()
    {
        let location = 'Tokyo:';
        this.salesPerH();
        let divEl = document.getElementById('output2');
        let h2El = document.createElement('h2');
        h2El.textContent = location;
        divEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            let liEl = document.createElement('li');
            liEl.textContent = this.salesOutput[i];
            ulEl.appendChild(liEl);
        }
        let liElTotal = document.createElement('li');
        liElTotal.textContent = this.salesPerH()[1];
        ulEl.appendChild(liElTotal);
        divEl.appendChild(ulEl);
    },
};
Tokyo.salesPerH();
Tokyo.printLogSalesPerH();

let Dubai = {
    minCustPerH: 11,
    maxCustPerH: 38,
    avgCookiePerSale:3.7,

    randCustPerH: function()
    {
        this.minCustPerH = Math.ceil(this.minCustPerH);
        this.maxCustPerH = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (this.maxCustPerH - this.minCustPerH + 1) + this.minCustPerH);
    },

    purchCookPerH: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < this.purchCookPerH.length; i++)
        {
            let sales = Math.round(this.randCustPerH() * this.avgCookiePerSale);
            this.salesOutput[i] = `${this.purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
        }
        let messageTotal = `Total: ${sumOfSales} cookies`
        return [this.salesOutput, messageTotal]
    },
    printLogSalesPerH: function()
    {
        console.log('Dubai');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            console.log(this.salesOutput[i]);
        }
        console.log(Seattle.salesPerH()[1]);
    },
    output: function()
    {
        let location = 'Dubai:';
        this.salesPerH();
        let divEl = document.getElementById('output3');
        let h2El = document.createElement('h2');
        h2El.textContent = location;
        divEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            let liEl = document.createElement('li');
            liEl.textContent = this.salesOutput[i];
            ulEl.appendChild(liEl);
        }
        let liElTotal = document.createElement('li');
        liElTotal.textContent = this.salesPerH()[1];
        ulEl.appendChild(liElTotal);
        divEl.appendChild(ulEl);
    },
};
Dubai.salesPerH();
Dubai.printLogSalesPerH();

let Paris = {
    minCustPerH: 20,
    maxCustPerH: 38,
    avgCookiePerSale:2.3,

    randCustPerH: function()
    {
        this.minCustPerH = Math.ceil(this.minCustPerH);
        this.maxCustPerH = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (this.maxCustPerH - this.minCustPerH + 1) + this.minCustPerH);
    },

    purchCookPerH: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < this.purchCookPerH.length; i++)
        {
            let sales = Math.round(this.randCustPerH() * this.avgCookiePerSale);
            this.salesOutput[i] = `${this.purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
        }
        let messageTotal = `Total: ${sumOfSales} cookies`
        return [this.salesOutput, messageTotal]
    },
    printLogSalesPerH: function()
    {
        console.log('Paris');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            console.log(this.salesOutput[i]);
        }
        console.log(Seattle.salesPerH()[1]);
    },
    output: function()
    {
        let location = 'Paris:';
        this.salesPerH();
        let divEl = document.getElementById('output4');
        let h2El = document.createElement('h2');
        h2El.textContent = location;
        divEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            let liEl = document.createElement('li');
            liEl.textContent = this.salesOutput[i];
            ulEl.appendChild(liEl);
        }
        let liElTotal = document.createElement('li');
        liElTotal.textContent = this.salesPerH()[1];
        ulEl.appendChild(liElTotal);
        divEl.appendChild(ulEl);
    },
};
Paris.salesPerH();
Paris.printLogSalesPerH();

let Lima = {
    minCustPerH: 2,
    maxCustPerH: 16,
    avgCookiePerSale:4.6,

    randCustPerH: function()
    {
        this.minCustPerH = Math.ceil(this.minCustPerH);
        this.maxCustPerH = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (this.maxCustPerH - this.minCustPerH + 1) + this.minCustPerH);
    },

    purchCookPerH: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < this.purchCookPerH.length; i++)
        {
            let sales = Math.round(this.randCustPerH() * this.avgCookiePerSale);
            this.salesOutput[i] = `${this.purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
        }
        let messageTotal = `Total: ${sumOfSales} cookies`
        return [this.salesOutput, messageTotal]
    },
    printLogSalesPerH: function()
    {
        console.log('lima');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            console.log(this.salesOutput[i]);
        }
        console.log(Seattle.salesPerH()[1]);
    },
    output: function()
    {
        let location = 'Lima:';
        this.salesPerH();
        let divEl = document.getElementById('output5');
        let h2El = document.createElement('h2');
        h2El.textContent = location;
        divEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        for(let i = 0; i < this.salesOutput.length; i++)
        {
            let liEl = document.createElement('li');
            liEl.textContent = this.salesOutput[i];
            ulEl.appendChild(liEl);
        }
        let liElTotal = document.createElement('li');
        liElTotal.textContent = this.salesPerH()[1];
        ulEl.appendChild(liElTotal);
        divEl.appendChild(ulEl);
    },
};
Lima.salesPerH();
Lima.printLogSalesPerH();

Seattle.output();
Tokyo.output();
Dubai.output();
Paris.output();
Lima.output();
