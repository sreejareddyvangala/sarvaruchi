import { Link } from "react-router-dom";
import { BLOG_POSTS, readingMinutes, type BlogPost } from "../data/blog";
import { cn } from "../lib/cn";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./Icons";

/**
 * The blog on the home page. Large screens give the first article a wide
 * feature card beside the second, with the other three in a row beneath;
 * tablets run the feature across both columns; phones stack every card.
 */
export function BlogSection() {
  return (
    <section id="blog" className="bg-cream/55 py-18 sm:py-22 lg:py-26">
      <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Blog" title="Ideas for Every Celebration" />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal
              as="li"
              key={post.slug}
              delay={(i % 3) * 80}
              className={cn(i === 0 && "sm:col-span-2")}
            >
              <BlogCard post={post} featured={i === 0} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** One article card. The Read More link stretches over the whole card. */
export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-parchment shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift",
        featured && "sm:flex-row",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-beige",
          featured ? "aspect-[3/2] sm:aspect-auto sm:w-[55%] sm:shrink-0" : "aspect-[3/2]",
        )}
      >
        <img
          src={post.photo.card}
          alt={post.photo.alt}
          width={960}
          height={640}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          style={{ objectPosition: post.photo.position }}
        />
        <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-parchment/90 px-3 py-1 font-heading text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-maroon backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", featured && "sm:justify-center lg:p-9")}>
        <p className="font-heading text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {readingMinutes(post)} min read
        </p>
        <h3
          className={cn(
            "mt-2 text-balance font-display font-semibold leading-snug text-maroon",
            featured ? "text-[1.55rem] sm:text-[1.7rem] lg:text-[2.05rem]" : "text-[1.3rem]",
          )}
        >
          {post.title}
        </h3>
        <span
          className="mt-3 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16"
          aria-hidden="true"
        />
        <p
          className={cn(
            "mt-3 text-[0.9rem] leading-relaxed text-ink-muted",
            !featured && "flex-1",
            featured && "lg:text-[0.97rem]",
          )}
        >
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-maroon transition-colors duration-300 after:absolute after:inset-0 hover:text-burgundy"
        >
          Read More
          <span className="sr-only">: {post.title}</span>
          <ArrowRightIcon className="size-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
