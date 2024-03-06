import { Stack } from "@mui/material";

export default function App({ center, children, ...props }) {
  return (
    <Stack direction={"column"} alignItems={center ? "center" : ""} justifyContent={center ? "center" : ""} {...props}>
      {children}
    </Stack>
  );
}
