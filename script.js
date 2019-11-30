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
    expensesKey = prompt( "Введите обязательную статью расходов в этом месяце" ),
    expensesValues = +prompt( "Во сколько обойдется?" );

appData.expenses[ expensesKey ] = expensesValues;

let estimate = `Бюджет на 1 день: ${((appData.moneyData - expensesValues)/30).toFixed(2) } руб.`;

alert( estimate );

/*
1 ) Сколько типов данных существует в JS?
Простые типы:
Числа
Строки
Логический
null
undefined
Symbol

Объекты:
Массивы
Функции
Регулярные выражения
Объект Даты
Ошибки
Объект


2 ) Как вывести информацию в консоль ?
Команой console.log("То что мы хотим вывести")

3 ) Какая функция операторов || и && ?
|| - условие для срабатывания правил, 'если одно из значений верно то...'
&& - добавление какого либа правила к уже существующему, 'выполни это и еще это' 
/ условие для срабатывания правил, 'если все значения верны то...'
    
*/