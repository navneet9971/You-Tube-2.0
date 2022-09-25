import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";



import { logo } from "../utils/constants";
import { SearchBar } from "./";


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} /> 
      
<Box>
  <Typography variant="h5" fontWeight= "bold" display='flex' sx={{ color: 'red' }}>
    You<span style= {{ color: "aqua"  }}>Tube</span><span style= {{ color: 'white',}}>2.0</span>
  </Typography>
</Box>
      
      

    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;