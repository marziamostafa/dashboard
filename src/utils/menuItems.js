export const menuItems = [
    {
        section: "Main",
        items: [
            {
                title: "Dashboard",
                icon: "📊",
                path: "/dashboard",
            },
            {
                title: "Super Admin",
                icon: "👤",
                path: "/super-admin",
            },
            {
                title: "Applications",
                icon: "⚙️",
                subItems: [
                    { title: "Email", path: "/apps/email" },
                    { title: "Invoices", path: "/apps/invoices" },
                    { title: "Settings", path: "/apps/settings" },
                ],
            },
            {
                title: "Layouts",
                icon: "📄",
                path: "/layouts",
            },
        ],
    },

    {
        section: "Inventory",
        items: [
            { title: "Products", icon: "📦", path: "/products" },
            { title: "Create Product", icon: "➕", path: "/products/create" },
            { title: "Expired Products", icon: "⏳", path: "/products/expired" },
            { title: "Low Stocks", icon: "📉", path: "/products/low-stock" },

            {
                title: "Category",
                icon: "🏷️",
                subItems: [
                    { title: "Main Category", path: "/category/main" },
                    { title: "Sub Category", path: "/category/sub" },
                ],
            },

            { title: "Brands", icon: "🏢", path: "/brands" },
            { title: "Units", icon: "🧪", path: "/units" },
            { title: "Variant Attributes", icon: "🔧", path: "/variants" },
            { title: "Warranties", icon: "📝", path: "/warranties" },
            { title: "Print Barcode", icon: "🔖", path: "/barcode" },
            { title: "Print QR Code", icon: "🔲", path: "/qr-code" },
        ],
    },

    {
        section: "Stock",
        items: [
            { title: "Manage Stock", icon: "📚", path: "/stock/manage" },
            { title: "Stock Adjustment", icon: "⚖️", path: "/stock/adjust" },
        ],
    },
];
