
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist</p>
            <Link to='/'><p>Click here to go back to the Warehouses Page</p></Link>
        </div>
    )
}