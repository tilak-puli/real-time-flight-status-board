import Header from "./Header";

const WithHeader = (element) => {
  return (
    <div>
      <Header />
      <div>{element}</div>
    </div>
  );
};

export default WithHeader;
