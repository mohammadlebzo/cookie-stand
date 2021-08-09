'use strict'
let purchCookPerH = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

let Seattle = {
    minCustPerH: 23,
    maxCustPerH: 65,
    avgCookiePerSale:6.3,

    randCustPerH: function()
    {
        let min = Math.ceil(this.minCustPerH);
        let max = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < purchCookPerH.length; i++)
        {
            if(i == (purchCookPerH.length - 1))
            {
                this.salesOutput[i] = `${purchCookPerH[i]} ${sumOfSales} cookies`
            }else{
                let sales = Math.ceil(this.randCustPerH() * this.avgCookiePerSale);
            // console.log(`sales ${sales}`);
            this.salesOutput[i] = `${purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
            // console.log(sumOfSales);
            }
        }
        this.messageTotal = `Total: ${sumOfSales} cookies`
        return this.salesOutput
    },
    // printLogSalesPerH: function()
    // {
    //     console.log('Seattle');
    //     for(let i = 0; i < this.salesOutput.length; i++)
    //     {
    //         console.log(this.salesOutput[i]);
    //     }
    //     console.log(Seattle.salesPerH()[1]);
    // },
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
        divEl.appendChild(ulEl);
    },
    
};
// Seattle.salesPerH();
// Seattle.printLogSalesPerH();


let Tokyo = {
    minCustPerH: 3,
    maxCustPerH: 24,
    avgCookiePerSale:1.2,

    randCustPerH: function()
    {
        let min = Math.ceil(this.minCustPerH);
        let max = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < purchCookPerH.length; i++)
        {
            if(i == (purchCookPerH.length - 1))
            {
                this.salesOutput[i] = `${purchCookPerH[i]} ${sumOfSales} cookies`
            }else{
                let sales = Math.ceil(this.randCustPerH() * this.avgCookiePerSale);
            // console.log(`sales ${sales}`);
            this.salesOutput[i] = `${purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
            // console.log(sumOfSales);
            }
        }
        this.messageTotal = `Total: ${sumOfSales} cookies`
        return this.salesOutput
    },
    // printLogSalesPerH: function()
    // {
    //     console.log('Tokyo');
    //     for(let i = 0; i < this.salesOutput.length; i++)
    //     {
    //         console.log(this.salesOutput[i]);
    //     }
    //     console.log(Seattle.salesPerH()[1]);
    // },
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
        divEl.appendChild(ulEl);
    },
};
// Tokyo.salesPerH();
// Tokyo.printLogSalesPerH();

let Dubai = {
    minCustPerH: 11,
    maxCustPerH: 38,
    avgCookiePerSale:3.7,

    randCustPerH: function()
    {
        let min = Math.ceil(this.minCustPerH);
        let max = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < purchCookPerH.length; i++)
        {
            if(i == (purchCookPerH.length - 1))
            {
                this.salesOutput[i] = `${purchCookPerH[i]} ${sumOfSales} cookies`
            }else{
                let sales = Math.ceil(this.randCustPerH() * this.avgCookiePerSale);
            // console.log(`sales ${sales}`);
            this.salesOutput[i] = `${purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
            // console.log(sumOfSales);
            }
        }
        this.messageTotal = `Total: ${sumOfSales} cookies`
        return this.salesOutput
    },
    // printLogSalesPerH: function()
    // {
    //     console.log('Dubai');
    //     for(let i = 0; i < this.salesOutput.length; i++)
    //     {
    //         console.log(this.salesOutput[i]);
    //     }
    //     console.log(Seattle.salesPerH()[1]);
    // },
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
        divEl.appendChild(ulEl);
    },
};
// Dubai.salesPerH();
// Dubai.printLogSalesPerH();

let Paris = {
    minCustPerH: 20,
    maxCustPerH: 38,
    avgCookiePerSale:2.3,

    randCustPerH: function()
    {
        let min = Math.ceil(this.minCustPerH);
        let max = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < purchCookPerH.length; i++)
        {
            if(i == (purchCookPerH.length - 1))
            {
                this.salesOutput[i] = `${purchCookPerH[i]} ${sumOfSales} cookies`
            }else{
                let sales = Math.ceil(this.randCustPerH() * this.avgCookiePerSale);
            // console.log(`sales ${sales}`);
            this.salesOutput[i] = `${purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
            // console.log(sumOfSales);
            }
        }
        this.messageTotal = `Total: ${sumOfSales} cookies`
        return this.salesOutput
    },
    // printLogSalesPerH: function()
    // {
    //     console.log('Paris');
    //     for(let i = 0; i < this.salesOutput.length; i++)
    //     {
    //         console.log(this.salesOutput[i]);
    //     }
    //     console.log(Seattle.salesPerH()[1]);
    // },
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
        divEl.appendChild(ulEl);
    },
};
// Paris.salesPerH();
// Paris.printLogSalesPerH();

let Lima = {
    minCustPerH: 2,
    maxCustPerH: 16,
    avgCookiePerSale:4.6,

    randCustPerH: function()
    {
        let min = Math.ceil(this.minCustPerH);
        let max = Math.floor(this.maxCustPerH);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    salesOutput:[],
    salesPerH: function()
    {
        let sumOfSales = 0;
        for(let i = 0; i < purchCookPerH.length; i++)
        {
            if(i == (purchCookPerH.length - 1))
            {
                this.salesOutput[i] = `${purchCookPerH[i]} ${sumOfSales} cookies`
            }else{
                let sales = Math.ceil(this.randCustPerH() * this.avgCookiePerSale);
            // console.log(`sales ${sales}`);
            this.salesOutput[i] = `${purchCookPerH[i]} ${sales} cookies`;
            sumOfSales += sales;
            // console.log(sumOfSales);
            }
        }
        this.messageTotal = `Total: ${sumOfSales} cookies`
        return this.salesOutput
    },
    // printLogSalesPerH: function()
    // {
    //     console.log('Lima');
    //     for(let i = 0; i < this.salesOutput.length; i++)
    //     {
    //         console.log(this.salesOutput[i]);
    //     }
    //     console.log(Seattle.salesPerH()[1]);
    // },
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
        divEl.appendChild(ulEl);
    },
}   
// Lima.salesPerH();
// Lima.printLogSalesPerH();

Seattle.output();
Tokyo.output();
Dubai.output();
Paris.output();
Lima.output();
