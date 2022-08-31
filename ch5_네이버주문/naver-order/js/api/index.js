async function fetchGetRecentOrders(params) {
    const response = await fetch('http://localhost:1234/recent-orders');
    const data = await response.json();
    return data;
}

export {fetchGetRecentOrders}
