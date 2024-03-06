import { Stack, Typography, Box, Button, Grid } from "@mui/material";

import React from "react";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import UI from "@gh/ui";
import { datas } from "./data/recent";

export default function CRecentProejct({ isPrinting = false, onScroll }) {
  return (
    <UI.Row
      onScroll={onScroll}
      center
      flexWrap="wrap"
      width="100%"
      overflow={"auto"}
      height="100%"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      alignItems="flex-start"
      justifyContent="flex-start"
      alignContent={{ xs: "flex-start", md: "center" }}
    >
      {datas.map((d, ix) => (
        <Stack key={ix} width={{ xs: "100%", md: "calc(50% - 16px)" }} flexShrink={0} my={1} mx={{ xs: 0, md: 1 }}>
          <Card
            year={d.year}
            title={d.title}
            subtitle={d.subtitle}
            sector={d.sector}
            stacks={d.stacks}
            modules={d.modules}
            link={d.link}
          />
        </Stack>
      ))}
    </UI.Row>
  );
}

function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        width="100%"
        maxWidth="300px"
        onClick={handleOpen}
      >
        <Typography variant="subtitle1" textAlign="left" color={"white"}>
          <Typography
            variant="subtitle1"
            textAlign="left"
            color={"white"}
            component="span"
            sx={{
              backgroundColor: "#1c4670",
              p: "2px",
              mr: "4px",
            }}
          >
            {props.year}
          </Typography>
          {props.title}
        </Typography>

        <Typography variant="caption" color={"white"} sx={{ fontWeight: 100 }}>
          {props.subtitle}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <Typography variant="caption" color="#fde89a">
            Read More
          </Typography>
          <Typography variant="caption" color="#fde89a">
            {/* Fullstack Dev. */}
          </Typography>
        </Stack>
      </Stack>

      <Box width="100vw" position="absolute">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          s
        >
          <Fade in={open}>
            <Box
              width="100vw"
              className="center"
              height="100vh"
              sx={{
                backdropFilter: "blur(5px)",
              }}
            >
              <Stack
                direction="column"
                spacing={2}
                width={{ xs: "270px", md: "50vw" }}
                sx={{
                  position: "absolute",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Box>
                  <Typography variant="p" fontWeight={"bold"}>
                    {props.title}
                  </Typography>
                  <Typography variant="body2">{props.subtitle}</Typography>
                  <Typography variant="caption" component="p" className="f-blue">
                    {props.sector}
                  </Typography>
                  <Stack width="100%" alignItems="flex-end">
                    {props.link && props.link != "#" && (
                      <Button
                        target="_blank"
                        rel="noreferrer"
                        href={props.link}
                        sx={{
                          color: "#ffa229",
                        }}
                      >
                        Visit Site
                      </Button>
                    )}
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="overline" textAlign="left" color="#ffa229">
                    Technology Stacks
                  </Typography>
                  <Typography variant="caption">{props.stacks}</Typography>
                </Box>

                <Box>
                  <Typography variant="overline" textAlign="left" color="#ffa229">
                    Core Modules
                  </Typography>
                  <Typography variant="caption">{props.modules}</Typography>
                </Box>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    bgcolor: "#1c4670",
                  }}
                >
                  Close
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
}
