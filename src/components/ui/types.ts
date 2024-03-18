export type JustifyContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";

export type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

export enum FlexDirection {
    ROW = "row",
    COL = "column"
}

export type StyledTransientProps<TPropsType> = {
    readonly [Propname in keyof TPropsType as `$${ string & Propname }`]: TPropsType[Propname];
}
