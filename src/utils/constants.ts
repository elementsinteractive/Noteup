import { Folder, NotesSortKey } from "utils/enums";

export const folderMap: Record<Folder, string> = {
  [Folder.ALL]: "All Notes",
  [Folder.PINNED]: "Pinned",
  [Folder.SCRATCH]: "Scratch Paper",
  [Folder.TRASH]: "Trash",
  [Folder.CATEGORY]: "Category",
};

export const shortcutMap = [
  { action: "Create a new note", key: "N" },
  { action: "Delete a note", key: "U" },
  { action: "Create a category", key: "C" },
  { action: "Download a note", key: "O" },
  { action: "Sync all notes", key: "L" },
  { action: "Markdown preview", key: "P" },
  { action: "Toggle theme", key: "K" },
  { action: "Search notes", key: "F" },
  { action: "Prettify a note", key: "I" },
];

export const notesSortOptions = [
  { value: NotesSortKey.TITLE, label: "Title" },
  { value: NotesSortKey.CREATED_DATE, label: "Date Created" },
  { value: NotesSortKey.LAST_UPDATED, label: "Last Updated" },
];

export const routes = {
  FAVORITES: "/shared/",
};