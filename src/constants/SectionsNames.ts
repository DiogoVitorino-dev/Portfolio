export enum Sections {
  presents = 'presents',
  projects = 'projects',
  contacts = 'contacts',
}

export type SectionsNames = keyof typeof Sections;
