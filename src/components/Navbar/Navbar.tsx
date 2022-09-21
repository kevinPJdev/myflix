import React, {useState} from 'react'
import { BsBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

type Props = {}

const Navbar = (props: Props) => {

  const [navBg, setNavBg] = useState<boolean>(false);

  //Change the navbar bg color if user scrolls
  window.addEventListener("scroll", () => {
    if(window.scrollY >= 80) setNavBg(true);
    else setNavBg(false);
  });

  return (  
      <nav className= {navBg? "bg-transparent fixed m-auto w-full overflow-hidden py-2 flex align-center": "bg-black fixed m-auto w-full overflow-hidden py-2 flex align-center"}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="MyFlix_logo"
          className="h-8 w-18 mx-12"
        />

        <aside className=''>
          <BsBellFill className=""/>
          <BiSearch />
        </aside>
      </nav>
  )
}

export default Navbar