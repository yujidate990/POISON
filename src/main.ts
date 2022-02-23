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
            title: "SoftBank",
          },
          {
            id: "docomo",
            title: "Docomo",
          },
          {
            id: "au",
            title: "au",
          },
          {
            id: "y_mobile",
            title: "Y!mobile",
          },
          {
            id: "uq_mobile",
            title: "UQ mobile",
          },
          {
            id: "rakuten_mvno",
            title: "楽天モバイル<br/>(旧プランMVNO時代)"
          },
          {
            id: "rakuten_unlimit",
            title: "楽天モバイル<br/>(新プラン Rakuten UN-LIMIT)",
          },
        ],
      },
      {
        title: "オンラインプラン",
        next: [
          {
            id: "ahamo",
            title: "ahamo",
          },
          {
            id: "povo_10",
            title: "povo 1.0",
          },
          {
            id: "povo_20",
            title: "povo 2.0",
          },
          {
            id: "linemo",
            title: "LINEMO",
          },
        ],
      },
      {
        title: "格安SIM",
        next: [
          {
            id: "mineo",
            title: "mineo",
          },
          {
            id: "biglobe_mobile",
            title: "BIGLOBE mobile",
          },
          {
            id: "line_mobile",
            title: "LINE MOBILE",
          },
          {
            id: "rakuten_mvno",
            title: "楽天モバイル<br/>(旧プランMVNO時代)"
          },
          {
            id: "rakuten_unlimit",
            title: "楽天モバイル<br/>(新プラン Rakuten UN-LIMIT)",
          },
          {
            id: "ocn_mobile_one",
            title: "OCN モバイル ONE",
          },
          {
            id: "dmm_mobile",
            title: "DMM モバイル",
          },
          {
            id: "nuro_mobile",
            title: "NURO モバイル",
          },
          {
            id: "u_mobile",
            title: "U-mobile<br/>(ユーモバイル)",
          },
          {
            id: "nifmo",
            title: "NifMo<br/>(ニフモ)",
          },
          {
            id: "libmo",
            title: "LIBMO<br/>(リブモ)",
          },
          {
            id: "excite_mobile",
            title: "excite モバイル<br/>(エキサイトモバイル)",
          },
          {
            id: "iij_mio",
            title: "IIJ mio<br/>(アイアイジェイミオ)",
          },
          {
            id: "aeon_mobile",
            title: "AEON MOBILE<br/>(イオンモバイル)",
          },
          {
            id: "yu_mobile",
            title: "Y.U.mobile",
          },
          {
            id: "jcom_mobile",
            title: "J:COM モバイル",
          },
          {
            id: "tone_mobile",
            title: "TONE MOBILE<br/>(トーンモバイル)",
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
            id: "flets_ntt_east",
            title: "フレッツ光（転用）<br/>【NTT東日本】",
          },
          {
            id: "comingsoon",
            title: "フレッツ光（転用）<br/>【NTT西日本】",
          },
          {
            id: "comingsoon",
            title: "@nifty光",
          },
          {
            id: "comingsoon",
            title: "@TCOMヒカリ",
          },
          {
            id: "comingsoon",
            title: "AsahiNet光",
          },
          {
            id: "comingsoon",
            title: "DMM光",
          },
          {
            id: "comingsoon",
            title: "Drive光",
          },
          {
            id: "comingsoon",
            title: "DTI光",
          },
          {
            id: "comingsoon",
            title: "FT光",
          },
          {
            id: "comingsoon",
            title: "hi-hoひかり",
          },
          {
            id: "comingsoon",
            title: "IIJmioひかり",
          },
          {
            id: "comingsoon",
            title: "Mひかり<br/>（Marubeni光）",
          },
          {
            id: "comingsoon",
            title: "OCN光",
          },
          {
            id: "comingsoon",
            title: "o’zzio光",
          },
          {
            id: "comingsoon",
            title: "So-net光",
          },
          {
            id: "comingsoon",
            title: "TEPCOひかり",
          },
          {
            id: "comingsoon",
            title: "TG光",
          },
          {
            id: "comingsoon",
            title: "USEN光 plus",
          },
          {
            id: "comingsoon",
            title: "エキサイト光<br/>BB.excite光Fit",
          },
          {
            id: "comingsoon",
            title: "エディオン光",
          },
          {
            id: "comingsoon",
            title: "ビッグローブ光",
          },
          {
            id: "comingsoon",
            title: "ぷらら光",
          },
          {
            id: "comingsoon",
            title: "楽天ひかり",
          },
          {
            id: "comingsoon",
            title: "ドコモ光",
          },
          {
            id: "comingsoon",
            title: "SoftBank光",
          },
          {
            id: "comingsoon",
            title: "おてがる光",
          },
          {
            id: "comingsoon",
            title: "en光",
          },
        ],
      },
      {
        title: "非フレッツ光",
        next: [
          {
            id: "comingsoon",
            title: "NURO光",
          },
          {
            id: "comingsoon",
            title: "J:COM",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(@nifty)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(@T COM)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(ASAHIネット)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(au one net)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(BIGLOBE)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(DTI)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(So-net)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(GMOとくとくBB)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(リンククラブ)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(楽天ブロードバンド)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(SmartLINE)",
          },
          {
            id: "comingsoon",
            title: "au ひかり(エディオンネット/<br/>エンジョイ☆auひかり)",
          },
          {
            id: "comingsoon",
            title: "au ひかり<br/>(メガ・エッグ)",
          },
          {
            id: "comingsoon",
            title: "auひかり(電話サービス/<br/>テレビサービスのみ解約)",
          },
        ],
      },
      {
        title: "ホームルータ―・ポケットWi-Fi",
        next: [
          {
            id: "comingsoon",
            title: "SoftBank Air（解約）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax （UQ販路）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax （BIC販路）<br/>→BIC WiMAX SERVICE",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax(YOD販路)→WIREL<br/>ESSGATE WiMAX SERVICE",
          },
          {
            id: "comingsoon",
            title: "カシモWiMAX",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（DTI）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（Broad WiMAX）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（GMOとくとくBB）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（VisionWiMAX）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（BIGLOBE）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（So-net ）",
          },
          {
            id: "comingsoon",
            title: "UQ Wimax（@nifty）",
          },
        ],
      },
    ],
  },



  {
    title: "インターネットエリア検索",
    next: [
      {
        id: "flets_search",
        title: "フレッツ光マンション検索",
      },
      {
        id: "comingsoon",
        title: "SoftBank Air 提供可否確認",
      },
      {
        id: "comingsoon",
        title: "auひかり 提供可否確認",
      },
    ],
  },



  {
    title: "携帯キャリアメール<br/>アドレス残し",
    next: [
      {
        id: "leave_addr_au",
        title: "Docomoメアド残し",
      },
      {
        id: "comingsoon",
        title: "auメアド残し",
      },
      {
        id: "comingsoon",
        title: "Y!mobileメアド残し",
      },
      {
        id: "comingsoon",
        title: "SoftBankメアド残し",
      },
    ],
  },



  {
    title: "でんき・ガス関連",
    next: [
      {
        id: "tepco",
        title: "東京電力",
      },
      {
        id: "comingsoon",
        title: "東京ガス",
      },
      {
        id: "comingsoon",
        title: "J:COM",
      },
    ],
  },
  {
    title: "(スタッフ向け)<br/>便利サイト",
    next: [
      {
        id: "speed_info",
        title: "プロバイダー速度制限情報",
      },
      {
        id: "comingsoon",
        title: "YAHOO 選べるクーポン",
      },
    ],
  },
  {
    title: "お問合せフォーム",
    id: "form"
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
