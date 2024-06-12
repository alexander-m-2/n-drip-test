import { useState } from "react";
import { Post } from "../../types/post";
import { Modal } from "../Modal";
import classes from "./EditPostModal.module.css";

type EditPostModalProps = {
    post: Post;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: Post) => void;
};

export const EditPostModal = ({
    post,
    isOpen,
    onSubmit,
    onClose,
}: EditPostModalProps) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = () => {
        onSubmit({ ...post, title, body });
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            className={classes.content}
        >
            <form onSubmit={handleSubmit}>
                <textarea
                    value={title}
                    onChange={handleTitleChange}
                    className={classes.input}
                />
                <textarea
                    value={body}
                    onChange={handleBodyChange}
                    className={classes.input}
                />
            </form>
        </Modal>
    );
};
