import classes from './RemoveCross.module.css'

type RemoveCrossProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const RemoveCross = ({
    onClick,
}: RemoveCrossProps) => {
    return (
        <div
            className={classes.removeCross}
            onClick={onClick}
        />
    );
};