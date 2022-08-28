import Tweet from "../Tweet";

import { InnerContainer, Wrapper } from "./tweetModal.styles";

import { TtweetModal } from "./Handlers/TtweetModal";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const TweetModal = ({ open, setOpen }: TtweetModal) => (
  <>
    <Modal open={open} onClose={() => setOpen(false)}>
      <Wrapper>
        <InnerContainer>
          <div className="close-container">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="tweet-container">
            <Tweet isModal={true} who={"hi"} />
          </div>
        </InnerContainer>
      </Wrapper>
    </Modal>
  </>
);

export default TweetModal;
