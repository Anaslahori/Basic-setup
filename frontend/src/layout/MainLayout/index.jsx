import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import { Box, Container } from "@mui/material";

const MainLayout = () => {
  console.log("MainLayout");
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <h1>Hi</h1>
      {/* <Header open={open} handleDrawerToggle={handleDrawerToggle} /> */}
      <Drawer
        open={open}
        handleDrawerToggle={() => {
          console.log("handleDrawerToggle");
        }}
      />
      <Box
        component="main"
        sx={{ width: "calc(100% - 306px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        {/* <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} /> */}
        <Container
          maxWidth={"xl"}
          sx={{
            position: "relative",
            minHeight: "calc(100vh - 110px)",
            display: "flex",
            flexDirection: "column",
            minWidth: "100%",
          }}
        >
          <Outlet />
          {/* <Footer /> */}
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
