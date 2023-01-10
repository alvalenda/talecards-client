import styled from "styled-components";

type Props = {};

const StyledTitle = styled.h1`
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
`;

export function Title(props: Props) {
  return (
    <div>
      <StyledTitle>Hello World of Styled Components!</StyledTitle>
    </div>
  );
}
