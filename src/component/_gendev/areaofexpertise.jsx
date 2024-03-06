import { Stack, Typography } from "@mui/material";

import React from "react";

import imghtml from "@img/html-5.svg";
import imgcss from "@img/css.svg";
import imgphp from "@img/php.svg";

import imgnodejs from "@img/nodejs.svg";
import imgexpressjs from "@img/expressjs.svg";
import imgLaravel from "@img/laravel.svg";

import imgreact from "@img/react2.svg";
import imgjavascript from "@img/javascript.svg";
import imgmaterial from "@img/material-ui.svg";
import imgbootstrap5 from "@img/bootstrap5.svg";
import imgAws from "@img/aws.png";

import imgmysql from "@img/mysql.svg";
import imgmangodb from "@img/mangodb.svg";

import IconButton from "@mui/material/IconButton";

import UI from "@gh/ui";

export default function App(props) {
  return (
    <Stack position="relative" justifyContent={"center"} height={"100%"}>
      <Saoe />
      <Tstack />
    </Stack>
  );
}

function Saoe() {
  const size = 64;
  return (
    <Stack direction="column" justifyContent="space-between" alignItems="center" width={"100%"} mt={"60px"}>
      <Stack direction="row" justifyContent="space-evenly" width="100%">
        <IconButton>
          <Stack width={size} height={size} className="center">
            <img
              src={imgreact}
              alt=""
              style={{
                objectFit: "fill",
              }}
            />
          </Stack>
        </IconButton>

        <IconButton>
          <Stack width={size} height={size} className="center">
            <img
              src={imgLaravel}
              alt=""
              style={{
                objectFit: "fill",
              }}
            />
          </Stack>
        </IconButton>

        <IconButton>
          <Stack width={size} height={size} className="center">
            <img
              src={imgmaterial}
              alt=""
              style={{
                objectFit: "fill",
              }}
            />
          </Stack>
        </IconButton>
      </Stack>
    </Stack>
  );
}

function Tstack({ isPrinting = false }) {
  const data = [
    imghtml,
    imgcss,
    imgphp,
    imgnodejs,
    imgexpressjs,
    imgjavascript,
    imgbootstrap5,
    imgmysql,
    imgmangodb,
    imgAws,
  ];
  return (
    <UI.Col center position={"relative"} width="100%" mt={5}>
      <UI.Col
        center
        bgcolor="#ffa229"
        width={48}
        height={48}
        borderRadius="50%"
        className="center"
        top="-32px"
        position={"absolute"}
      >
        <Typography variant="h2" color="white">
          +
        </Typography>
      </UI.Col>

      <Stack className="center" py={2} borderRadius={"4px"} bgcolor="#1c4670">
        <UI.Row justifyContent="space-evenly" alignItems="center" flexWrap={"wrap"} width="100%">
          {data.map((d, ix) => (
            <UI.Col
              center
              key={ix}
              sx={{
                flexShrink: 0,
                bgcolor: "white",
                borderRadius: "50%",
                width: 64,
                height: 64,
                // p: 0.5,
                overflow: "hidden",
                m: "2px",
                border: "4px solid white",
              }}
            >
              <img
                src={d}
                alt=""
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </UI.Col>
          ))}
        </UI.Row>
      </Stack>
    </UI.Col>
  );
}
