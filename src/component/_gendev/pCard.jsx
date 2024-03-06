import { Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function App({ data }) {
  const [active, setactive] = useState(0);
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        {data.map((d, ix) => (
          <Stack
            key={ix}
            width={"100%"}
            height="50px"
            border={"1px solid "}
            borderRadius="8px"
            onClick={() => setactive(ix)}
            bgcolor={ix == active && "#fde89a"}
            borderColor={ix == active ? "#1c4670" : "white"}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              color={ix == active ? "#1c4670" : "white"}
              fontWeight={ix == active ? "bold" : "normal"}
            >
              {d.s}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Typography variant={"caption"} color="white">
        <Typography color="#ffa229" component="span">
          {`${data[active].l} `}
        </Typography>
        {data[active].desc}
      </Typography>
    </>
  );
}
