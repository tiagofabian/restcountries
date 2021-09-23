const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jep?g)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "error" : false,
        maxEntrypointSize: 500000,
        maxAssetSize: 500000,
    },
    // devtool: "eval-cheap-module-source-map",
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
    },
};