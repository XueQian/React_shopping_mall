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

var itemsData = [
    {
        id: 1,
        name: 'item1',
        price: '100',
        image: 'src/imgs/F1.png'
    },
    {
        id: 2,
        name: 'item2',
        price: '200',
        image: 'src/imgs/F2.png'
    },
    {
        id: 3,
        name: 'item3',
        price: '100',
        image: 'src/imgs/F3.png'
    },
    {
        id: 4,
        name: 'item4',
        price: '100',
        image: 'src/imgs/F4.png'
    },
    {
        id: 5,
        name: 'item5',
        price: '100',
        image: 'src/imgs/F5.png'
    }
];

React.render(
    <ItemList items={itemsData}/>,
    document.body
);
