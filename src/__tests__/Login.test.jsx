import { loginUser } from '../Auth/sagas';

describe('Login saga', () => {
  it('check wrong credentials', event => {
    const payload = {
      email: 'wrongUsername',
      password: 'wrongPassword',
    };

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1;
    const login = loginUser({ payload });
    // const firstStep = login.next();
    //event.deepEqual(login.next().value, put(1000), 'counter Saga must call delay(1000)')
    login.next();
    const response = login.next().value.PUT.action.payload.payload;
    console.log('response', response);
    expect(response.email).toEqual('wrongUsername');
    expect(response.password).toEqual('wrongPassword');
  });
});
