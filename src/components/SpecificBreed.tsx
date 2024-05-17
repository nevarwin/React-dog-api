import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Spinner from "./Spinner";

const SpecificBreed = () => {
  const [selectedBreed, setSelectedBreed] = React.useState("");
  const [breeds, setBreeds] = React.useState<string[]>([]);
  const [dogImage, setDogImage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleBreedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedBreed(event.target.value as string);
  };

  const refreshDogImage = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random`
      );
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.log("Error fetching dog image", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`, {
        method: "GET",
      });
      const data = await response.json();
      setBreeds(Object.keys(data.message));
      console.log(data.message);
    };
    fetchBreeds();
  }, []);

  React.useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${selectedBreed}/images/random`
        );
        const data = await response.json();
        console.log(data.state);
        setDogImage(data.message);
      } catch (error) {
        console.log("Error fetching dog image", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDogImage();
  }, [selectedBreed]);

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
        Specific Dog Pictures
      </Typography>
      <Box sx={{ width: 250 }}>
        <TextField
          style={{ marginBottom: "16px" }}
          select
          fullWidth
          label="Select dog breed"
          value={selectedBreed}
          onChange={handleBreedChange}
        >
          {breeds.map((breed) => (
            <MenuItem
              key={breed}
              value={breed}
              sx={{
                backgroundColor: "white", // Set the background color of the menu
                color: "black",
              }}
            />
          ))}
        </TextField>
      </Box>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
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
      )}
    </Box>
  );
};

export default SpecificBreed;
