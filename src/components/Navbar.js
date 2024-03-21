import { Link } from "react-router-dom"
const Navbar =()=>{
    return (
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/careers">Careers</Link>
        </div>
    )
}
export default Navbar;