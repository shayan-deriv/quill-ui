import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ActionSheetExample } from "./mocks/example";
import {
    LabelPairedPlaceholderCaptionBoldIcon,
    LabelPairedXmarkMdBoldIcon,
} from "@deriv/quill-icons";

const icons: Record<string, object | null> = {
    with_icon: <LabelPairedPlaceholderCaptionBoldIcon />,
    none: null,
};

const meta: Meta = {
    title: "Components/Action Sheet/Button Trigger",
    component: ActionSheetExample,
    tags: ["autodocs"],
    args: {
        onClose: fn(),
        title: "Title",
        description: "Description",
        closeIcon: <LabelPairedXmarkMdBoldIcon />,
        isPrimaryButtonDisabled: false,
        isSecondaryButtonDisabled: false,
        shouldCloseOnDrag: true,
        shouldCloseOnPrimaryButtonClick: true,
        shouldCloseOnSecondaryButtonClick: true,
        fullHeightOnOpen: true,
        shouldBlurOnClose: false,
    },
    argTypes: {
        isOpen: { table: { disable: true } },
        isPrimaryButtonDisabled: {
            control: { type: "boolean" },
            description:
                "This prop controls if primary button is disabled or not.",
        },
        isSecondaryButtonDisabled: {
            control: { type: "boolean" },
            description:
                "This prop controls if secondary button is disabled or not.",
        },
        show: { table: { disable: true } },
        shouldCloseOnDrag: {
            control: { type: "boolean" },
            description:
                "This prop controls if action sheet should be closed on drag down or not. Default value: false. Property should be passed to ActionSheet.Portal",
        },
        shouldDetectSwipingOnContainer: {
            table: { type: { summary: "boolean | undefined" } },
            options: ["true", "false"],
            control: { type: "boolean" },
            description:
                "This prop controls if swiping will be detected on the whole Action Sheet, not only on Handlebar. Default value: false. Property should be passed to ActionSheet.Portal",
        },
        showHandlebar: {
            table: { type: { summary: "boolean | undefined" } },
            options: ["true", "false"],
            control: { type: "boolean" },
            description:
                "This prop controls if Handlebar should be visible or not. Default value: true",
        },
        fullHeightOnOpen: {
            description:
                "This props controls is full height when open the actionsheet",
            control: { type: "boolean" },
            table: { type: { summary: "boolean" } },
        },
        handleOpen: { table: { disable: true } },
        handleClose: { table: { disable: true } },
        onOpen: {
            description:
                "Pass your callback function using this method. It will be triggered on the open function. If you are passing the `isOpen` state, provide your `open` `setState` function like this: `onOpen={() => setIsOpen(true)}`.",
        },
        onClose: {
            description:
                "Pass your callback function using this method. It will be triggered on the open function.",
        },
        expandable: {
            control: { type: "boolean" },
            description:
                "This prop controls the expandability of the bottom sheet.",
        },
        type: {
            control: "radio",
            options: ["modal", "non-modal"],
            description:
                "This property is used to specify the type, which offers two options: `modal` and `non-modal`. When set to `modal`, it adds an overlay over the entire body, and clicking on it will close the action sheet. On the other hand, when set to `non-modal`, the area outside of the action sheet remains interactive and no overlay.",
        },
        position: {
            control: "radio",
            options: ["left", "right"],
            description: "This prop will make bottom sheet expandable",
        },
        title: {
            description: "Title for `ActionSheet.Header`",
        },
        description: {
            description: "Description for `ActionSheet.Header`",
        },
        closeIcon: {
            control: false,
            description:
                "This props allowed you to pass in icon for close button in `ActionSheet.Header`",
        },
        icon: {
            description:
                "This props allowed you to pass in icon for `ActionSheet.Header`",
            options: Object.keys(icons),
            mapping: icons,
            control: "radio",
        },
        iconPosition: {
            control: "radio",
            options: ["left", "right"],
            description:
                "This prop controls icon position in `ActionSheet.Header`. Default value - 'right'",
        },
        primaryAction: {
            control: false,
            description:
                "This prop is meant for `ActionSheet.Footer`. It accepts two property: `Content`, which accepts a string, and `onAction`, which takes a function.",
        },
        secondaryAction: {
            control: false,
            description: "Same as `primaryAction`",
        },
        shouldCloseOnPrimaryButtonClick: {
            table: { type: { summary: "boolean | undefined" } },
            options: ["true", "false"],
            control: { type: "boolean" },
            description:
                "This prop controls if Action Sheet should be closed or not when primary button was clicked. Default value: true",
        },
        shouldCloseOnSecondaryButtonClick: {
            table: { type: { summary: "boolean | undefined" } },
            options: ["true", "false"],
            control: { type: "boolean" },
            description:
                "This prop controls if Action Sheet should be closed or not when secondary button was clicked. Default value: true",
        },
        shouldBlurOnClose: {
            table: { type: { summary: "boolean | undefined" } },
            options: ["true", "false"],
            control: { type: "boolean" },
            description:
                "This prop controls if focus should be removed after Action Sheet will be closed. Default value: false",
        },
        alignment: {
            control: "radio",
            options: ["vertical", "horizontal"],
            description:
                "This prop is for `ActionSheet.Footer` buttons alignment",
        },
    },
} satisfies Meta<typeof ActionSheetExample>;

export default meta;
type Story = StoryObj<typeof ActionSheetExample>;

export const ButtonTrigger: Story = {
    args: {
        expandable: true,
        type: "modal",
        position: "right",
        primaryAction: {
            content: "Primary",
            onAction: () => null,
        },
        secondaryAction: {
            content: "Secondary",
            onAction: () => null,
        },
        alignment: "vertical",
        shouldBlurOnClose: false,
    },
};
