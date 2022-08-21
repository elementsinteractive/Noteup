import { useRecoilState } from "recoil";
import { folderState } from "recoil/folder.recoil";

import { Folder } from "utils/enums";

import { Note, Notebook, Pin, Trash } from "components/Icons";

import { SidebarButton, StyledSidebar } from "./style";

export const Sidebar = () => {
  const [activeFolder, setActiveFolder] = useRecoilState(folderState);

  const handleFolderChange = (folder: Folder) => setActiveFolder(folder);

  return (
    <StyledSidebar>
      <SidebarButton
        selected={activeFolder === Folder.SCRATCH}
        onClick={() => handleFolderChange(Folder.SCRATCH)}
      >
        <Note size={16} /> Scratch paper
      </SidebarButton>
      <SidebarButton
        selected={activeFolder === Folder.ALL}
        onClick={() => handleFolderChange(Folder.ALL)}
      >
        <Notebook size={16} /> Notes
      </SidebarButton>
      <SidebarButton
        selected={activeFolder === Folder.PINNED}
        onClick={() => handleFolderChange(Folder.PINNED)}
      >
        <Pin size={16} /> Pinned
      </SidebarButton>
      <SidebarButton
        selected={activeFolder === Folder.TRASH}
        onClick={() => handleFolderChange(Folder.TRASH)}
      >
        <Trash size={16} /> Trash
      </SidebarButton>
    </StyledSidebar>
  );
};