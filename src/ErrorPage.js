import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Heading>404</Heading>
          <Subheading>Oops, wrong turn!</Subheading>
          <Subheading>
            Looks like you're lost{" "}
            <span role="img" aria-label="Lost Cat">
              🐱
            </span>{" "}
            or{" "}
            <span role="img" aria-label="Lost Penguin">
              🐧
            </span>
          </Subheading>
          <Text>
            We're sorry, but the page you're looking for cannot be found. It may
            have been moved or deleted, or there may be an error with the link
            you followed. Please check the URL for errors, or try searching our
            site using the search bar above. If you continue to have trouble
            finding what you're looking for, please don't hesitate to contact us
            for assistance.
          </Text>
          <Gifs>
            <Link href="https://media.giphy.com/media/d4EzU5a6X9Y6fNqq/giphy.gif">
              <img
                src="https://media.giphy.com/media/d4EzU5a6X9Y6fNqq/giphy.gif"
                alt="Lost Cat"
              />
            </Link>
          </Gifs>
          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #1f1f1f;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #fff;
`;

const Subheading = styled.h3`
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const Text = styled.p`
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin-bottom: 3rem;
  color: #fff;
`;

const Gifs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  img {
    width: 200px;
    height: 200px;
    margin: 0.5rem;
    cursor: pointer;
  }
`;

const Link = styled.a`
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }
`;

export default ErrorPage;
