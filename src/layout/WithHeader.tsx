import Header from "./Header";
import { styled } from "@mui/material";

const WithHeader = (element) => {
  return (
    <PageContainer>
      <Header />
      {element}
    </PageContainer>
  );
};

const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export default WithHeader;
