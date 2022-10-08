import React, { useContext, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import ItemSummary from "../components/ItemSummary";
import CardSummary from "../components/CardSummary";
import GoldStatCounter from "../components/GoldStatCounter";
import HealthStatCounter from "../components/HealthStatCounter";
import LevelStatCounter from "../components/LevelStatCounter";
import XPStatCounter from "../components/XPStatCounter";
import { createUseStyles } from "react-jss";
import { DeckContext } from "../components/DeckMakerProvider";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: 50,
    justifyContent: "center",
    wrapper2: {
      display: "flex",
      flexWrap: "wrap",
      padding: 150,
      justifyContent: "center",
    },
  },
});

const Play_Mat = (props) => {
  const { deck } = useContext(DeckContext);
  console.log(deck);
  const columnsFromBackend = {
    [uuid()]: {
      name: "In Hand",
      items: deck,
    },
    [uuid()]: {
      name: "Active",
      items: [],
    },
    [uuid()]: {
      name: "Lost",
      items: [],
    },
    [uuid()]: {
      name: "Discard",
      items: [],
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const [columns, setColumns] = useState(columnsFromBackend);
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <HealthStatCounter />
        <XPStatCounter />
        <GoldStatCounter />
        <LevelStatCounter />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <img
                                        src={item.image.props.src}
                                        alt={item.id}
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <ItemSummary items={props.items} item={props.items} />
    </>
  );

  // console.log("----playmat------", props.cards);
  // console.log(deck);
  // return (
  //   <div>
  //     <CardSummary cards={props.cards} deck={props.deck} />
  //   </div>
  // );
};

export default Play_Mat;
