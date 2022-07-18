import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Upload from "../components/uploadPic/Upload";

function Portrates() {
  // const Input = styled("input")({
  //   display: "none",
  // });

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: purple[500],
  //     },
  //     secondary: {
  //       main: "#f44336",
  //     },
  //   },
  // });

  return (
    <>
      <h1>get your own portrate </h1>
      <div>
        <Upload />
        {/* <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={(e, v) => console.log(e.target.files[0])}
            />
            <Button variant="contained" component="span">
              Upload a Photo
            </Button>
          </label>
        </Stack> */}
        <button>choose background color</button>
        <button>choose text (optional)</button>
      </div>
      <div>pic</div>
      <button>add to cart</button>
    </>
  );
}

export default Portrates;
