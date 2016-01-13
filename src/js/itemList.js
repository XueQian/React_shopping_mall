var ItemList = React.createClass({

    render: function() {

        var items = this.props.items;

        return <div id='itemList'>
            <ul>
                { items.map(function(item) {
                    return <li>
                        <div id='itemImage'>
                            <img src={item.image}/>
                        </div>
                        <div id='itemInfo'>
                            {item.name} | ￥{item.price}
                        </div>
                    </li>
                }) }
            </ul>
        </div>;
    }
});

React.render(
    <ItemList items={itemsData}/>,
    document.body
);
