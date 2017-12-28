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
  const [, act] = action.type.split('/');
  const { dispatch } = store;
  const { trigger, host } = defaults;

  // Se não começar com o prefixo da API, sai sem fazer nada
  if(action.type.indexOf(trigger) !== 0) {
    return next(action, axios);
  }

  axios[act.toLowerCase()]([host, action.endpoint].join('/'))
    .then(resp => dispatch(action.success(resp)))
    .catch(resp => dispatch(
      (action.error || defaults.actions.handleError)(resp))
    );

  console.group(action.type);
  console.info('dispatching: ', action);
  const result = next(action);
  console.log('next state: ', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default Api;
