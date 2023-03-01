import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid"
import illustration from "../assets/illustration.jpg"
const Intro =()=>{
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your Money</span>
                </h1>
                <p>
                    Personal budgeting is the secret of financial freedom. Start your jorney today.
                </p>
                <Form method="post">
                    <input 
                    type="text" 
                    name="userName" 
                    required 
                    placeholder="What is yout name?" 
                    area-aria-label="Your Name" 
                    autoComplete="given-name"/>
                    <button type="submit" className="btn btn--dark"><span>Create Account</span><UserPlusIcon width={20} /></button>
                    
                </Form>
            </div>
            <img src={illustration} alt="Person with money" />
        </div>
    )
}
export default Intro;