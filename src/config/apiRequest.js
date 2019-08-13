let isDev = /localhost/.test(window.location.origin);
console.log('isdev', isDev);
let base_url = 'https://workforce-api.herokuapp.com/api';

const post = (action, request_data) => {
  return new Promise((resolve, reject) => {
    let route = action === null ? '/' : action;

    fetch(`${base_url}${route}`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('admin'))[0].token}` || ''
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDQ2ZGY3OTk4NzIxMDAxZWMxZjQ5NCIsImlhdCI6MTU2NDc2NTcxOCwiZXhwIjoxNTY1MzcwNTE4fQ.MjDjpsLAlPsZyODDzatBBz5zNNI0MnVClWsQoYsdu7I'
      },
      body: JSON.stringify(request_data)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const get = action => {
  let route = action === null ? '/' : action;
  return new Promise((resolve, reject) => {
    fetch(`${base_url}${route}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-access-token': localStorage.getItem('admin') || ''
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export { post, get };
