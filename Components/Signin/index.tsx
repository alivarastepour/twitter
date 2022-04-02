import Dialog from "../Dialog";
import styles from '../../styles/SigninPage/signin.module.scss'
const Signin = () => {
  return <>
    <Dialog>
      <Dialog.Title>
        <Dialog.Header/>
        <div className={`font font-eb ${styles.header}`}>Sign in to Twitter</div>
      </Dialog.Title>
    </Dialog>
  </>;
};

export default Signin;
