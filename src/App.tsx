import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";

const App = () => {
  return (
    <>
      <Box
        width={"1200px"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="text-3xl font-bold text-center">Get Dog Pictures</h1>
        <Card>
          <CardMedia
            component={"img"}
            height={50}
            image="https://dog.ceo/api/breeds/image/random"
            alt="dog img"
          ></CardMedia>
          <CardContent>
            <Typography variant="h5">Dog Pictures</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Refresh</Button>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default App;
