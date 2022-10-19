import React from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';

import { TextField } from "@mui/material";
const CartPage=()=>{
return(
    <div>
{/* <AddShoppingCartIcon/> */}

 
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
          <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="UserName"
        variant="filled"
      />
    </Stack>
    </div>
  );
}



export default CartPage