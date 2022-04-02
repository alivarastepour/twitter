import Dialog from "../Dialog";
import styles from "../../styles/SigninPage/signin.module.scss";
import ThirdPartyAuth from "../Buttons/ThirdPartyAuth";
import { Button } from "../Buttons/MainpageButtonWrapper";
import buttonStyles from "../../styles/Button/button.module.scss";
import Divider from "../Divider";
import { TextField } from "@mui/material";

const Signin = () => {
  return (
    <>
      <Dialog>
        <Dialog.Title>
          <Dialog.Header />
          <div className={`font font-eb ${styles.header}`}>
            Sign in to Twitter
          </div>
        </Dialog.Title>
        <Dialog.Content>
          <div className={styles.contentContainer}>
            <div className={styles.contentItem}>
              <Button className={buttonStyles.whiteButton}>
                <ThirdPartyAuth state="in" company="Google" />
              </Button>
            </div>
            <div className={styles.contentItem}>
              <Button className={buttonStyles.whiteButton}>
                <ThirdPartyAuth state="in" company="Apple" />
              </Button>
            </div>
            <div className={styles.contentItem}>
              <Divider orientation="horizontal" text="or" width={300} />
            </div>
            <div className={styles.contentItem}>
              <TextField
                sx={{ width: 300 }}
                label={<div className="font">username</div>}
              />
            </div>
            <div className={styles.contentItem}>
              <TextField
                sx={{ width: 300 }}
                label={<div className="font">password</div>}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default Signin;
