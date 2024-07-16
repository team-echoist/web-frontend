import color from "@/shared/styles/color";
import {
  ButtonType,
  StyleType,
  SquareScaleType,
  RoundScaleType,
  ScaleType,
} from "@/shared/types/btnType";

const { red, gray, pointcolor } = color;

const styleObj = {
  style: {
    round: {
      round_1: "80px",
      round_2: "32px",
    },
    square: "10px",
  },
  type: {
    red: red,
    disable: gray,
    point: pointcolor,
  },
  scale: {
    square: {
      small: {
        width: "300px",
        height: "60px",
      },
      small_2: {
        width: "296px",
        height: "57px",
      },
      small_3: {
        width: "260px",
        height: "50px",
      },
      large: {
        width: "442px",
        height: "50px",
      },
    },
    round: {
      small: {
        width: "198px",
        height: "50px",
      },
      large: {
        width: "340px",
        height: "60px",
      },
    },
  },
};
const getSize = (style: StyleType, scale: ScaleType) => {
  if (style.includes("square")) {
    return styleObj.scale.square[scale as SquareScaleType];
  } else if (style.includes("round")) {
    return styleObj.scale.round[scale as RoundScaleType];
  }
  return null;
};
const getBorderRadius = (style: StyleType) => {
  if (style === "square") {
    return styleObj.style.square;
  } else if (style.includes("round")) {
    return styleObj.style.round[style];
  }
  return null;
};

const updateBtnStyle = (
  style: StyleType,
  type: ButtonType,
  scale: SquareScaleType | RoundScaleType
) => {
  const borderRadius = getBorderRadius(style);
  const backgroundColor = styleObj.type[type];
  const size = getSize(style, scale);

  if (borderRadius && backgroundColor && size) {
    return {
      borderRadius:
        typeof borderRadius === "string" ? borderRadius : borderRadius[style],
      backgroundColor: backgroundColor,
      width: size.width,
      height: size.height,
    };
  }

  return null;
};

export default updateBtnStyle;
