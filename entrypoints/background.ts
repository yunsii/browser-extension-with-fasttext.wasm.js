import { LanguageIdentificationModel, initializeFastTextModule } from "fasttext.wasm.js/common";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  async function fastText() {
    await initializeFastTextModule({
      locateFile: (url) => {
        return browser.runtime.getURL(url as any);
      },
    });

    const model = new LanguageIdentificationModel({
      // Specific model path under public dir,
      // You can download it from https://fasttext.cc/docs/en/language-identification.html
      modelHref: browser.runtime.getURL("/models/lid.176.ftz"),
    });
    await model.load();
    const text = "中文测试";
    const result = await model.identify(text);
    console.log(result, text); // 'en'
  }

  fastText();
});
