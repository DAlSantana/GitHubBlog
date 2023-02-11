import styled from "styled-components";

export const HomeContainer = styled.section`
  background-color: ${(props) => props.theme["base-background"]};
`;

export const SearchForm = styled.form`
  margin: auto auto;
  width: 850px;
  margin-top: 3rem;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  width: inherit;
  height: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme[`base-border`]};
  background: ${(props) => props.theme["base-input"]};
  padding: 12px 10px;
  width: 835px;
  margin-bottom: 3rem;
  color: ${(props) => props.theme["base-title"]};
`;

export const IssuesSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  background: ${(props) => props.theme["base-background"]};
  margin: auto auto;
  width: 850px;
`;
