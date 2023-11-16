import { useRef } from "react";
import { formatDate } from "../helpers/formatDate";
import { IRenderedItemProps } from "../models";


export function RenderedItem({date, distance, onDeleteCallback, onChangeItemCallback}: IRenderedItemProps) {
    const itemRef = useRef(null);
    return (
        <tr
            className="list-item"
            ref={itemRef}
        >
            <td className="item-date" >
                {formatDate(date)}
            </td>
            <td className="item-distance" >
                {distance}
            </td>
            <td 
                className="item-actions"
            >
                <button 
                    type="button"
                    className="item-change-btn"
                    onClick={() => onChangeItemCallback(itemRef)}
                >
                    Изменить!
                </button>
                <button 
                    type="button"
                    className="item-delete-btn"
                    onClick={() => onDeleteCallback(itemRef)}
                >
                    Удалить!
                </button>
            </td>
        </tr>
        
    )
}