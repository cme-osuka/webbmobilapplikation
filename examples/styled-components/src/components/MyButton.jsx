import styled from "styled-components";

export const MyButton = styled.button`
  border-radius: 100%;
  border: 3px solid purple;
  background: orange;

  &:hover {
    background: brown;
    color: #f3f3f3;
  }
`;

/* Bara om du behöver göra något speciellt */
export function Button(props) {
  return <MyButton>{props.children}</MyButton>;
}
