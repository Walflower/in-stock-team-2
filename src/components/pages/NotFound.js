
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div>
            <h1>Oops! The page you are looking for does not exist</h1>
            <p>Here are some helpful links</p>
            <Link to='/'>Click here to go back to the Warehouses Page</Link>
        </div>
    )
}