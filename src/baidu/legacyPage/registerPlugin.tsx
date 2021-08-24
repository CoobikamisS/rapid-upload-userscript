export default function registerPlugin() {
  unsafeWindow.define(
    "function-widget:mengzonefire/rapidupload-userscript.js",
    (_require: any, exports: any, _module: any) => {
      exports.start = function (_context: any, module: any) {
        if (!module || module.config.name === "generateBdlink") {
          // 生成秒传代码入口
        } else if (module.config.name === "rapidupload") {
          // 转存秒传代码入口
        }
      };
    }
  );

  unsafeWindow.manifest.push({
    name: "秒传链接提取",
    group: "moe.cangku.mengzonefire",
    version: "1.0",
    type: "1",
    description: "用于转存百度网盘秒传链接",
    buttons: [
      {
        conditions: {
          pageModule: "list",
        },
        index: 5,
        disabled: "none",
        color: "blue blue-upload",
        icon: "icon-disk",
        title: "秒传链接",
        name: "rapidupload",
        position: "tools",
      }, // 秒传转存按钮, 仅在文件列表视图的上方工具栏显示
      {
        conditions: {
          excludeDirType: "sourceHolder,cardHolder,shareHolder",
        },
        index: 0,
        title: "生成秒传",
        icon: "icon-share",
        name: "generateBdlink",
        position: "listTools",
      }, // 秒传生成按钮, 选中文件/目录后在上方工具栏显示
    ],
    contextMenu: [
      {
        conditions: {
          excludeDirType: "sourceHolder,cardHolder,shareHolder",
          pageModule: "list,share,search,category,searchGlobal",
        },
        index: 6,
        type: "file",
        title: "生成秒传",
        keyboard: "g",
        disabled: "disable",
        name: "generateBdlink",
      }, // 秒传生成右键菜单 module参数返回空
    ],
    preload: false,
    depsFiles: [],
    entranceFile: "function-widget:mengzonefire/rapidupload-userscript.js",
    pluginId: "rapiduploadUserscript",
  });
}