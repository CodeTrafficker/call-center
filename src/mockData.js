// Static mock of json str from API somewhere.
const MOCKCUSTOMERS = [
    {
      id: 1,
      name: 'Veronica Fernandez',
      cc: '123456789001',
      ccid: '9001',
      purchases: {
        store1: 'Macys', amt1: '47', fraud1: false,
        store2: 'Trader Joes', amt2: '223', fraud2: false,
        store3: 'ybca.org', amt3: '10', fraud3: false
      },
      summary: ''
    },
    {
      id: 2,
      name: 'Adrian Castro',
      cc: '223456789002',
      ccid: '9002',
      purchases: {
        store1: 'Sajj', amt1: '12', fraud1: false,
        store2: 'Chevron', amt2: '49', fraud2: false,
        store3: 'Etherium Hut', amt3: '10000', fraud3: false
      },
      summary: ''
    },
    {
      id: 3,
      name: 'Rhonda Willis',
      cc: '323456789003',
      ccid: '9003',
      purchases: {
        store1: 'Sketchy Food Truck', amt1: '13', fraud1: false,
        store2: 'Vans', amt2: '50', fraud2: false,
        store3: 'Clipper', amt3: '100', fraud3: false
      },
      summary: ''
    }
];

export default MOCKCUSTOMERS;