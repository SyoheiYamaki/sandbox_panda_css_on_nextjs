import { articles } from "@/app/lib/placeholder-data"
import { css } from "../../../../styled-system/css";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params
} : {
  params: Promise<{ id: number }>
}) {
  const { id } = await params;
  const article = articles.find(article => article.id == id);

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <article>
      <h1
        className={css({
          textAlign: "center",
          fontSize: "5xl",
          fontWeight: "bold",
        })}
      >
        {article.title}
      </h1>
      <Image
        src={article.thumbnail_url}
        alt={article.title}
        width={300}
        height={200}
        className={css({
          width:  { base: "100%", md: "60%" },
          height: "auto", 
          margin: "32px auto",
          borderRadius: "8px",
        })}
      />
      <div
        dangerouslySetInnerHTML={{ __html: article.body }}
        className={css({
          marginTop: "40px",
          fontSize: "2xl",
          lineHeight: "1.5",
        })}
      />
      <div className={css({ marginTop: "56px" })}>
        <Link href="/articles">← Back to articles</Link>
      </div>
    </article>
  )
}
