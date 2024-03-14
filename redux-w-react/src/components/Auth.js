import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authAction } from '../store';

const Auth = () => {
  const dispatch = useDispatch();

  const handelUserInput = () => {
    dispatch(authAction.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={handelUserInput}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
