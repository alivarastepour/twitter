import Modal from "@mui/material/Modal";
import { Content, Wrapper } from "./editProfile.styles";
const EditProfile = ({ open, setOpen }) => {
  console.log("saalam");

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Wrapper>
          <Content>salam</Content>
        </Wrapper>
      </Modal>
    </>
  );
};

export default EditProfile;
