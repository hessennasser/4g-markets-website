
const OrderPage = () => {
    const data = [
        {
            id: 1,
            mapLocation: 'https://goo.gl/maps/AYBsZnLgQtKimYmf6',
            storeLocation: 'تموينات العماد ( جدة – حي الاجواد) ',
            orders: "جبنة شدر وسط",
        },
        {
            id: 2,
            mapLocation: 'https://goo.gl/maps/KBwicnCKCqASW3eu6',
            storeLocation: 'تموينات بشية ( جدة – السامر )',
            orders: "جبنة مثلثات 24 قطعة",
        },
        {
            id: 3,
            mapLocation: 'https://goo.gl/maps/ehuzKtTh3DmpQjHBA',
            storeLocation: 'تموينات الزين ( مكة – العزيزية )',
            orders: "زيت قلي دلال",
        },
        {
            id: 4,
            mapLocation: 'https://goo.gl/maps/1A9oKB2pSSK2GdE27',
            storeLocation: 'تموينات متاجر ( الرياض – الدار البيضاء ) ',
            orders: "تموينات متاجر ( الرياض – الدار البيضاء )",
        },
    ];

    return (
        <>
            <h2>Data Table</h2>
            <div className="table-wrapper">
                <table className="data-table"> {/* Add the CSS class */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Map Location</th>
                            <th>Store and Location</th>
                            <th>Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <a href={item.mapLocation} target="_blank" rel="noopener noreferrer">
                                        {item.mapLocation}
                                    </a>
                                </td>
                                <td>{item.storeLocation}</td>
                                <td>{item.orders}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default OrderPage;
