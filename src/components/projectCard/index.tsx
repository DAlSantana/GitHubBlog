import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Issue } from "../../routes/home";
import {
  ProjectCardContent,
  ProjectContainer,
  ProjectDescription,
  ProjectHeader,
} from "./styles";

type ProjectCardProps = {
  pageToRedirect: string;
  issue: Issue;
};
export function ProjectCard({ pageToRedirect, issue }: ProjectCardProps) {
  return (
    <ProjectCardContent to={pageToRedirect} state={issue}>
      <ProjectContainer>
        <ProjectHeader>
          <h2>{issue.title}</h2>
          <p>
            {formatDistanceToNow(new Date(issue.createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
        </ProjectHeader>
        <ProjectDescription>{issue.body}</ProjectDescription>
      </ProjectContainer>
    </ProjectCardContent>
  );
}
