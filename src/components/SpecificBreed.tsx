import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

const SpecificBreed = () => {
  const [selectedBreed, setSelectedBreed] = React.useState("");
  const [breeds, setBreeds] = React.useState<string[]>([]);

  const handleBreedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedBreed(event.target.value as string);
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
    </Box>
  );
};

export default SpecificBreed;
