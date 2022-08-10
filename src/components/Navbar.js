import Globe from "../icons/globe.svg"

export default function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-primary shadow d-flex justify-content-around">
            <a href="#" className="text-decoration-none">
                <h2 className="text-light my-3"><img src={Globe} alt="Logo"/> my travel journal</h2>
            </a>
        </nav>
    )
}