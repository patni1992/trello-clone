const boards = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      return { ...state, [action.payload.id]: action.payload };
    }
    case "ADD_NEW_LIST": {
      const { boardId, id } = action.payload;
      return {
        ...state,
        [boardId]: { ...state[boardId], lists: [...state[boardId].lists, id] }
      };
    }
    case "MOVE_LIST": {
      const { sourceIndex, destinationIndex, boardId } = action.payload;
      const lists = [...state[boardId].lists];
      const listId = lists.splice(sourceIndex, 1)[0];
    
      lists.splice(destinationIndex, 0, listId);
     
      return {
        ...state,
        [boardId]: { ...state[boardId], lists }
      }
    }
    default:
      return state;
  }
};

export default boards;
