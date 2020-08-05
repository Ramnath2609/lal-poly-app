import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/Content";

const HomeContent = styled.div`
  width: 95%;
  margin: auto;
`;

const Home = () => {
  return (
    <Wrapper>
      <HomeContent>
        <h1>Welcome,</h1>
        <p>
          Lal Poly Bureau Publishing Limited is a platform for creative writers
          to publish their novels, Novelettes, short stories, research articles
          and poems in e-book form. Therefore, the key objective of this website
          is to introduce the new writers to the world of readers and publishes.{" "}
        </p>
        <p>
          The website has another innovative features. The book review section
          reviews books on literature, psychology, politics, economy, religion
          or any other subjects – both fiction and nonfiction - that exercised
          profound influence on the humanity.{" "}
        </p>
        <p>
          Events section narrates important events in the history of evolution
          of mankind that contributed to the development of the civilization.
          Personalities section explores the hitherto unknown or neglected areas
          in the biography or auto biographies of eminent personalities who
          influenced the socio, economic and political lives of the world.{" "}
        </p>
        <p>
          Last but not the least is the section titles Dialogues that takes
          place between two factious characters called Innoxus and Ingenio. They
          discusses everything in the Universe – from the birth of Universe to
          the existential questions tormenting humanity since the Sapiens
          acquired the skills to think. They are not aliens but they reside in
          us. The issues they discuss take place quite often in us.{" "}
        </p>
        <p>
          The website is in the stage of beginning and some areas are under
          construction.{" "}
        </p>
        <p>
          Looking forward to your contribution through the section ‘Contact us’
        </p>
      </HomeContent>
    </Wrapper>
  );
};

export default Home;
