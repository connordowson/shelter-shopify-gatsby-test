exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ShopifyCollection: {
      // Add products from the selected section(s)
      products: {
        args: {
          limit: `Int`,
        },
        resolve: async (root, args, context, info) => {
          const allProductsInCollection =
            (await info.originalResolver(root, args, context, info)) || [];

          return args.limit
            ? allProductsInCollection.slice(0, args.limit)
            : allProductsInCollection;
        },
      },
    },
  });
};
