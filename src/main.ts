// import QRCode from "qrcode";
import "./reset.css";
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
    title: "MNP予約番号",
    next: [
      {
        title: "キャリア",
        next: [
          {
            id: "softbank",
            title: "Docomo",
            url: "https://my.softbank.jp/",
          },
          {
            id: "softbank",
            title: "SoftBank",
            url: "https://my.softbank.jp/",
          },
          {
            id: "softbank",
            title: "au",
            url: "https://my.softbank.jp/",
          },
        ],
      },
      {
        title: "オンラインプラン",
        next: [
          {
            id: "softbank",
            title: "ahamo",
            url: "https://my.softbank.jp/",
          },
          {
            id: "softbank",
            title: "povo 1.0",
            url: "https://my.softbank.jp/",
          },
          {
            id: "softbank",
            title: "povo 2.0",
            url: "https://my.softbank.jp/",
          },
        ],
      },
      {
        title: "softbank",
        next: [
          {
            id: "softbank",
            title: "mineo",
            url: "https://my.softbank.jp/",
          },
          {
            id: "softbank",
            title: "BIGLOBE mobile",
            url: "https://my.softbank.jp/",
          },
          {
            id: "softbank",
            title: "LINE MOBILE",
            url: "https://my.softbank.jp/",
          },
        ],
      },
    ],
  },



  {
    title: "インターネット解約関連",
    next: [
      {
        title: "フレッツ光・コラボ光",
        next: [
          {
            id: "fleteast",
            title: "ＮＴＴ東日本",
            url: "https://my.softbank.jp/",
          },
          {
            id: "fleteast",
            title: "ＮＴＴ西日本",
            url: "https://my.softbank.jp/",
          },
        ],
      },
      {
        title: "非フレッツ光",
        next: [
          {
            id: "fleteast",
            title: "NURO光",
            url: "https://my.softbank.jp/",
          },
          {
            id: "fleteast",
            title: "J:COM",
            url: "https://my.softbank.jp/",
          },
          {
            id: "fleteast",
            title: "au ひかり(@nifty)",
            url: "https://my.softbank.jp/",
          },
        ],
      },
      {
        title: "ホームルータ―・ポケットWi-Fi",
        next: [
          {
            id: "fleteast",
            title: "SoftBank Air（解約）",
            url: "https://my.softbank.jp/",
          },
          {
            id: "fleteast",
            title: "UQ Wimax　（UQ販路）",
            url: "https://my.softbank.jp/",
          },
          {
            id: "fleteast",
            title: "UQ Wimax　（BIC販路）→BIC WiMAX SERVICE",
            url: "https://my.softbank.jp/",
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
  saisho.classList.add("return-btn")
  saisho.innerHTML = "最初に戻る";
  main.appendChild(saisho);

  saisho.addEventListener("click", () => {
    ramen({title: "root", next: db}, []);
  });

  const back = document.createElement("button")!;
  back.classList.add("return-btn")
  back.id = "back";
  back.innerHTML = "前に戻る"
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
  }
};

ramen({title: "root", next: db}, []);

// ブラウザで戻るを行なったときに初期表示されないため。 see: https://qiita.com/shibe23/items/79f950061457ff1a7687
window.onbeforeunload = function() {
  // IE用。ここは空でOKです
};
window.onunload = function() {
  // IE以外用。ここは空でOKです
};
window.addEventListener("pageshow", function(event){
  if (event.persisted) {
    // ここにキャッシュ有効時の処理を書く
    ramen({title: "root", next: db}, []);
  }
});
