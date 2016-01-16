var ItemList = React.createClass({

    getInitialState: function() {

        return {data: {items: []}};
    },
    componentDidMount: function() {

        var that = this;

        $.get(this.props.url, function(data) {
            that.setState({data: data});
        });
    },

    render: function() {

        var items = this.state.data.items;

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
    <ItemList url='./src/data/items.json'/>,
    document.body
);



