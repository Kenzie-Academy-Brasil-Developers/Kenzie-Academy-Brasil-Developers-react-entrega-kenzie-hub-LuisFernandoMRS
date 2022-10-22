import { StyledImg } from "./style";

interface IImgProps {
  height?: number;
  width?: number;
  alt: string | undefined;
  src: string;
}

export const Img = ({ src, alt, width, height }: IImgProps) => {
  return <StyledImg width={width} height={height} src={src} alt={alt} />;
};
