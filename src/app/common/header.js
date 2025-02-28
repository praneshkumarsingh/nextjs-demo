import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="custom-navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand py-0" href="/">
              <Image src="/logo.png" width={110} height={80} alt="Elile Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    Why Elile
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/service-details">
                        Data Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/service-details">
                        Monitoring & Alerting
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/service-details">
                        Diagnostics & Remediation
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/service-details">
                        Performance Optimization
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" href="#">
                    Domains
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" href="#">
                    Our Expertise
                  </Link>
                </li>
                {/* <li className="nav-item pe-0">
                  <Link className="nav-link" aria-disabled="true" href="#">
                    Our Team
                  </Link>
                </li> */}
              </ul>
              <div className="d-flex">
                <Link
                  href="/contact"
                  className="default-btn bg-white text-green"
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
