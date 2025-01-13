import { ReactNode } from "react"
import { type RecipeVariantProps } from "../../../styled-system/types";
import { button } from "../styles/recipes/button.css";

type Props = {
  children: ReactNode;
} & RecipeVariantProps<typeof button>;

export default function Button({ children, ...recipeVariantProps }: Props) {
  return (
    <button className={button(recipeVariantProps)}>
      {children}
    </button>
  )
}
