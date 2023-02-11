import styled from "styled-components";

export const CardDescriptionContainer = styled.article`
  height: 168px;
  width: 864px;
  background: ${(props) => props.theme["base-profile"]};
  margin: auto auto;
  border-radius: 4px;
  img {
    height: 18px;
    width: 18px;
  }
  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .redirect {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme["blue"]};
  }
  margin-top: -4rem;
`;
export const CardDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const CardDescriptionHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const CardDescriptionBody = styled.div`
  p {
    font-size: 24px;
  }
`;

export const CardDescriptionFooter = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 2rem;
  font-size: 12px;
  color: ${(props) => props.theme["base-span"]};
`;
