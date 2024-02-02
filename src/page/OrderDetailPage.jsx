import React from 'react'
import { Box ,Grid} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LeftSider from '../components/LeftSider/LeftSider';
import NavBar from '../common/NavBar/NavBar';
import OrderDetail from './OrderDetail';

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const OrderDetailPage = () => {

    const breadcrumbs = [
        // <Link
        //   underline="hover"
        //   key="1"
        //   color="inherit"
        //   href="/"
        //   onClick={handleClick}
        //   sx={{
        //     textDecoration:"",
        //   }}
        // >
        //   MUI
        // </Link>,
    
        <Typography key="3" color="blue">
          Shipment
        </Typography>,
        <Typography key="3" color="blue">
          New Order
        </Typography>,
        <Typography key="3" color="blue">
          Order No. 240254847
        </Typography>,
      ];
    
  return (
<>
    <NavBar />

      <Grid container>
        <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} sx={{}}>
          <LeftSider />
        </Grid>
        <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.5} sx={{}}>
          <OrderDetail/>
        </Grid>
      </Grid>
</>
//     <div>
//     <Box
//       sx={{
//         ml: 1,
//         mt: 3,
//       }}
//     >
//       <Breadcrumbs
//         separator={<NavigateNextIcon fontSize="small" />}
//         aria-label="breadcrumb"
//       >
//         {breadcrumbs}
//       </Breadcrumbs>
//     </Box>

//     <Box sx={{
//       m:2
//     }}>

//      umair
//     </Box>
//   </div>
  )
}

export default OrderDetailPage