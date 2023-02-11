import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectCardContent = styled(Link)`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme["base-border"]};
  text-decoration: none;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px;
`;

export const ProjectHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};
  text-overflow: ellipsis;
  height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
