import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function ModalComp({ styles, children }) {
  const { show } = useSelector((data) => data.web);

  // const handleClose = () => styles.handleClose;
  return (
    <>
      <Modal
        show={show}
        onHide={styles.handleClose}
        className="p-0"
        style={{
          "--bs-modal-width": styles.width,
          background: styles.modalBackground ? styles.modalBackground : "",
        }}
      >
        <Modal.Body
          className={`${styles.background} ${styles.transition}`}
          style={{ height: styles.height }}
        >
          {children}
        </Modal.Body>
        <Modal.Footer
          className={`justify-center ${styles.background} ${styles.transition} border-t-0`}
        >
          <Button
            variant="secondary"
            onClick={styles.handleClose}
            className="text-black border-2 border-primaryLight px-5 hover:bg-secondaryLight hover:border-primaryLight focus:bg-secondaryLight !active:bg-secondaryLight"
          >
            {styles.closeButtonText}
          </Button>

          {styles.buttonText ? (
            <Button
              variant="primary"
              onClick={styles.handleSubmit}
              className="text-black px-5 border-2 border-primaryLight hover:bg-secondaryLight hover:border-primaryLight focus:bg-secondaryLight !active:bg-secondaryLight"
            >
              {styles.buttonText}
            </Button>
          ) : (
            <></>
          )}
          {styles.button2Text ? (
            <Button
              variant="primary"
              onClick={styles.handleSubmit2}
              className="text-white border-2 border-red-500 px-5 bg-red-500 !active:bg-red-500 !focus:bg-red-500"
            >
              {styles.button2Text}
            </Button>
          ) : (
            <></>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;
