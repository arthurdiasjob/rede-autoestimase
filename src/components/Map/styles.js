/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const TitleCard = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--primary-color);
  padding: 10px;
  height: auto;
`;

export const Content = styled.div`
  background: var(--primary-color);
  width: auto;
  max-width: 100%;
  min-height: 80px;
  color: #fff;
  padding: 10px;
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const ButtonClose = styled.button`
  background-color: var(--primary-color);
  border: none;
  cursor: pointer;
  color: #fff;
  font-size:18px;
  width: 80px;
  height: 35px;
  border-radius: 4px;
  font-family:var(--font-heading)
`;
