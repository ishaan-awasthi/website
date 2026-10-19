"use client";

import { useEffect, useState } from "react";

type GalleryImage = { name: string; src: string; caption: string };
type GalleryLayout = "grid" | "columns";

export default function Gallery({ images, layout = "grid" }: { images: GalleryImage[]; layout?: GalleryLayout }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [columnCount, setColumnCount] = useState(3);
  useEffect(() => {
    if (layout !== "columns") return;
    const updateColumns = () => setColumnCount(window.innerWidth <= 440 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [layout]);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  const columns = Array.from({ length: columnCount }, () => [] as GalleryImage[]);
  images.forEach((image, index) => columns[index % columnCount].push(image));
  const captionFor = (image: GalleryImage) => image.caption;

  return (
    <>
      <section className={`gallery-grid${layout === "columns" ? " gallery-columns" : ""}`} aria-label="Photo gallery">
        {layout === "columns"
          ? columns.map((column, columnIndex) => (
            <div className="gallery-column" key={columnIndex}>
              {column.map((image) => (
                <button
                  className="gallery-item"
                  key={image.src}
                  onClick={() => setSelected(image)}
                  type="button"
                >
                  <img alt="" decoding="async" src={image.src} />
                </button>
              ))}
            </div>
          ))
          : images.map((image) => (
              <button
                className="gallery-item"
                key={image.src}
                onClick={() => setSelected(image)}
                type="button"
              >
                <img alt="" decoding="async" src={image.src} />
              </button>
          ))}
      </section>

      {selected && (
        <div className="gallery-modal" role="presentation" onMouseDown={() => setSelected(null)}>
          <figure className="gallery-modal-book" role="dialog" aria-modal="true" aria-label={captionFor(selected)} onMouseDown={(event) => event.stopPropagation()}>
            <div className="gallery-modal-image"><img src={selected.src} alt="" /></div>
            <figcaption>{captionFor(selected)}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
