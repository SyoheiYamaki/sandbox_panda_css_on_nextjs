import Link from "next/link";
import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div className={center({ h: 'full' })}>
      <div className={css({
        display: "flex",
        flexDirection: "column",
      })}>
        <div className={css({
          fontWeight: "bold",
          color: "yellow.300",
          textAlign: "center",
          textStyle: "4xl",
        })}>
          <p>🐼</p>
          <p>Hello fron Panda</p>
        </div>
        <Link
          href="/articles"
          className={css({
            width: "200px",
            height: "50px", 
            backgroundColor: "slate.500",
            color: "white",
            display: "flex",
            margin: "40px auto 0",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "md",
            _hover: {
              backgroundColor: "slate.600",
              transform: "translateY(-2px)",
              transition: "all 0.2s ease-in-out"
            }
          })}
        >
          Articles
        </Link>
      </div>
    </div>
  );
}
