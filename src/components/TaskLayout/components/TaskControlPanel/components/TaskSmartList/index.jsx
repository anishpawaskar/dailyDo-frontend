import { useState } from "react";
import { SMART_LIST } from "../../taskControlPanel.constant";
import { TaskSmartListItem } from "./TaskSmartListItem";

export const TaskSmartList = () => {
  const [selectedSmartListItem, setSelectedSmartListItem] = useState(2);
  const [smartList, setSmartList] = useState(SMART_LIST);

  const filteredSmartList = smartList.filter((item) => item.visibility);

  return (
    <section className="smart-list-view-area mt-1.5">
      <ul>
        {filteredSmartList.map((item) => {
          return (
            <TaskSmartListItem
              item={item}
              key={item.id}
              selectedSmartListItem={selectedSmartListItem}
              setSelectedSmartListItem={setSelectedSmartListItem}
              setSmartList={setSmartList}
              smartList={smartList}
            />
          );
        })}
      </ul>
    </section>
  );
};
