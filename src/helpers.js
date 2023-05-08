// Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
};
//generate random color
const generaterRandomColr = () => {
    const existingBudgetLengt = fetchData("budgets")?.lengt ?? 0;
    return `${existingBudgetLengt * 34} 65% 50%`
}
//create budget 
export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount //plus konvertuje string u broj
        color: generaterRandomColr()
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets",
        JSON.stringify([...existingBudgets, newItem])
    )
}
//delete item
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}