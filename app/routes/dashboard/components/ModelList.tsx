
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import StarIcon from "~/icons/StartIcon";

function ModelList() {
   const [items, setItems] = useState([
     {
       id: "1",
       name: "Melong",
       description: "Recommended for Regular literature",
     },
     {
       id: "2",
       name: "Mitra",
       description: "Recommended for Buddhist literature",
     },
   ]);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const newBox = Array.from(items);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setItems(newBox);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`w-full mx-auto rounded-md p-1 ${
              snapshot.isDraggingOver
                ? "border border-dashed border-primary-800"
                : "border border-transparent"
            }`}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex items-center justify-between p-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-inner hover:shadow-md transition-shadow cursor-grab ${
                      snapshot.isDragging ? "bg-success-100" : ""
                    }`}
                    style={{
                      ...provided.draggableProps.style,
                      left: "auto !important",
                      top: "auto !important",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <StarIcon />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          *{item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ModelList;