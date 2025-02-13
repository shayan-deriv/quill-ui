import { Meta, StoryObj } from "@storybook/react";
import TextField from ".";
import { StandaloneCircleUserRegularIcon } from "@deriv/quill-icons";
import { Status, Variants } from "../base";

const icons: Record<string, object | null> = {
    with_icon: (
        <StandaloneCircleUserRegularIcon
            iconSize="sm"
            fill="var(--component-textIcon-normal-default)"
        />
    ),
    none: null,
};

const placeholder = "Placeholder";

const variants: Record<string, Variants> = {
    fill: "fill",
    outline: "outline",
};

const status: Record<string, Status> = {
    neutral: "neutral",
    success: "success",
    error: "error",
};

const message = "Status message goes here";

const meta = {
    title: "Components/Inputs/Text Field",
    component: TextField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        type: "text",
        disabled: false,
        fieldMarker: false,
        required: false,
        show_counter: false,
        shouldRound: true,
        allowDecimals: false,
    },
    argTypes: {
        type: {
            control: "text",
        },
        id: {
            control: "text",
            description: "id to the input element",
        },
        allowDecimals: {
            description: "input type number to allow decimal values",
        },
        allowSign: {
            description:
                "input type number to allow negative and poisitive sign only on decimal value",
        },
        inputSize: {
            control: {
                type: "radio",
            },
            options: ["sm", "md", "lg"],
            table: {
                defaultValue: { summary: "lg" },
            },
        },
        maxLength: {
            control: {
                type: "number",
            },
        },
        leftIcon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: "select",
            },
        },
        status: {
            control: {
                type: "radio",
            },
            options: ["neutral", "success", "error"],
            table: {
                defaultValue: { summary: "neutral" },
            },
        },
        shouldRound: {
            control: "boolean",
        },
        variant: {
            control: {
                type: "radio",
            },
            options: ["outline", "fill"],
            table: {
                defaultValue: { summary: "outline" },
            },
        },
        label: {
            control: {
                type: "text",
            },
        },
        textAlignment: {
            control: {
                type: "radio",
            },
            options: ["left", "center"],
            table: {
                defaultValue: { summary: "left" },
            },
        },
        message: {
            control: {
                type: "text",
            },
        },
        value: {
            type: "number",
        },
        regex: {
            control: {
                type: "text",
            },
        },
    },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder,
    },
};
export const OutlineSuccess: Story = {
    args: {
        placeholder,
        variant: variants.outline,
        status: status.success,
    },
};
export const FillError: Story = {
    args: {
        placeholder,
        variant: variants.fill,
        status: status.error,
    },
};
export const Disabled: Story = {
    args: {
        placeholder,
        disabled: true,
        variant: variants.outline,
    },
};

export const WithLabel: Story = {
    args: {
        placeholder,
        label: "Label",
    },
};

export const WithLeftIconAndLabel: Story = {
    args: {
        placeholder,
        label: "Label",
        leftIcon: <StandaloneCircleUserRegularIcon iconSize="sm" />,
    },
};

export const ReadonlyWithValue: Story = {
    args: {
        leftIcon: <StandaloneCircleUserRegularIcon iconSize="sm" />,
        value: "John Doe",
        status: "neutral",
        readOnly: true,
    },
};

export const WithStatusMessage: Story = {
    args: {
        placeholder,
        variant: variants.outline,
        status: status.success,
        message,
    },
};

export const StatusMessageWithCharacterCounter: Story = {
    args: {
        placeholder,
        variant: variants.outline,
        status: status.error,
        message,
        show_counter: true,
        maxLength: 15,
    },
};

export const WithoutRounding: Story = {
    args: {
        type: "number",
        allowDecimals: true,
        decimals: 2,
        shouldRound: false,
    },
};
