import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: String('lal-BookReviews')
})`
  margin-left: 190px;
  margin-top: 12%;
  display: flex;
  align-items: center;
  height: 400px;
  justify-content: center;
  font-size: 18px;
  font-family: RobotoBold;
  font-weight: 600;
  color: #0077D9;
`;

const BookReviews = () => {
    return (
        <Wrapper>
           Coming Soon...
        </Wrapper>
    );
};

export default BookReviews;
