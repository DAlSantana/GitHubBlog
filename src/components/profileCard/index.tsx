import {
  ProfileCardContainer,
  ProfileDescription,
  ProfileFooter,
  ProfileImage,
} from "./styles";
import gitHubIcon from "../../assets/github.svg";
import build from "../../assets/build.svg";
import people from "../../assets/people.svg";
import { User } from "../../routes/home";

export function ProfileCard({ avatar, name, followers, company }: User) {
  return (
    <ProfileCardContainer>
      <ProfileImage src={avatar} />
      <ProfileDescription>
        <h2>{name}</h2>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileFooter>
          <p>
            <img src={gitHubIcon} alt="Imagem de github" />
            &nbsp; {name}
          </p>
          <p>
            <img src={build} alt="Imagem de prédio" />
            &nbsp; {company}
          </p>
          <p>
            <img src={people} alt="Imagem de pessoas" />
            &nbsp; {followers} seguidores
          </p>
        </ProfileFooter>
      </ProfileDescription>
    </ProfileCardContainer>
  );
}
