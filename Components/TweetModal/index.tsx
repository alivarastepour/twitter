import Tweet from "../Tweet";

import Modal from "@mui/material/Modal";

import { Wrapper } from "./tweetModal.styles";

import { TtweetModal } from "./Handlers/TtweetModal";

const TweetModal = ({ open, onClose }: TtweetModal) => (
  <>
    <Modal open={open} onClose={onClose}>
      <Wrapper>
        <div className="tm-container">
          <Tweet who={"me"} isModal={true} />
        </div>
      </Wrapper>
    </Modal>
  </>
);

export default TweetModal;
