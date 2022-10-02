// import React from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

// we pass the card prop through and allow the graphql server to work it out

// const images = [
//   {
//     url: "https://res.cloudinary.com/dggvyhv27/image/upload/v1664494626/gloomhaven-user-app/numb_the_pain_mdkhsa.jpg",
//     title: "Numb the Pain",
//     width: "20%",
//     active: true,
//   },
//   {
//     url: "https://res.cloudinary.com/dggvyhv27/image/upload/v1664640380/gloomhaven-user-app/images_ro1mjz.jpg",
//     title: "Burgers",
//     width: "20%",
//     active: true,
//   },
//   {
//     url: "https://res.cloudinary.com/dggvyhv27/image/upload/v1664640365/gloomhaven-user-app/CVIUHZq_edipir.jpg",
//     title: "Camera",
//     width: "20%",
//     active: false,
//   },
// ];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 300,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function CardList({ cards }) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {cards.map((card) => (
        <ImageButton
          focusRipple
          key={card.title}
          // style={{
          //   width: card.width,
          // }}
        >
          <ImageSrc style={{ backgroundImage: `url(${card.image})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {card.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

// const CardList = () => {
//   if (!cards) {
//     return <h2>Building the Deck</h2>;
//   }
//   return (
//     <div>
//       <div className="flex-row justify-space-between my-4">
//         {cards &&
//           cards.map((card) => (
//             <div key={card._id}>
//               <h1>hello</h1>
//               <img src={card.image} alt={card.title} />
//               <h5>{card.title}</h5>
//             </div>
//           ))}
//       </div>
//     </div>

//   );
// };
// export default CardList;
