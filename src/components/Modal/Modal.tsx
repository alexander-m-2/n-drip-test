import classes from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;

    onClose: () => void;
    onSubmit: () => void;
    children: React.ReactNode;
    className: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    onSubmit,
    className,
}) => {
    return isOpen ? (
        <div className={classes.modal}>
            <div className={`${classes.content} ${className}`}>
                {children}

                <button className="modal-close-btn" onClick={onSubmit}>
                    Update
                </button>

                <button className="modal-close-btn" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    ) : null;
};
