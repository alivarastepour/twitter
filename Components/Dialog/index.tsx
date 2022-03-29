import NativeDialogActions from "@mui/material/DialogActions";
import NativeDialogContent from "@mui/material/DialogContent";
import NativeDialogTitle from "@mui/material/DialogTitle";
import NativeDialog from "@mui/material/Dialog";

import styles from "../../styles/dialog.module.scss";

const Dialog = ({ children }) => (
  <>
    <NativeDialog
      open={true}
      PaperProps={{
        sx: {
          width: "700px",
          borderRadius: "15px",
          "@media only screen and (max-width: 720px)": {
            width: "100vw",
            height: "100vh",
          },
        },
      }}
    >
      {children}
    </NativeDialog>
  </>
);

const DialogHeader = ({ children }) => (
  <div className={styles.headerContainer}>{children}</div>
);

const DialogTitle = ({ children }) => (
  <NativeDialogTitle>
    <div className={styles.titleContainer}>{children}</div>
  </NativeDialogTitle>
);

const DialogContent = ({ children }) => (
  <NativeDialogContent>
    <div className={styles.formContainer}>{children}</div>
  </NativeDialogContent>
);

const DialogActions = ({ children }) => (
  <NativeDialogActions>
    <div className={styles.actionContainer}>{children}</div>
  </NativeDialogActions>
);

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

export default Dialog;
