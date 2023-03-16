import { Box, Stack, Typography } from "@mui/material";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });

const AudioGearSection = () => {
  return (
    <Stack direction="row" spacing={20} alignItems="center">
      <Box>
        <Typography
          component="h2"
          sx={{
            textTransform: "uppercase",
            fontSize: "40px",
            fontWeight: "bold",
            lineHeight: "44px",
            letterSpacing: "1.43px",
            fontFamily: manrope.style,
            marginBottom: "32px",
          }}
        >
          Bringing you the{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "40px",
              color: "#D87D4A",
              fontFamily: manrope.style,
            }}
          >
            best{" "}
          </Typography>
          audio gear
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "15px",
            lineHeight: "25px",
            fontFamily: manrope.style,
            fontWeight: 500,
          }}
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </Box>
      <Box>
        <Image
          src="/photos/shared/desktop/image-best-gear.jpg"
          alt="Man"
          width="540"
          height="588"
          style={{ borderRadius: "5px" }}
        />
      </Box>
    </Stack>
  );
};

export default AudioGearSection;
