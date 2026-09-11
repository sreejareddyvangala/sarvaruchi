import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS, findBlogPost, readingMinutes, type BlogBlock, type BlogPost } from "../data/blog";
import { BUSINESS_NAME } from "../config/site";
import { usePageMeta } from "../lib/usePageMeta";
import { PageHeader } from "../components/PageHeader";
import { BlogCard } from "../components/BlogSection";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { ArrowRightIcon } from "../components/Icons";
import { LotusMark, Ornament } from "../components/Ornament";
import { NotFound } from "./NotFound";

export function BlogArticle() {
  const { slug } = useParams();
  const post = findBlogPost(slug);
  return post ? <Article key={post.slug} post={post} /> : <NotFound />;
}

function Article({ post }: { post: BlogPost }) {
  usePageMeta(post.title + " | " + BUSINESS_NAME, post.excerpt);

  const index = BLOG_POSTS.indexOf(post);
  const more = [...BLOG_POSTS.slice(index + 1), ...BLOG_POSTS.slice(0, index)].slice(0, 3);
  const { photo } = post;

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/#blog" },
        ]}
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <section className="bg-parchment-texture pb-18 pt-8 sm:pb-22 sm:pt-10">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <BackToBlog />

          <figure className="mt-5">
            <div className="overflow-hidden rounded-2xl border border-sand bg-beige shadow-card">
              <img
                src={photo.wide}
                srcSet={`${photo.card} 960w, ${photo.wide} 1920w`}
                sizes="(min-width: 1024px) 64rem, 100vw"
                alt={photo.alt}
                width={1920}
                height={1280}
                fetchPriority="high"
                className="aspect-[3/2] w-full object-cover sm:aspect-[16/9] lg:aspect-[2/1]"
                style={{ objectPosition: photo.position }}
              />
            </div>
            <figcaption className="mt-2.5 text-center text-[0.7rem] leading-relaxed text-ink-muted">
              Photo: {photo.credit.author} ·{" "}
              <a
                href={photo.credit.licenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold/50 underline-offset-2 transition-colors hover:text-maroon"
              >
                {photo.credit.licence}
              </a>
              , via{" "}
              <a
                href={photo.credit.source}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold/50 underline-offset-2 transition-colors hover:text-maroon"
              >
                Wikimedia Commons
              </a>
            </figcaption>
          </figure>

          <article className="mx-auto mt-10 max-w-[44rem] sm:mt-12">
            <p className="font-heading text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
              {readingMinutes(post)} min read
            </p>

            {post.body.map((block, i) => (
              <Block key={i} block={block} lead={i === 0} />
            ))}

            <Reveal className="mt-14 rounded-2xl border border-gold/30 bg-maroon-texture px-6 py-9 text-center sm:px-10">
              <p className="eyebrow text-gold-light">Planning an Event?</p>
              <h2 className="mt-3 font-display text-[1.75rem] text-cream sm:text-[2.1rem]">
                Tell Us About Your Celebration
              </h2>
              <Ornament className="mt-4" tone="light" />
              <p className="mx-auto mt-4 max-w-md text-[0.92rem] leading-relaxed text-cream/70">
                Share your date, guest count and preferences, and we will come back with catering
                options and a quotation.
              </p>
              <div className="mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
                <ButtonLink to="/#contact" variant="gold" size="lg">
                  Catering Enquiry
                </ButtonLink>
                <ButtonLink
                  to="/#blog"
                  variant="outline-light"
                  size="lg"
                  icon={<ArrowRightIcon className="size-4 rotate-180" />}
                >
                  Back to Blog
                </ButtonLink>
              </div>
            </Reveal>
          </article>

          <div className="mt-18 sm:mt-20">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px max-w-[8rem] flex-1 bg-gradient-to-r from-transparent to-gold/70" aria-hidden="true" />
              <h2 className="font-display text-[1.7rem] font-semibold text-maroon sm:text-[2rem]">
                More From the Blog
              </h2>
              <span className="h-px max-w-[8rem] flex-1 bg-gradient-to-l from-transparent to-gold/70" aria-hidden="true" />
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((other, i) => (
                <Reveal
                  as="li"
                  key={other.slug}
                  delay={i * 80}
                  className={cn3(i)}
                >
                  <BlogCard post={other} />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

/** Two columns on tablets would strand the third card, so it only shows from lg up. */
function cn3(i: number) {
  return i === 2 ? "hidden lg:block" : undefined;
}

function BackToBlog() {
  return (
    <Link
      to="/#blog"
      className="inline-flex items-center gap-2 font-heading text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-maroon transition-colors duration-300 hover:text-burgundy"
    >
      <ArrowRightIcon className="size-4 rotate-180 text-gold-deep" />
      Back to Blog
    </Link>
  );
}

function Block({ block, lead }: { block: BlogBlock; lead: boolean }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-11 flex items-center gap-3 font-display text-[1.6rem] font-semibold text-maroon sm:text-[1.85rem]">
        <LotusMark className="h-3.5 w-auto text-gold" />
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-5 flex flex-col gap-3">
        {block.items.map((item) => {
          // "Label: detail" items get their label set in bold
          const split = item.indexOf(": ");
          return (
            <li key={item} className="flex gap-3.5 text-[1rem] leading-relaxed text-ink-soft">
              <span className="mt-[0.6rem] size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
              <span>
                {split > 0 ? (
                  <>
                    <strong className="font-semibold text-maroon">{item.slice(0, split + 1)}</strong>
                    {item.slice(split + 1)}
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <p
      className={
        lead
          ? "mt-4 font-display text-[1.3rem] leading-[1.6] text-ink sm:text-[1.4rem]"
          : "mt-4 text-[1rem] leading-[1.8] text-ink-soft"
      }
    >
      {block.text}
    </p>
  );
}
