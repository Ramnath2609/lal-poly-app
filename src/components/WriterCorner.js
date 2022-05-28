import React from "react";
import styled from "styled-components";

const ComingSoonText = styled.div.attrs({
    className: String('lal-WriterCorner')
})`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-family: Roboto;
  font-weight: 600;
  color: #0077D9;
`;

const WriterCorner = () => {
    return (
        <div>
            <ComingSoonText>
                Coming Soon...
            </ComingSoonText>
        </div>
    );
};

export default WriterCorner;
