


const NavBar = () => {
    return (
        <nav className="navbar bg-primary mb-4">
            <div className="container-fluid">
                <a className="navbar-brand text-light">Home</a>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-secondary" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;