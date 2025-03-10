export default function Header() {
    return (
      <div className="bg-base-100 shadow-sm py-[10px] sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between pl-[6px]">
                
          {/* Navbar Start (Logo & Mobile Menu) */}
          <div className="flex items-center">
            <div className="dropdown lg:hidden border">
              <button tabIndex={0} className="btn btn-ghost ps-[0px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-10">
                <li><a>Home</a></li>
                <li>
                  <a onClick={() => document.getElementById("projek").scrollIntoView({ behavior: "smooth" })}>Project</a>
                  <ul className="p-2">
                    <li><a>UI/UX Design</a></li>
                    <li><a>Web Development</a></li>
                  </ul>
                </li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="text-xl font-bold">Irham Maula</a>
          </div>
  
          {/* Navbar Center (Desktop Menu) */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal justify-center border pl-[64px]">
              <li><a>Home</a></li>
              <li>
                <details>
                  <summary onClick={() => document.getElementById("projek").scrollIntoView({ behavior: "smooth" })}>Project</summary>
                  <ul className="p-2">
                    <li><a>UI/UX Design</a></li>
                    <li><a>Web Development</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Contact</a></li>
            </ul>
          </div>
  
          {/* Navbar End (Resume Button) */}
          <div className="">
            <a className="btn">Download My Resume</a>
          </div>
        </div>
      </div>
    );
  }
  