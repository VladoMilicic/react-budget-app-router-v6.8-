//helper functions

import { Outlet, useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../helpers";
import Intro from "../components/Intro"
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

//loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    const budgets = fetchData("budgets"); //ima li išta u lokalstorage-u key "budgets"

    return {userName, budgets}
}

//action
export async function dashboardAction({request}){
    const data = await request.formData()
    const {_action, ...values} = Object.fromEntries(data)
    if(_action==="newUser"){
    try{
    localStorage.setItem("userName", JSON.stringify(values.userName))
    return toast.success(`Welcome, ${values.userName}`)
}catch(e){
    throw new Error("There was a problem creating your account")
}}
if (_action ==="createBudget"){
    try {
        createBudget({
            name:values.newBudget,
            amount:values.newBudgetAmount,
        })
        return toast.success("Budget created")
    }
    catch(e){
        throw new Error("There was problem creating budget")
    }
}
}

const Dashboard = () => {
    const {userName, budgets} = useLoaderData()
    return (
        <>
            {userName ? (
            <div className="dashboard">
                <h1>Welcome back,  
                    <span className="accent">
                        {userName}
                    </span>
                </h1>
                <div className="grtid-sm">
                    {/* {budgets ? () :()} */}
                    <div className="grid-lg">
                        <div className="flex-lg">
                            <AddBudgetForm />
                        </div>
                    </div>
                </div>
            </div>
            ):<Intro />}
            <Outlet />
        </>
     );
}

export default Dashboard;