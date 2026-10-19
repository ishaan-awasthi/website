"use client";

import { useEffect, useRef, useState } from "react";
import projects from "./projects.json";

type Project = (typeof projects)[number];

function ProjectMedia({ project, preview = false }: { project: Project; preview?: boolean }) {
  if (project.kind === "video") {
    return <video src={project.src} autoPlay muted loop playsInline preload="auto" controls={!preview} aria-label={`${project.title} demo`} />;
  }

  return (
    <iframe
      src={project.src}
      title={`${project.title} preview`}
      className={preview && project.kind === "website" ? "project-site-preview" : undefined}
      loading="eager"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      tabIndex={preview ? -1 : undefined}
    />
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      opener.current?.focus();
    };
  }, [selected]);

  return (
    <>
      <section className="gallery-grid projects-grid" aria-label="Projects">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-preview">
              <div className="project-preview-media" aria-hidden="true" inert>
                <ProjectMedia project={project} preview />
              </div>
              <button className="project-open" type="button" aria-label={`Open ${project.title}`} aria-haspopup="dialog" onClick={(event) => {
                opener.current = event.currentTarget;
                setSelected(project);
              }} />
            </div>
            <h2>{project.title}</h2>
          </article>
        ))}
      </section>

      {selected && (
        <dialog ref={dialog} className="gallery-modal-book project-modal" aria-labelledby="project-title" aria-describedby="project-caption" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setSelected(null);
        }}>
          <div className="project-modal-media"><ProjectMedia project={selected} /></div>
          <div className="project-caption">
            <h2 id="project-title">{selected.title}</h2>
            <p id="project-caption">{selected.caption}</p>
            {selected.link && <a href={selected.link} target="_blank" rel="noopener noreferrer">{selected.link}</a>}
          </div>
        </dialog>
      )}
    </>
  );
}
