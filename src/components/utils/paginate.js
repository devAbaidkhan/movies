import _ from 'lodash';

export function paginate(items, pageSIze, pageNumber) {

    console.log(items)
    const startIndex = (pageNumber-1) * pageSIze;
    return _(items).slice(startIndex).take(pageSIze).value();

}