// Static mock of json str from API somewhere.
const MOCKCUSTOMERS = [
    {
      name: 'Veronica Fernandez',
      cc: '123456789001',
      purchases: {
        store1: 'Macys', amt1: '47', fraud1: false,
        store2: 'Trader Joes', amt2: '223', fraud2: false,
        store3: 'ybca.org', amt3: '10', fraud3: false
      },
      summary: ''
    },
    {
      name: 'Adrian Castro',
      cc: '223456789002',
      purchases: {
        store1: 'Sajj', amt1: '12', fraud1: false,
        store2: 'Chevron', amt2: '49', fraud2: false,
        store3: 'Etherium Hut', amt3: '10000', fraud3: false
      },
      summary: ''
    },
    {
      name: 'Rhonda Willis',
      cc: '323456789003',
      purchases: {
        store1: 'Sketchy Food Truck', amt1: '13', fraud1: false,
        store2: 'Vans', amt2: '50', fraud2: false,
        store3: 'Clipper', amt3: '100', fraud3: false
      },
      summary: ''
    }
];

export default MOCKCUSTOMERS;