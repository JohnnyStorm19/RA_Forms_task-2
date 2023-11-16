import { getReducedElements } from "../helpers/getReducedElements"
import { IListProps } from "../models"
import { RenderedItem } from "./RenderedItem"

export function List({elements, onDeleteCallback, onChangeItemCallback}: IListProps) {
    return (
        <table className="table-data-list">
            <thead>
                <tr className="table-data-title">
                    <th>Дата</th>
                    <th>Пройдено, км</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {
                    getReducedElements(elements).map((element, id) => {
                        return <RenderedItem 
                                    key={id} 
                                    date={element.date} 
                                    distance={element.distance} 
                                    onDeleteCallback={onDeleteCallback}
                                    onChangeItemCallback ={onChangeItemCallback}
                                />
                    }) 
                }
            </tbody>
        </table>
    )
}
