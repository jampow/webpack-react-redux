import axios from 'axios';

const defaults = {
  host: 'http://localhost:9091',
  trigger: 'API/',
  actions: {
    handleError: error => ({
      type: 'API/ERROR',
      error
    })
  }
};

const Api = store => next => action => {
  // Se não começar com o prefixo da API, sai sem fazer nada
  if(action.type.indexOf(defaults.trigger) !== 0) {
    return next(action, axios);
  }

  const { type } = action;
  const [, act] = type.split('/');
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

      if(payload && payload.id) {
        method = 'put';
        endpoint = `${action.endpoint}/${payload.id}`;
      } else {
        method = 'post';
        endpoint = action.endpoint;
      }
      break;

    default:
      method = 'get';
      endpoint = action.endpoint;
  }

  axios[method]([host, endpoint].join('/'), payload)
    .then(resp => {
      return dispatch(action.success(resp));
    })
    .catch(resp => dispatch(
      (action.error || defaults.actions.handleError)(resp))
    );

  return next(action);
};

export default Api;
