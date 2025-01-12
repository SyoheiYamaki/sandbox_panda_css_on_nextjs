import Link from "next/link";
import { articles } from "../lib/placeholder-data";
import Image from 'next/image';
import { css } from "../../../styled-system/css";


export default function Page() {
  return (
    <div>
      <h1 className={css({ textAlign: "center", fontSize: "5xl", fontWeight: "bold" })}>Articles</h1>
      <ul
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "56px",
        })}
      >
        {articles.map(article => (
          <li key={article.title}>
          <Link
            href={`/articles/${article.id}`}
            className={css({
              display: "flex",
              flexDirection: { base: "column", md: "row" },
              gap: "24px", 
              _hover: {
                textDecoration: "underline",
                opacity: "0.8",
              }
            })}
          >
            <Image
              src={article.thumbnail_url}
              alt={article.title}
              width={300}height={200}
            />
            <p className={css({ fontSize: "2xl", fontWeight: "bold" })}>{article.title}</p>
          </Link>
        </li>
      ))}
      </ul>
      <div className={css({ marginTop: "40px" })}>
        <Link href="/">← Back to TOP</Link>
      </div>
    </div>
  )
}
