import { CarouselItem } from "./styles";

const SliderItem = ({ children, width }) => {
  return <CarouselItem style={{ width: width }}>{children}</CarouselItem>;
};

export default SliderItem;
