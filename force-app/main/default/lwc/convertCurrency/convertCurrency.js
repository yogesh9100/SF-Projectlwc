import { LightningElement } from 'lwc';

export default class ConvertCurrency extends LightningElement {
    showOutput = false;
    toCurrency = "";
    convertedValue = "";
    enteredamount = "";
    fromCurrency ="";
    currencyOptions = [];

    connectedCallback() {
        this.fetchSymbols();
    }
    ChangeHandler(event){
        let { name, value } = event.target;
        if(name === "amount") this.enteredamount = value;
        if(name === "amount") this.fromCurrency = value;
        if(name === "tocurr") this.toCurrency = value;

    }

    clickHandler() {}

    async fetchSymbols() {
        let endpoint = 'https://api.frankfurter.app';
        try {
            let response = await fetch(endpoint); // Use await here to wait for the response
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
    
            // Process the data returned from the API
            let options = [];
            for (let symbol in data) {
                options = [...options, { label: symbol, value: symbol }];
            }
            this.currencyOptions = [...options];
        } catch (error) {
            console.log(error);
        }
    }
}