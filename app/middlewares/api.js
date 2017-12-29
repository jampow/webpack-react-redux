import axios from 'axios';

const defaults = {
  host: 'http://localhost:9090/v1',
  trigger: 'API/',
  actions: {
    handleError: error => ({
      type: 'API/ERROR',
      error
    })
  }
};

const Api = store => next => action => {
  // Se não começar com o gatilho da API, sai do middleware
  if(action.type.indexOf(defaults.trigger) !== 0) {
    return next(action, axios);
  }

  const { type } = action;
  const act = type.split('/')[1];
  const { dispatch } = store;
  const { host } = defaults;
  let method;
  let endpoint;
  let payload;

  switch(act) {

    case 'REMOVE':
      method = 'delete';
      endpoint = `${action.endpoint}/${action.payload.id}`;
      break;

    case 'SAVE':
      payload = action.payload;

      // UPDATE
      if(payload && payload.id) {
        method = 'put';
        endpoint = `${action.endpoint}/${payload.id}`;

      // CREATE
      } else {
        method = 'post';
        endpoint = action.endpoint;
      }
      break;

    default:
      method = 'get';
      endpoint = action.endpoint;
  }

  axios[method](
    [host, endpoint].join('/'),
    JSON.stringify(payload)
  ).then(resp => {
    return dispatch(action.success(resp));
  })
  .catch(resp => dispatch(
    (action.error || defaults.actions.handleError)(resp))
  );

  return next(action);
};

export default Api;
