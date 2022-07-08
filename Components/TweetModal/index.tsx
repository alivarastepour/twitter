import {Wrapper} from './tweetModal.styles';
import Modal from "@mui/material/Modal";
import Tweet from "../Tweet";

const TweetModal = ({open, onClose}) => {
    return <>
        <Modal open={open} onClose={onClose}>
            <Wrapper>
                <div className='tm-container'>
                    <Tweet who={'me'} isModal={true}/>
                </div>
            </Wrapper>
        </Modal>
    </>
}

export default TweetModal;