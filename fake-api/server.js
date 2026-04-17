const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8081;

// Danh sách dữ liệu chung (12 sản phẩm)
const allProducts = [
    { id: 1, thumb: '/images/website/product-list_1.png', prodName: 'Eco Wrapping Bag 1', slug: 'eco-bag-1', sku: 'SKU-001' },
    { id: 2, thumb: '/images/website/product-list_2.png', prodName: 'Eco Wrapping Bag 2', slug: 'eco-bag-2', sku: 'SKU-002' },
    { id: 3, thumb: '/images/website/product-list_1.png', prodName: 'Sustainable Eco Bag 3', slug: 'eco-bag-3', sku: 'SKU-003' },
    { id: 4, thumb: '/images/website/product-list_2.png', prodName: 'Plastic Alternative Wrap', slug: 'alt-wrap', sku: 'SKU-004' },
    { id: 5, thumb: '/images/website/product-list_1.png', prodName: 'Compostable Bio Straws', slug: 'comp-straw', sku: 'SKU-005' },
    { id: 6, thumb: '/images/website/product-list_2.png', prodName: 'Biodegradable Gloves', slug: 'bio-gloves', sku: 'SKU-006' },
    { id: 7, thumb: '/images/website/product-list_1.png', prodName: 'Premium Paper Cup', slug: 'paper-cup', sku: 'SKU-007' },
    { id: 8, thumb: '/images/website/product-list_2.png', prodName: 'Sustainable Lunch Box', slug: 'sus-box', sku: 'SKU-008' },
    { id: 9, thumb: '/images/website/product-list_1.png', prodName: 'Green Storage Bin', slug: 'green-bin', sku: 'SKU-009' },
    { id: 10, thumb: '/images/website/product-list_2.png', prodName: 'Industrial Eco Pallet Wrap', slug: 'eco-pallet', sku: 'SKU-010' },
    { id: 11, thumb: '/images/website/product-list_1.png', prodName: 'Kitchen Bio Waste Bag', slug: 'kitchen-bag', sku: 'SKU-011' },
    { id: 12, thumb: '/images/website/product-list_2.png', prodName: 'Garden Trash Heavy Bag', slug: 'garden-bag', sku: 'SKU-012' }
];

// 1. GET /api/Category/GetListCategory
app.get('/api/Category/GetListCategory', (req, res) => {
    res.json({
        result: [
            {
                id: 1, thumb: '/images/website/product-list_1.png', categoryName: 'Consumer Packaging', link: '/category/consumer-packaging', shortDesc: '100% compostable models perfectly fitted for regular everyday tasks.', description: 'Consumer packaging description showing extended info for consumers looking for green solutions.', parentId: 0,
                children: [
                    { id: 11, thumb: '/images/website/product-list_1.png', categoryName: 'Food Wrap', link: '/category/food-wrap', shortDesc: 'Wrap it easily', description: 'The best wrap on the market', parentId: 1 },
                    { id: 12, thumb: '/images/website/product-list_2.png', categoryName: 'Shopping Bags', link: '/category/shopping-bags', shortDesc: 'Carry heavy items safely', description: 'Strong bio bags suitable for grocer', parentId: 1 }
                ]
            },
            {
                id: 2, thumb: '/images/website/product-list_2.png', categoryName: 'Industrial Packaging', link: '/category/industrial-packaging', shortDesc: 'Heavy duty packaging built for businesses.', description: 'Industrial packaging is made for large shipments.', parentId: 0,
                children: [
                    { id: 21, thumb: '/images/website/product-list_2.png', categoryName: 'Pallet Wraps', link: '/category/pallet-wraps', shortDesc: 'Support heavy pallets', description: 'Our mega wraps for distribution.', parentId: 2 }
                ]
            },
            { id: 3, thumb: '/images/website/product-list_1.png', categoryName: 'Hospitality Supplies', link: '/category/hospitality', shortDesc: 'Cups, forks and eco straws.', description: 'For luxury hotels and zero-waste dining concepts.', parentId: 0, children: [] }
        ]
    });
});

// 2. GET /api/Category/GetCategoryByUrl
app.get('/api/Category/GetCategoryByUrl', (req, res) => {
    const url = req.query.url || 'food-wrap';
    res.json({
        result: {
            id: 1,
            thumb: '/images/website/product-list_1.png',
            categoryName: `Category Details: ${url.replace('-', ' ').toUpperCase()}`,
            description: '<p>Automatically generating rich info: Biodegradable and safe for direct food contact. It acts just like regular cling film but provides extensive eco-friendly properties in any composting condition.</p>',
            children: [{ id: 101, categoryName: 'Small Wraps' }, { id: 102, categoryName: 'Large Wraps' }],
            filterList: []
        }
    });
});

// 3. GET /api/Product/GetProductByCategory
app.get('/api/Product/GetProductByCategory', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    // Paginate by 10 as configured in frontend
    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    res.json({
        result: {
            items: allProducts.slice(start, end),
            totalCount: allProducts.length
        }
    });
});

// 4. GET /api/Product/GetProductByUrl
app.get('/api/Product/GetProductByUrl', (req, res) => {
    const url = req.query.url || 'demo-product';
    res.json({
        result: {
            id: Math.floor(Math.random() * 100),
            thumb: '/images/website/product_1.png',
            prodName: `High Quality Product [${url}]`,
            shortDesc: 'This is a premium compostable product made to preserve the environment seamlessly while matching your daily operational needs.',
            description: '<p>Our advanced <b>PBAT and PLA blend</b> is specially designed for maximum stretch. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.</p><ul><li>Feature 1: Completely compostable</li><li>Feature 2: TUV Austria Certified</li><li>Feature 3: High tear resistance</li></ul>',
            specification: '<table class="table" style="width:100%; text-align:left;"><tr><th>Specification</th><th>Value</th></tr><tr><td>Width</td><td>20cm</td></tr><tr><td>Length</td><td>50cm</td></tr><tr><td>Material Thickness</td><td>15 micron</td></tr></table>',
            sku: 'SKU-' + url.toUpperCase(),
            dataSheet: 'http://example.com/datasheet.pdf',
            media: [
                '/images/website/product_1.png',
                '/images/website/product_2.png',
                '/images/website/product_3.png'
            ]
        }
    });
});

// 5. GET /api/Product/GetRelatedProducts
app.get('/api/Product/GetRelatedProducts', (req, res) => {
    res.json({
        result: allProducts.slice(4, 9) // Trả về 5 sản phẩm
    });
});

// 6. GET /api/Product/SearchProducts
app.get('/api/Product/SearchProducts', (req, res) => {
    res.json({
        result: {
            products: allProducts, // Trả full cho search test
            categories: [
                { id: 1, categoryName: 'Consumer Packaging' },
                { id: 2, categoryName: 'Industrial Packaging' },
                { id: 3, categoryName: 'Hospitality Supplies' }
            ],
            filters: []
        }
    });
});

// 7. POST /api/Product/FilterSearchProduct
app.post('/api/Product/FilterSearchProduct', (req, res) => {
    const { textSearch, categories, page } = req.body;

    // Giả lập filter bằng textSearch
    let filtered = allProducts;
    if (textSearch) {
        filtered = allProducts.filter(p => p.prodName.toLowerCase().includes(textSearch.toLowerCase()));
    }

    res.json({
        result: {
            products: filtered,
            totalCount: filtered.length
        }
    });
});

app.listen(PORT, () => {
    console.log(`Fake API server running on http://localhost:${PORT}`);
});
