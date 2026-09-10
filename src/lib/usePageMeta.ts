import { useEffect } from "react";

/** Keeps the document title and meta description in step with the route. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
}
