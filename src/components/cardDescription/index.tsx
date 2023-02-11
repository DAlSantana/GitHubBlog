import {
  CardDescriptionBody,
  CardDescriptionContainer,
  CardDescriptionContent,
  CardDescriptionFooter,
  CardDescriptionHeader,
} from "./styles";

import arrowLeft from "../../assets/arrowleft.svg";
import share from "../../assets/share.svg";
import github from "../../assets/github.svg";
import calendar from "../../assets/calendar.svg";
import speak from "../../assets/speak.svg";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
type CardDescriptionProps = {
  title: string;
  userLogin: string;
  createdAt: string;
  comments: number;
};
export function CardDescription({
  title,
  userLogin,
  createdAt,
  comments,
}: CardDescriptionProps) {
  return (
    <CardDescriptionContainer>
      <CardDescriptionContent>
        <CardDescriptionHeader>
          <Link className="redirect" to={"/"}>
            <img src={arrowLeft} alt="" sizes="" />
            voltar
          </Link>
          <span className="redirect">
            <img src={share} alt="" sizes="" />
            ver no github
          </span>
        </CardDescriptionHeader>
        <CardDescriptionBody>
          <p>{title}</p>
        </CardDescriptionBody>
        <CardDescriptionFooter>
          <span>
            <img src={github} alt="" sizes="" />
            {userLogin}
          </span>
          <span>
            <img src={calendar} alt="" sizes="" />
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <img src={speak} alt="" sizes="" /> {comments} comentários
          </span>
        </CardDescriptionFooter>
      </CardDescriptionContent>
    </CardDescriptionContainer>
  );
}
