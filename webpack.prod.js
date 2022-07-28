const {merge} = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");


module.exports = merge(common,{
    mode: "production",
    devtool: "inline-source-map",


    // output ---------------------------------
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"[name][hash].bundle.js",
        clean: true,
    }
})