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
  switch (action.type) {
    case 'ADD_NOTE':
      break;
  }

  return state;
};
