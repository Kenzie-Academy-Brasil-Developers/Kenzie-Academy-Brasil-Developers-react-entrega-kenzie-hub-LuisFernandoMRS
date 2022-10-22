import styled from "styled-components";
interface IStyledImgProps {
  width?: number;
  height?: number;
}
export const StyledImg = styled.img<IStyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
