import { Link, Outlet } from "react-router-dom";

function Layout() {
    <div>
        <nav>
            <ul className="nav">
                <li>
                    <link to="./" className="nav-item">
                        Home
                    </link>
                </li>
                <li>
                    <link to="./About">
                        About
                    </link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout