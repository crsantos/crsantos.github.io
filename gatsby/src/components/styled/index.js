import styled from "styled-components";
import { media } from "../../utils/responsive-utils";

export const Timeline = styled.div`
  padding-bottom: 50px;
  border-left: ${ props => props.theme.space.xs } solid rgba(0, 0, 0, 0.4);
  padding-left: 70px;
  margin-left: 20px;
  position: relative;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h3`
  font-size: ${ props => props.theme.font.size.l };
  font-weight: ${ props => props.theme.font.weight.bold };
  margin: ${ props => props.theme.space.stack.s };
  color: ${ props => props.theme.text.color.primary};
  padding-bottom: 5px;
  position: relative;
  &:before {
    content: "";
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: ${ props => props.theme.color.brand.primary};
    position: absolute;
    left: -90px;
    top: 7px;
    bottom: 10px;
    border: 5px solid ${ props => props.theme.color.neutral.gray.e};
  }
  &:first-of-type:before {
    top: -1px;
  }
`;

export const ListItem = styled.li`
  font-size: ${ props => props.theme.font.size.s };
  color: ${ props => props.theme.text.color.primary};
  list-style-type: none;
  margin: 10px 0;
  font-weight: ${ props => props.theme.font.weight.regular };
  line-height: ${ props => props.theme.font.lineHeight.xxl };
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;

export const UnderlinedLink = styled.a`
  color: ${ props => props.theme.text.color.primary};
  text-decoration: none;
  ${props =>
    props.href &&
    `
      border-bottom: 1px dashed rgba(0, 0, 0, 0.7);
    `}
  padding-bottom: 1px;
  &:hover {
    color: ${ props => props.theme.text.color.brand};
  }
`;

export const ShowMoreButton = styled.button`
  background-color: rgba(0, 0, 0, 0.16);
  transition: all 200ms linear;
  border: 0;
  cursor: pointer;
  border-radius: ${ props => props.theme.radius.smaller};
  color: white;
  font-weight: ${ props => props.theme.font.weight.light };
  padding: 10px 15px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.69);
  margin-top: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Wrapper = styled(ListItem)`
  margin: 35px 0;
`;

export const Link = styled(UnderlinedLink)`
  margin-bottom: ${ props => props.theme.space.xs };
  padding-bottom: ${ props => props.theme.space.inset.xs };
  display: inline-block;
`;

export const Points = styled.div`
  margin-bottom: ${ props => props.theme.space.l };
  line-height: 50px;
`;

export const Title = styled.div`
  font-size: ${ props => props.theme.font.size.s };//30px;
  font-weight: ${ props => props.theme.font.weight.standard };
  position: relative;
  &:before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 100%;
    color: white;
    background-color: ${ props => props.theme.color.brand.primary};
    position: absolute;
    left: -85px;
    top: 0px;
    border: 5px solid ${ props => props.theme.color.neutral.gray.e};
    ${media.phoneM`
        left: -45px;
      `};
  }
  ${media.phoneM`
       font-size: 22px;
    `};
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: 15px 0;
  line-height: 25px;
  margin-bottom: 15px;
  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -80px;
    top: 4px;
    border: 4px solid ${ props => props.theme.color.neutral.gray.e};
    ${media.phoneM`
        left: -40px;
    `};
  }
`;

export const GithubUnderlinedLink = styled.a`
  color: white;
  text-decoration: none;
  ${props =>
    props.href &&
    `
      border-bottom: 0px rgba(255, 255, 255, 0.7);
    `} padding-bottom: 1px;
  &:hover {
    color: ${ props => props.theme.text.color.inverse};
  }
`;