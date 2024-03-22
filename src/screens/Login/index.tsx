import React from "react";

import {
  Container,
  ContainerHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <ContainerHeader>
        <Title> HEADER</Title>
        <Description></Description>
        <ViewButton></ViewButton>
      </ContainerHeader>
      <ContentBody></ContentBody>
      <ContentFooter></ContentFooter>
    </Container>
  );
}
