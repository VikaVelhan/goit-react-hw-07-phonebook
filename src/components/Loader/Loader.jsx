import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <div className={css.Loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
      <b className={css.LoaderText}>Your phonebook is loading...</b>
    </div>
  );
};

export default Loader;
