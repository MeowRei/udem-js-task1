let money = +prompt( "Ваш бюджет на месяц?" ),
    time = prompt( "Введите дату в формате YYYY-MM-DD" ),
    appData = {
        moneyData: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    },
    expensesKey1 = prompt( "Введите обязательную статью расходов в этом месяце" ),
    expensesValues1 = +prompt( "Во сколько обойдется?" ),
    expensesKey2 = prompt( "Введите обязательную статью расходов в этом месяце" ),
    expensesValues2 = +prompt( "Во сколько обойдется?" );

appData.expenses[ expensesKey1 ] = expensesValues1;
appData.expenses[ expensesKey2 ] = expensesValues2;

let estimate = `Бюджет на 1 день: ${(appData.moneyData/30).toFixed(2) } руб.`;

alert( estimate );