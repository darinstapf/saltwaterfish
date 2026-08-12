/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Story cards use field-note labels and generous whitespace instead of generic blog-grid styling.
 */

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

type ArticleCardProps = {
  category: string;
  title: string;
  description: string;
  to: string;
  readTime: string;
};

export function ArticleCard({ category, title, description, to, readTime }: ArticleCardProps) {
  return (
    <article className="article-card">
      <div className="article-card__rule" />
      <span className="eyebrow">{category}</span>
      <h3><Link href={to}>{title}</Link></h3>
      <p>{description}</p>
      <Link href={to} className="article-card__link">
        <span>{readTime}</span><ArrowUpRight size={17} strokeWidth={1.6} />
      </Link>
    </article>
  );
}
