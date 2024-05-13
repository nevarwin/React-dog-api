import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
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
      sx={{ maxHeight: "100vh", overflow: "auto" }}
      width={"1000px"}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className="text-3xl font-bold text-center">Get Dog Pictures</h1>
      <Card>
        <CardMedia component={"img"} image={dogImage} alt="dog img"></CardMedia>
        <CardContent>
          <Typography variant="h5">Dog Pictures</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => refreshDogImage()}>
            Refresh
          </Button>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default DogImage;
