import NativeDialogActions from "@mui/material/DialogActions";
import NativeDialogContent from "@mui/material/DialogContent";
import NativeDialogTitle from "@mui/material/DialogTitle";
import NativeDialog from "@mui/material/Dialog";

import styles from "../../styles/Utils/dialog.module.scss";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import TwitterLogo from "../Logo/Twitter";

const Dialog = ({children}) => (
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

const DialogHeader = () => (
    <div className={styles.headerContainer}>
        <div style={{marginRight: "37%"}}>
            <IconButton>
                <Link href="/" passHref>
                    <CloseIcon/>
                </Link>
            </IconButton>
        </div>
        <div>
            <TwitterLogo size="S"/>
        </div>
    </div>
);

const DialogTitle = ({children}) => (
    <NativeDialogTitle>
        <div className={styles.titleContainer}>{children}</div>
    </NativeDialogTitle>
);

const DialogContent = ({children}) => (
    <NativeDialogContent>
        <div className={styles.formContainer}>{children}</div>
    </NativeDialogContent>
);

const DialogActions = ({children}) => (
    <NativeDialogActions>
        <div className={styles.actionContainer}>{children}</div>
    </NativeDialogActions>
);

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

export default Dialog;
