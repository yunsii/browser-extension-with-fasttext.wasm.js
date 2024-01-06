import { getLIDModel } from "fasttext.wasm.js/common";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  async function fastText() {
    const lidModel = await getLIDModel();
    await lidModel.load();
    const text = "中文测试";
    const result = await lidModel.identify(text);
    console.log(result, text); // 'en'
  }

  fastText();
});
