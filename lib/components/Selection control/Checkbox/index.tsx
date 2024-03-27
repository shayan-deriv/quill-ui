import {
    ComponentProps,
    forwardRef,
    ReactNode,
    useState,
    useEffect,
} from "react";
import clsx from "clsx";
import "./checkbox.scss";
import {
    StandaloneSquareCheckFillIcon,
    StandaloneSquareBoldIcon,
    StandaloneSquareMinusFillIcon,
} from "@deriv/quill-icons";
import { Text } from "../../Typography";

interface CheckboxProps
    extends Omit<
        ComponentProps<"input">,
        "placeholder" | "defaultChecked" | "size"
    > {
    indeterminate?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
    label: ReactNode | string;
    labelClassName?: string;
    onChange?: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLSpanElement>,
    ) => void;
    wrapperClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            checked = false,
            disabled = false,
            indeterminate = false,
            size = "sm",
            label,
            labelClassName,
            name,
            onChange,
            wrapperClassName,
            ...rest
        },
        ref,
    ) => {
        const [is_checked, setIsChecked] = useState(checked);
        const [is_indeterminate, setIsIndeterminate] = useState(indeterminate);

        useEffect(() => {
            setIsChecked(checked);
            setIsIndeterminate(indeterminate);
        }, [checked, indeterminate]);

        const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
            e,
        ) => {
            e.stopPropagation();
            if (is_indeterminate) {
                setIsIndeterminate(!is_indeterminate);
                setIsChecked(false);
            } else {
                setIsChecked(!is_checked);
            }
            onChange?.(e);
        };

        const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
            e.stopPropagation();
            if (e.key === "Enter" || e.key === " ") {
                if (is_indeterminate) {
                    setIsIndeterminate(!is_indeterminate);
                    setIsChecked(false);
                } else {
                    setIsChecked(!is_checked);
                }
                onChange?.(e);
            }
        };

        const uncheckedIcon = is_indeterminate ? (
            <StandaloneSquareMinusFillIcon
                iconSize="sm"
                className={clsx("quill-checkbox__icon", {
                    "quill-checkbox__icon--disabled": disabled,
                })}
            />
        ) : (
            <StandaloneSquareBoldIcon
                iconSize="sm"
                className={clsx(
                    "quill-checkbox__icon",
                    "quill-checkbox__icon--default",
                    {
                        "quill-checkbox__icon--disabled": disabled,
                    },
                )}
            />
        );

        return (
            <div className={clsx("quill-checkbox", wrapperClassName)}>
                <div className="quill-checkbox__wrapper">
                    <input
                        id={rest.id ?? name}
                        className="quill-checkbox__box"
                        type="checkbox"
                        checked={is_checked}
                        disabled={disabled}
                        ref={ref}
                        name={name}
                        onChange={onInputChange}
                        onKeyDown={onKeyDown}
                        {...rest}
                    />
                    {is_checked ? (
                        <StandaloneSquareCheckFillIcon
                            iconSize="sm"
                            className={clsx("quill-checkbox__icon", {
                                "quill-checkbox__icon--disabled": disabled,
                            })}
                        />
                    ) : (
                        uncheckedIcon
                    )}
                </div>
                <label htmlFor={rest.id ?? name}>
                    <Text
                        size={size}
                        as="span"
                        className={clsx(
                            "quill-checkbox__label",
                            labelClassName,
                        )}
                        disabled={disabled}
                    >
                        {label}
                    </Text>
                </label>
            </div>
        );
    },
);
