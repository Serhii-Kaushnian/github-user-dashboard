import React from "react";
import { Link } from "react-router-dom";
import { StyledParagraph } from "../HeaderLogoLink/HeaderLogoLink.styled";
import { StyledLi, StyledUl, CardWrapper, CardImg } from "./Card.styled";
const Card = ({ user }) => {
  return (
    user && (
      <CardWrapper>
        <CardImg src={user.avatar_url} alt='user avatar' />
        <StyledLi>
          <StyledUl>
            {" "}
            {user.login && <StyledParagraph>Login: {user.login}</StyledParagraph>}
          </StyledUl>
          <StyledUl>{user.name && <StyledParagraph>Name: {user.name}</StyledParagraph>}</StyledUl>
          <StyledUl>
            {user.location && <StyledParagraph>Location: {user.location}</StyledParagraph>}
          </StyledUl>
          <StyledUl>
            {" "}
            {user.email && <StyledParagraph>E-Mail: {user.email}</StyledParagraph>}
          </StyledUl>
          <StyledUl>
            {" "}
            {user.twitter_username && (
              <StyledParagraph>Twitter: {user.twitter_username}</StyledParagraph>
            )}
          </StyledUl>
          <StyledUl>
            {user.blog && (
              <StyledParagraph>
                Blog:{" "}
                <Link to={user.blog} target='new'>
                  {user.blog.slice(0, 24)}
                </Link>
              </StyledParagraph>
            )}
          </StyledUl>
        </StyledLi>
      </CardWrapper>
    )
  );
};

export default Card;
