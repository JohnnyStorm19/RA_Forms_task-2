import { IForm, IAcc } from "../models";


function sortElements(elements:IForm[]) {
    const sortedArr = elements.sort((a: IForm, b: IForm) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return sortedArr;
}

export function getReducedElements(elements: IForm[]) {
    const sortedArray = sortElements(elements);

    const reducedArray = Object.values(
        sortedArray.reduce((acc: IAcc, { date, distance }) => {
          acc[date] = acc[date] || { date, distance: 0 };
          acc[date].distance += Number(distance);
          return acc;
        }, {} as IAcc)
      );

    return reducedArray;
}