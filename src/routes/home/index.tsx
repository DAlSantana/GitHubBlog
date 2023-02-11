import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { ProfileCard } from "../../components/profileCard";
import { ProjectCard } from "../../components/projectCard";
import { api } from "../../lib/axios";
import {
  HomeContainer,
  IssuesSection,
  SearchForm,
  SearchInput,
} from "./styles";

export interface User {
  name: string;
  avatar: string;
  company: string;
  followers: number;
}
export interface Issue {
  title: string;
  comments: number;
  createdAt: string;
  userLogin: string;
  body: string;
}

export interface Issues {
  issue: Issue[];
}
export function Home() {
  const [user, setUser] = useState<User>();
  const [openIssues, setOpenIssues] = useState(0);
  const [issues, setIssues] = useState<Issues>({ issue: [] });

  useEffect(() => {
    api
      .get("/repos/DAlSantana/GitHubBlog")
      .then((res) => setOpenIssues(res.data.open_issues_count));

    api.get("/users/DALSantana").then((res) =>
      setUser({
        name: res.data.name,
        avatar: res.data.avatar_url,
        company: res.data.company,
        followers: res.data.followers,
      })
    );

    api.get("/repos/DAlSantana/GitHubBlog/issues").then(async (res) => {
      let issuesData: Issue[] = await res.data.map((issueData: any) => {
        let eachIssue: Issue = {
          body: issueData.body,
          comments: issueData.comments,
          createdAt: issueData.created_at,
          title: issueData.title,
          userLogin: issueData.user.login,
        };

        return eachIssue;
      });

      setIssues({
        ...issues,
        issue: issuesData,
      });
    });
  }, []);
  console.log(issues);
  return (
    <HomeContainer>
      <Header />
      <ProfileCard {...user!} />
      <SearchForm>
        <div>
          <p>Publicações</p>
          <p>{openIssues} publicações</p>
        </div>
        <SearchInput
          type="text"
          name="Content"
          id=""
          placeholder="Buscar Conteúdo"
        />
      </SearchForm>
      <IssuesSection>
        {issues.issue.map((dataIssue) => {
          return (
            <ProjectCard
              pageToRedirect="/project"
              issue={dataIssue}
              key={dataIssue.createdAt}
            />
          );
        })}
      </IssuesSection>
    </HomeContainer>
  );
}
