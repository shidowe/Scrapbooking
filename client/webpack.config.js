const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV ?? "development",
    target: "web",
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        filename: "dist.bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    devServer: {
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true,
        proxy: [
            {
                context: () => true,
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(__dirname, "tsconfig.json"),
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                type: "asset/resource"
            },
        ],
    },
    devtool: "source-map",
};