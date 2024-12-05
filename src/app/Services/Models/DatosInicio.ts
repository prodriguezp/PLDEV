// Definición de las interfaces
export interface HomePage {
  home: Home;
}

export interface Home {
  header: Header;
  introduction: Introduction;
  skills: Skills;
  cta: ActionLink[]; // Ahora cta es un array de ActionLink
  projects: Projects;
}

export interface Header {
  title: string;
  subtitle: string;
}

export interface Introduction {
  paragraph: string;
}

export interface Skills {
  title: string;
  list: Skill[];
}

export interface Skill{
  text: string;
  class: string;
}

export interface ActionLink {
  text: string;
  url: string;
}

export interface Projects {
  title: string;
  list: Project[];
}

export interface Project {
  name: string;
  descripcion: string;
  tecnologies: string[];
}
