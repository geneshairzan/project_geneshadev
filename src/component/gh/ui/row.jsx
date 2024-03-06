import { Stack } from "@mui/material";

export default function App({ center = false, children, ...props }) {
  return (
    <Stack direction={"row"} alignItems={center ? "center" : ""} justifyContent={center ? "center" : ""} {...props}>
      {children}
    </Stack>
  );
}
