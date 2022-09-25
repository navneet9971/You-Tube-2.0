import { Stack } from "@mui/material";
import { Link } from "react-router-dom";


import { logo } from "../utils/constants";
import { SearchBar } from "./";


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} /> 
      <span style={{fontFamily: "fantasy" ,fontSize: "27px", color: "red", inlineSize: "48px" }}>YOU
      </span>
      <span style={{fontFamily: "fantasy" , fontSize: "27px", color: "aqua", inlineSize: "60px" }}>TUBE
      </span>
      <span style={{fontFamily: "fantasy" ,fontSize: "27px", color: "white" }}>2.0
      </span>
      
      

    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;