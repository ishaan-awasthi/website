"use client";

import { useEffect, useState } from "react";
import gallery from "./gallery.json";

const images = gallery.map((image) => ({
  ...image,
  src: `/images/${encodeURIComponent(image.file)}`,
}));

export default function HomeImage() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!images.length) return;
    const previous = sessionStorage.getItem("last-home-image");
    const choices = images.filter((image) => image.src !== previous);
    const selected = choices[Math.floor(Math.random() * choices.length)] ?? images[0];
    sessionStorage.setItem("last-home-image", selected.src);
    setSrc(selected.src);
  }, []);

  return src ? <img className="home-image" src={src} alt="" /> : null;
}
