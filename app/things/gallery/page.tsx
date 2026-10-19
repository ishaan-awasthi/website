import Gallery from "../../Gallery";
import gallery from "../../gallery.json";

const images = gallery.map((image) => ({
  ...image,
  name: image.file,
  src: `/images/${encodeURIComponent(image.file)}`,
}));

export default function GalleryPage() {
  return <main className="page gallery-page"><section className="index-list"><h1>gallery</h1></section><Gallery images={images} /><a className="back-link gallery-back" href="/things">back</a></main>;
}
