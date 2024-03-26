import { QuillSvgProps } from "@deriv/quill-icons";

export type TGenericSizes =
    | "2xl"
    | "2xs"
    | "3xl"
    | "3xs"
    | "4xl"
    | "5xl"
    | "6xl"
    | "lg"
    | "md"
    | "sm"
    | "xl"
    | "xs";

export type QuillIconComponent = React.ForwardRefExoticComponent<
    Omit<QuillSvgProps, "ref">
>;
