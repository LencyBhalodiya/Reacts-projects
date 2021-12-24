import React, { useState } from "react";
import "./App.css";
import "./media.css";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Sections from "./Sections";
import Section2 from "./Section2";
import Section3 from "./Section3";
function App() {
  const [openNav, setOpenNav] = useState(false);
  const [Links, setLinks] = useState(false);

  return (
    <body className={`${openNav ? "nav-open" : ""}`}>
      <Navbar
        openNav={openNav}
        setOpenNav={setOpenNav}
        Links={Links}
        setLinks={setLinks}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Sections />
    </body>
  );
}

export default App;
