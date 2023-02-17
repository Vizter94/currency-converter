{
    const calculateResultRest = (value, currency) => {

        switch (currency) {
            case "EUR":
                return (value / 4.71).toFixed(2) + " EUR";

            case "USD":
                return (value / 4.37).toFixed(2) + " USD";

            case "GBP":
                return (value / 5.37).toFixed(2) + " GBP";

            case "CHF":
                return (value / 4.75).toFixed(2) + " CHF";

            case "NOK":
                return (value / 0.44).toFixed(2) + " NOK";

        }
    };

    const calculateResultPLN = (valueZloty, currencyZloty) => {

        switch (currencyZloty) {
            case "EUR":
                return (valueZloty * 4.71).toFixed(2) + " ZŁ";

            case "USD":
                return (valueZloty * 4.37).toFixed(2) + " ZŁ";

            case "GBP":
                return (valueZloty * 5.37).toFixed(2) + " ZŁ";

            case "CHF":
                return (valueZloty * 4.75).toFixed(2) + " ZŁ";

            case "NOK":
                return (valueZloty * 0.44).toFixed(2) + " ZŁ";

        }
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", () => {

            const valueElement = document.querySelector(".js-value");
            const currencyElement = document.querySelector(".js-currency");
            const resultElement = document.querySelector(".js-result");
            const resultZlotyElement = document.querySelector(".js-resultZloty");
            const currencyZlotyElement = document.querySelector(".js-currencyZloty");
            const valueZlotyElement = document.querySelector(".js-valueZloty");

            const resultRest = calculateResultRest(valueElement.value, currencyElement.value);
            const resultPLN = calculateResultPLN(valueZlotyElement.value, currencyZlotyElement.value);

            resultElement.innerHTML = resultRest;
            resultZlotyElement.innerHTML = resultPLN;
        });
    };
    const changeBackground = () => {
        const buttonElement = document.querySelector(".js-buttonBackground");
        const bodyElement = document.querySelector(".js-body");

        buttonElement.addEventListener("click", () => {
            bodyElement.classList.toggle("theme");
            [...document.querySelectorAll('.js-fieldset')].forEach(fieldsetElement => {
                fieldsetElement.classList.contains("form__fieldset--background") ? fieldsetElement.classList.remove("form__fieldset--background") : fieldsetElement.classList.add("form__fieldset--background");
            })

        });
    };
    init();
    changeBackground();

}    
