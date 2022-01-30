import QRCode from "qrcode";
import "./reset.css";
import "./style.css";

interface Data {
  title: string;
  next?: Data[];
  url?: string;
  methodTitle?: string;
  method?: string;
  description?: string;
  reservation?: string;
}

const data: Data[] = [
  {
    title: "MNP予約番号関連",
    next: [
      {
        title: "キャリア",
        next: [
          {
            title: "Docomo",
            url: "https://www.nttdocomo.co.jp/mydocomo/",
            methodTitle: "MNP予約番号の手順（2021/12/25更新）",
            method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                        受付時間：9:00～21:30 `,
            description: `契約端末ダイアル後「4→2→2→暗証番号」
                        主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
          },
          {
            title: "au",
            url: "https://www.nttdocomo.co.jp/mydocomo/",
            methodTitle: "MNP予約番号の手順（2021/12/25更新）",
            method: "ここにauのやり方を記載",
            description: "ここにauの補足説明とかを記載",
          },
        ],
      },
      {
        title: "オンラインプラン",
        next: [
          {
            title: "Docomo",
            url: "https://www.nttdocomo.co.jp/mydocomo/",
            methodTitle: "MNP予約番号の手順（2021/12/25更新）",
            method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                        受付時間：9:00～21:30 `,
            description: `契約端末ダイアル後「4→2→2→暗証番号」
                        主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
          },
        ],
      },
      {
        title: "格安SIM",
        next: [
          {
            title: "Docomo",
            url: "https://www.nttdocomo.co.jp/mydocomo/",
            methodTitle: "MNP予約番号の手順（2021/12/25更新）",
            method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                        受付時間：9:00～21:30 `,
            description: `契約端末ダイアル後「4→2→2→暗証番号」
                        主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
          },
        ],
      },
    ],
  },
  {
    title: "インターネット解約関連",
    next: [
      {
        title: "フレッツ光 / コラボ光",
        url: "https://www.nttdocomo.co.jp/mydocomo/",
        methodTitle: "MNP予約番号の手順（2021/12/25更新）",
        method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                  受付時間：9:00～21:30 `,
        description: `契約端末ダイアル後「4→2→2→暗証番号」
                  主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
      },
      {
        title: "Ｊ：ＣＯＭ",
        url: "https://www.nttdocomo.co.jp/mydocomo/",
        methodTitle: "MNP予約番号の手順（2021/12/25更新）",
        method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                  受付時間：9:00～21:30 `,
        description: `契約端末ダイアル後「4→2→2→暗証番号」
                  主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
      },
      {
        title: "au ひかり",
        url: "https://www.nttdocomo.co.jp/mydocomo/",
        methodTitle: "MNP予約番号の手順（2021/12/25更新）",
        method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                  受付時間：9:00～21:30 `,
        description: `契約端末ダイアル後「4→2→2→暗証番号」
                  主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
      },
    ],
  },
  {
    title: "インターネットエリア検索",
    next: [
      {
        title: "キャリア",
        next: [
          {
            title: "Docomo",
            url: "https://www.nttdocomo.co.jp/mydocomo/",
            methodTitle: "MNP予約番号の手順（2021/12/25更新）",
            method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                    受付時間：9:00～21:30 `,
            description: `契約端末ダイアル後「4→2→2→暗証番号」
                    主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
          },
        ],
      },
    ],
  },
];

const a = (data: Data[], history: Data[][]) => {
  const ul = document.querySelector("main > ul")!;
  ul.innerHTML = "";
  const info = document.querySelector(".info")!;
  info.innerHTML = "";

  const back = document.querySelector("#back")!;

  if (history.length !== 0) {
    back.addEventListener("click", () => {
      a(history[history.length - 1], history.slice(0, history.length - 2));
    });
  }

  data.forEach((v) => {
    // リスト
    const li = document.createElement("li");
    // ボタン
    const button = document.createElement("button");
    button.classList.add("menu-btn")
    li.appendChild(button);
    button.innerHTML = v.title;

    button.addEventListener("click", () => {
      history.push(data);
      if (v.next) {
        a(v.next, history);
      } else {
        ul.innerHTML = "";

        if (v.url) {
          const url = document.createElement("a");
          url.innerHTML = v.url;
          info.appendChild(url);

          const qrcode = document.createElement("canvas");
          info.appendChild(qrcode);
          QRCode.toCanvas(qrcode, v.url);
        }

        if (v.description) {
          const description = document.createElement("p");
          description.innerHTML = v.description;
          info.appendChild(description);
        }

        if (v.methodTitle) {
          const methodTitle = document.createElement("h3");
          methodTitle.innerHTML = v.methodTitle;
          info.appendChild(methodTitle);
        }

        if (v.method) {
          const method = document.createElement("p");
          method.innerHTML = v.method;
          info.appendChild(method);
        }
      }
    });
    ul.appendChild(li);
  });
};

a(data, []);
