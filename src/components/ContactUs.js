import React from "react";
import { Wrapper } from "../components/Content";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  box-shadow: 0px 0px 3px;
  border-radius: 10px;
  padding: 15px;
  margin: 35px;
`;

const CardText = styled.p`
  padding-left: 10px;
  margin-top: 5px;
`;

const ContactInfo = styled.div`
  margin: 15px;
`;

const ContactUs = () => {
  return (
    <Wrapper>
      <ContactInfo>
        <h1>Contact us</h1>
        <p>
          Lal Poly Bureau Publishing Limited is pleased to solicit the feedback
          from the readers as well as their publications.{" "}
        </p>
        <p>Please contact us in the following address;</p>

        <Card>
          <CardText>C. Daniel</CardText>
          <CardText>Proprietor</CardText>
          <CardText>16- 47 A, Kadamankuzhi</CardText>
          <CardText>Alanchi – 629159</CardText>
          <CardText>Kanyakumari District</CardText>
          <CardText>Tamilnadu , INDIA</CardText>
          <CardText>Mobile +91 97894 66049</CardText>
          <CardText>Email: lpbp.20@gmail.com</CardText>
        </Card>
      </ContactInfo>
    </Wrapper>
  );
};

export default ContactUs;
