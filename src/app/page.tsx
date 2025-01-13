import Link from "next/link";
import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";
import { button } from "./styles/recipes/button.css";
import Button from './ui/Button';

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
        <Link href="/articles" className={css({ mt: "4" })}>
            Articles →
        </Link>
        <section className={css({ display: "flex", flexDirection: "column", gap: "16px", marginTop: "56px", })}>
          <h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Buttons</h2>
          <Link href="/articles" className={button({ size: "small" })}>
            Small
          </Link>
          <Link href="/articles" className={button({ size: "default" })}>
            Default
          </Link>
          <Link href="/articles" className={button({ size: "large" })}>
            Large
          </Link>
          <Link href="/articles" className={button({ type: "danger" })}>
            Danger
          </Link>
          <Button size="small" type="default">Small Button</Button>
          <Button>Default Button</Button>
          <Button size="large">Large Button</Button>
        </section>
      </div>
    </div>
  );
}
