import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
export default function OrderNavigation() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const orderNumber = "Order 32456ADC";
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Orders
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      <Typography textDecoration="underline">{orderNumber}</Typography>
    </Link>,
  ];
  return (
    <div className="shadow-lg">
      <div className="max-w-7xl mx-auto p-4">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <div className="flex items-center justify-between py-2">
          <h1 className="text-2xl font-bold">{orderNumber}</h1>
          <div>
            <Button
              variant="outlined"
              color="success"
              style={{
                borderRadius: 50,
                textTransform: "capitalize",
                marginRight: "1rem",
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ borderRadius: 50, textTransform: "capitalize" }}
            >
              Approve Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
