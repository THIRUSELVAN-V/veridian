import React from "react";
import Header from "../components/Header/header";
import Home from "../pages/home";
import { Head, Main, Body } from "../styles/layout";

function routing() {
  return (
    <Main>
      <Head>
        <Header />
      </Head>
      <Body>
        <Home />
      </Body>
    </Main>
  );
}

export default routing;
