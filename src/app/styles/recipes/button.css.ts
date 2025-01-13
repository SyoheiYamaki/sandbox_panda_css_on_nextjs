import { cva } from "../../../../styled-system/css";

export const button =  cva({
  base: {
    display: "inline-block",
    backgroundColor: "slate.500",
    border: "solid 1px gray",
    borderRadius: "2px",
    fontWeight: "bold",
    textAlign: "center",
    transition: "all 0.2s ease-in-out",
    _hover: {
      transform: "translateY(-2px)",
    }
  },
  variants: {
    type: {
      default: { color: "white" },
      secondary: { color: "white", borderColor: "white" },
      danger: { color: "white", borderColor: "red", backgroundColor: "red" }
    },
    size: {
      small: { width: "140px", padding: "8px", fontSize: "12px" },
      default: { width: "180px", padding: "12px", fontSize: "14px" },
      large: { width: "240px", padding: "16px", fontSize: "16px" },
    }
  },
  defaultVariants: {
    type: "default",
    size: "default",
  },
})