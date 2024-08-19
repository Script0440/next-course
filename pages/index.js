import Head from "next/head";
import A from "../components/A";
import MainContainer from "../components/MainContainer";
function index() {
  return (
    <MainContainer keywords={"main page"}>
      <h1>Главная страциа</h1>
    </MainContainer>
  );
}

export default index;
