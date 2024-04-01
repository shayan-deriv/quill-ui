import { ButtonHTMLAttributes, useContext } from "react";
// import { Button } from "../../button";
import { ActionSheetContext } from "../root";
import { IconSize } from "@deriv/quill-icons";
import { QuillIconComponent } from "../../../types";

interface ButtonTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconComponent?: never;
    iconSize?: never;
    iconClassName?: never;
}

type IconTriggerProps = {
    iconComponent?: QuillIconComponent;
    className?: string;
    iconSize?: IconSize;
    iconClassName?: string;
};

type TriggerProps = ButtonTriggerProps | IconTriggerProps;

const Trigger = ({
    iconComponent: Icon,
    iconClassName,
    ...restProps
}: TriggerProps) => {
    const { handleOpen } = useContext(ActionSheetContext);
    if (Icon) {
        return (
            <button onClick={handleOpen} {...restProps}>
                <Icon
                    data-testid="dt-actionsheet-icon-button"
                    className={iconClassName}
                />
            </button>
        );
    }
    return <button onClick={handleOpen} {...restProps} />;
};

Trigger.displayName = "Trigger";

export default Trigger;
