import { Container } from "@mui/material";
import Body from "../layout/Body";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/loader.json";

function LoaderAnimation() {
  return (
    <Body>
      <Container sx={{ py: 2, textAlign: "left" }}>
        <Lottie
          loop
          animationData={lottieJson}
          play
          speed={2}
          style={{ width: 500, height: 500 }}
        />
      </Container>
    </Body>
  );
}

export default LoaderAnimation;
