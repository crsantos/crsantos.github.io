import styled from "styled-components";

export const RightSideHome = styled.div`
  padding-bottom: 50px;
  border-left: 5px solid rgba(0, 0, 0, 0.4);
  padding-left: 70px;
  //padding-top: 10px;
  margin-left: 20px;
  position: relative;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 100;
  margin: 0 0 10px 0;
  color: ${ props => props.theme.text.color.primary};
  font-weight: 300;
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
  font-size: 18px;
  color: ${ props => props.theme.text.color.primary};
  list-style-type: none;
  margin: 10px 0;
  font-weight: 100;
  line-height: 30px;
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
    `} padding-bottom: 1px;
  &:hover {
    color: #bd93d8;
  }
`;

export const ShowMoreButton = styled.button`
  background-color: rgba(0, 0, 0, 0.16);
  transition: all 200ms linear;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  color: white;
  font-weight: 100;
  padding: 10px 15px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.69);
  margin-top: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;