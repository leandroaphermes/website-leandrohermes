import type { NextPage } from "next";
import ProjetosTemplate from "templates/ProjetosTemplate";

export type ProjectProps = {
  name: string;
  description: string;
  html_url: string;
  language?: string;
};

export type ProjectPageProps = {
  projects: ProjectProps[];
};

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/leandroaphermes/repos");
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

const ProjectPage: NextPage<ProjectPageProps> = ({ projects }): JSX.Element => {
  return (
    <ProjetosTemplate
      projects={projects.map((project) => ({
        title: project.name,
        description: project.description,
        url: project.html_url,
        language: project.language,
      }))}
    />
  );
};

export default ProjectPage;
