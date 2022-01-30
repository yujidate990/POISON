// import QRCode from "qrcode";
import "./reset.css";
import "./font.css"
import "./style.css";

interface Data {
  id?: string;
  title: string;
  next?: Data[];
  url?: string;
  methodTitle?: string;
  method?: string;
  description?: string;
  reservation?: string;
}

const db: Data[] = [
  {
    title: "MNP予約番号関連",
    next: [
      {
        title: "キャリア",
        next: [
          {
            id: "docomo",
            title: "Docomo",
            url: "https://www.nttdocomo.co.jp/mydocomo/",
            methodTitle: "MNP予約番号の手順（2021/12/25更新）",
            method: ` スマホかパソコンから「マイドコモ（My docomo）」にアクセス
                        受付時間：9:00～21:30 `,
            description: `契約端末ダイアル後「4→2→2→暗証番号」
                        主回線と子回線を反転させるようにオペレーターに依頼するべし。`,
          },
          {
            id: "softbank",
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


const ramen = (data: Data, history: Data[]) => {
  const main = document.querySelector("main")!;
  main.innerHTML = "";

  const saisho = document.createElement("button");
  saisho.innerHTML = "最初に戻る";
  main.appendChild(saisho);

  saisho.addEventListener("click", () => {
    ramen({title: "root", next: db}, []);
  });

  const back = document.createElement("button")!;
  back.id = "back";
  back.innerHTML = "戻る"
  main.appendChild(back);

  const ul = document.createElement("ul");
  main.appendChild(ul);

  const info = document.createElement("div");
  info.classList.add("info");
  main.appendChild(info);

  if (history.length !== 0) {
    back.addEventListener("click", () => {
      ramen(history[history.length - 1], history.slice(0, history.length - 1));
    });
  }

  if (data.next) {
    data.next.forEach((v) => {
      // リスト
      const li = document.createElement("li");
      // ボタン
      const button = document.createElement("button");
      button.classList.add("menu-btn")
      li.appendChild(button);
      button.innerHTML = v.title;
  
      button.addEventListener("click", () => {
        ramen(v, [...history, data]);
      });
      ul.appendChild(li);
    });  
  } else {
    // idが設定されていない場合はルートに遷移する
    if (data.id) {
      window.location.href = `/pages/${data.id}.html`;
    } else {
      window.location.href = "/";
    }
    // ul.innerHTML = "";
  
    // if (data.url) {
    //   const url = document.createElement("a");
    //   url.innerHTML = data.url;
    //   info.appendChild(url);

    //   const qrcode = document.createElement("canvas");
    //   info.appendChild(qrcode);
    //   QRCode.toCanvas(qrcode, data.url);
    // }

    // if (data.description) {
    //   const description = document.createElement("p");
    //   description.innerHTML = data.description;
    //   info.appendChild(description);
    // }

    // if (data.methodTitle) {
    //   const methodTitle = document.createElement("h3");
    //   methodTitle.innerHTML = data.methodTitle;
    //   info.appendChild(methodTitle);
    // }

    // if (data.method) {
    //   const method = document.createElement("p");
    //   method.innerHTML = data.method;
    //   info.appendChild(method);
    // }
  }
};

ramen({title: "root", next: db}, []);
