import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const DogImage = () => {
  const [dogImage, setDogImage] = useState<string>("");

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    };
    fetchDogImage();
  }, []);

  const refreshDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImage(data.message);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Get Dog Pictures
      </Typography>
      <Box sx={{ maxWidth: 400, maxHeight: 400 }}>
        <Card sx={{ width: "100%", height: "100%", objectFit: "contain" }}>
          <CardMedia
            component="img"
            image={dogImage}
            alt="dog img"
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "100%",
              height: "100%",
            }}
          />
          <CardContent>
            <Typography variant="h5">Dog Pictures</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={refreshDogImage}>
              Refresh
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default DogImage;
