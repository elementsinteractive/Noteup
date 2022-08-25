import { ReactNode, SyntheticEvent } from "react";

import { Note } from "recoil/types";

import { Errors } from "utils/enums";
import { getNoteTitle } from "utils/helpers";

export interface NoteLinkProps {
  uuid: string;
  originalText: ReactNode;
  notes: Note[];
  handleNoteLinkClick: (e: SyntheticEvent, note: Note) => void;
}

export const NoteLink = ({ notes, uuid, originalText, handleNoteLinkClick }: NoteLinkProps) => {
  if (!uuid.includes("https://uuid:")) {
    return (
      <a target="_blank" href={uuid}>
        {originalText}
      </a>
    );
  }
  const id = uuid.split("uuid:")[1];
  const note = notes.find((note) => note.id.startsWith(id));
  const title = note !== undefined ? getNoteTitle(note.text) : null;

  if (note && title) return <a onClick={(e) => handleNoteLinkClick(e, note)}>{title}</a>;

  return <span className="error">{Errors.INVALID_LINKED_NOTE_ID}</span>;
};