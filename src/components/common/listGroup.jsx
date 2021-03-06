
const ListGroup = props => {
    const {items,onItemSelect,textProperty,valueProperty,selectedItem} = props

    return(
        <ul className="list-group">
            {items.map(item =>
                <li key={item[valueProperty]}
                    style={{cursor:'pointer'}}
                    onClick={()=>onItemSelect(item)}
                    className={selectedItem === item[valueProperty] ? "list-group-item active" : "list-group-item "}>
                    {item[textProperty]}
                </li>
            )}
        </ul>
    )
};

ListGroup.defaultProps ={
    textProperty:'name',
    valueProperty:'_id'
}

export default ListGroup;