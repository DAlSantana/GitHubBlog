import { useLocation } from "react-router-dom";
import { CardDescription } from "../../components/cardDescription";
import { Header } from "../../components/header";
import { ProjectDetailsContainer, ProjectDescrption } from "./styles";

export function ProjectDetails() {
  let { state } = useLocation();

  return (
    <ProjectDetailsContainer>
      <Header />
      <CardDescription {...state} />
      <ProjectDescrption>
        <p>{state.body}</p>
      </ProjectDescrption>
    </ProjectDetailsContainer>
  );
}
