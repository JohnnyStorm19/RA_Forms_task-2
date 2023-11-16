export interface IForm  {
    date: string;
    distance: string;
}

export interface IAcc {
    [key: string]: IForm;
}

interface IDeleteCallback {
    (element: React.RefObject<HTMLElement>): void;
}

interface IChangeCallback {
    (element: React.RefObject<HTMLElement>): void;
}

export interface IListProps {
    elements: IForm[];
    onDeleteCallback: IDeleteCallback;
    onChangeItemCallback: IChangeCallback;
}

export interface IRenderedItemProps {
    date: string;
    distance: string;
    onDeleteCallback: IDeleteCallback;
    onChangeItemCallback: IChangeCallback;
}