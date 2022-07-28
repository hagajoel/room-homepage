const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");


module.exports = merge(common,{
    mode: "development",

    // error tracking
    devtool: "source-map",

    // development server
    devServer:{
        static:"./dist",
        hot: true
    },


    // output ----------------------------------------------
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js",
        clean: true,
    }
})