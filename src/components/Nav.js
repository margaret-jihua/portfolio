import React from 'react'

export default function Nav(props) {
    return (
        <nav className="bar d-flex flex-column">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
        // <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <Link class="navbar-brand" to='/'>Home</Link>

        //     <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        //         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#about">About</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#projects">Projects</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}