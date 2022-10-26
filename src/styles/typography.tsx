import styled from "styled-components";

interface IStyledTitleOneProps {
  fontSize: number;
  color?: string | number;
}

export const StyledTitleOne = styled.h1<IStyledTitleOneProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize + "px"};
  color: ${({ color }) => color};
`;

export const StyledTitleTwo = styled(StyledTitleOne)`
  font-weight: 600;
  font-size: 16px;
`;

export const StyledTitleThree = styled(StyledTitleOne)`
  font-size: 14px;
`;

export const StyledTitleHTwo = styled.h2<IStyledTitleOneProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize + "px"};
  color: ${({ color }) => color};
`;

export const StyledHeadline = styled.p<IStyledTitleOneProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize + "px"};
  color: ${({ color }) => color};
`;

export const StyledHeadlineBold = styled(StyledHeadline)`
  font-weight: 600;
`;

export const StyledHeadlineItalic = styled(StyledHeadline)`
  font-style: italic;
`;

export const StyledNagetive = styled(StyledHeadline)`
  color: var(--negative);
`;
