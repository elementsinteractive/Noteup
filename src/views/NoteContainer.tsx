import { useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { editingSelector } from "recoil/editor.recoil";
import { selectedNoteSelector } from "recoil/notes.recoil";
import { sectionsSelector } from "recoil/sections.recoil";

import { Section } from "utils/enums";
import { useWindowDimensions } from "utils/hooks/useWindowDimensions";

import { NoteEditor } from "views/NoteEditor";
import { NotePreview } from "views/NotePreviewer";

import { EditorBar } from "components/EditorBar";

import { FlexColumn } from "styles/layout";

type Props = {
  openSettings: () => void;
};

export const NoteContainer = ({ openSettings }: Props) => {
  const { isSmallDevice } = useWindowDimensions();
  const section = useRecoilValue(sectionsSelector);
  const [editing, setEditing] = useRecoilState(editingSelector);
  const [note, setNote] = useRecoilState(selectedNoteSelector);

  const editorView = useMemo(() => section === Section.NOTE, [section]);

  //
  return (
    <>
      {((isSmallDevice && editorView) || !isSmallDevice) && (
        <FlexColumn justifyContent="space-between" alignItems="initial" height="100%">
          {note ? (
            <>
              {!editing && <NotePreview previewNote={note} />}
              {editing && <NoteEditor note={note} setNote={setNote} />}
            </>
          ) : (
            <div />
          )}
          <EditorBar
            note={note}
            editing={editing}
            setEditing={() => setEditing((prev) => !prev)}
            toggleModal={openSettings}
          />
        </FlexColumn>
      )}
    </>
  );
};