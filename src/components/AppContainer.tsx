import SplitPane from "react-split-pane";
import { useRecoilValue } from "recoil";
import { folderState } from "recoil/folder.recoil";

import { Folder } from "utils/enums";
import { getNoteBarConf } from "utils/helpers";

import { NoteList } from "./NoteList";
import { Sidebar } from "./Sidebar";

export const AppContainer = () => {
  const activeFolder = useRecoilValue(folderState);

  return (
    <div className="app-container">
      <SplitPane split="vertical" minSize={150} maxSize={500} defaultSize={240}>
        <Sidebar />
        <SplitPane split="vertical" {...getNoteBarConf(activeFolder)}>
          {activeFolder !== Folder.SCRATCH && <NoteList />}
        </SplitPane>
      </SplitPane>
    </div>
  );
};
