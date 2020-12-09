const initialState = {
  list: [
    {
      title: 'primeira noticias',
      body: 'tteste',
      author: 'edu',
    },
  ],
};

export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
        author: action.payload.author,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body,
          author: action.payload.author,
        };
      }
      break;
    case 'DEL_NOTE':
      let indexList = newList.findIndex((item, index) => {
        if (index == action.payload.key) {
          return true;
        } else {
          return false;
        }
      });

      newList.splice(indexList, 1);

      break;
  }

  return {...state, list: newList};
};
