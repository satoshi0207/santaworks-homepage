// 自動生成 — pr/drafts/manaleaf-src/make_figures.py が書き出す。**直接編集しない。**
// FIG 03 の数字の出どころは manaleaf-src/data.json（こども家庭庁の概要PDF p12）。
// 検算は verify.py。作り直すには make_figures.py を再実行する。
//
// ⚠️ FIG 01・02 はアプリの画面。**どうぶつのキャラクターだけで、人は写っていない。**
// ⚠️ FIG 03 は **PC 用とスマホ用の2枚組**。`.pconly` / `.sponly` は journal.css で出し分ける。
// ⚠️ 色は `figures.css` が `.mlfig` にスコープして配る。**ライト固定**（ダーク値を書かない）。
import "./figures.css";

/** 図の共通の器。three-years と同じ形（dash 層の .fig）。 */
function Fig({
  n,
  title,
  src,
  caption,
  children,
}: {
  n: string;
  title: string;
  src: string;
  caption?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className="fig mlfig rv">
      <div className="hd">
        <div>
          <span className="lbl">FIG {n}</span>
          <div className="ttl">{title}</div>
        </div>
        <span className="src">{src}</span>
      </div>
      {children}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function Fig01() {
  return (
    <Fig
      n="01"
      title="どうぶつは、ホームにも、まちがえたときにも出てきます"
      src="まなリーフ 小3 の画面"
      caption={<>うさぎ・みけねこ・いぬ・ハムスター・ペンギンの5匹です。</>}
    >
      <div className="shots">
        <img src="/manaleaf/home.webp" alt="ホーム画面。どうぶつ5匹が並んでいる" width={640} height={1390} loading="lazy" />
        <img src="/manaleaf/kaisetsu.webp" alt="まちがえたときの画面。ねこが「だいじょうぶ、もういちど かんがえてみよう」と声をかけている" width={640} height={1390} loading="lazy" />
      </div>
    </Fig>
  );
}

export function Fig02() {
  return (
    <Fig
      n="02"
      title="かかった時間は、時計を2つ並べて聞きます"
      src="まなリーフ 小3 の画面"
      caption={<>「出た」と「ついた」の時計を並べています。文章だけで読むより、先に目で分かるようにしました。</>}
    >
      <div className="crop">
        <img src="/blog/manaleaf/fig02-quiz.webp" alt="さんすうの問題。家を出た時刻と公園についた時刻の時計が並び、かかった時間をたずねている" width={600} height={525} loading="lazy" />
      </div>
    </Fig>
  );
}

export function Fig03() {
  return (
    <Fig
      n="03"
      title="9歳までは、親と一緒のほうが多い"
      src="こども家庭庁（令和6年度）"
      caption={<>割合のもとになっているのは、スマートフォンでインターネットを利用している子どもです。その年齢の子ども全員ではありません。兄弟姉妹との共用などは図から除いています。</>}
    >
      <div className="pconly"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" width="100%" role="img" fontFamily="inherit" aria-label="スマートフォンを親と共用する割合は9歳まで子ども専用を上回り、10歳で逆転する"><line className="grid" x1="52" y1="286.0" x2="602" y2="286.0"/><text className="tick" x="44.0" y="290.0" textAnchor="end">0%</text><line className="grid" x1="52" y1="163.0" x2="602" y2="163.0"/><text className="tick" x="44.0" y="167.0" textAnchor="end">50%</text><line className="grid" x1="52" y1="40.0" x2="602" y2="40.0"/><text className="tick" x="44.0" y="44.0" textAnchor="end">100%</text><rect className="band" x="198.7" y="40" width="165.0" height="246"/><text className="bandlab" x="281.2" y="30.0" textAnchor="middle">小学3年生（おおむね）</text><line className="flip" x1="372.8" y1="40" x2="372.8" y2="286"/><polyline className="ln b" points="52.0,250.8 143.7,246.1 235.3,201.9 327.0,186.1 418.7,124.4 510.3,111.3 602.0,79.1"/><circle className="dot b" cx="52.0" cy="250.8" r="3.4"/><circle className="dot b" cx="143.7" cy="246.1" r="3.4"/><circle className="dot b" cx="235.3" cy="201.9" r="3.4"/><circle className="dot b" cx="327.0" cy="186.1" r="3.4"/><circle className="dot b" cx="418.7" cy="124.4" r="3.4"/><circle className="dot b" cx="510.3" cy="111.3" r="3.4"/><circle className="dot b" cx="602.0" cy="79.1" r="3.4"/><polyline className="ln a" points="52.0,88.2 143.7,97.8 235.3,155.1 327.0,166.7 418.7,227.2 510.3,241.7 602.0,265.8"/><circle className="dot a" cx="52.0" cy="88.2" r="3.4"/><circle className="dot a" cx="143.7" cy="97.8" r="3.4"/><circle className="dot a" cx="235.3" cy="155.1" r="3.4"/><circle className="dot a" cx="327.0" cy="166.7" r="3.4"/><circle className="dot a" cx="418.7" cy="227.2" r="3.4"/><circle className="dot a" cx="510.3" cy="241.7" r="3.4"/><circle className="dot a" cx="602.0" cy="265.8" r="3.4"/><text className="dl a" x="327.0" y="156.7" textAnchor="middle">48.5%</text><text className="dl b" x="327.0" y="204.1" textAnchor="middle">40.6%</text><text className="dl a" x="418.7" y="245.2" textAnchor="middle">23.9%</text><text className="dl b" x="418.7" y="114.4" textAnchor="middle">65.7%</text><text className="tick" x="52.0" y="306.0" textAnchor="middle">6歳</text><text className="tick" x="143.7" y="306.0" textAnchor="middle">7歳</text><text className="tick" x="235.3" y="306.0" textAnchor="middle">8歳</text><text className="tick" x="327.0" y="306.0" textAnchor="middle">9歳</text><text className="tick" x="418.7" y="306.0" textAnchor="middle">10歳</text><text className="tick" x="510.3" y="306.0" textAnchor="middle">11歳</text><text className="tick" x="602.0" y="306.0" textAnchor="middle">12歳</text><text className="lgd a" x="614.0" y="269.8">親と共用</text><text className="lgd b" x="614.0" y="83.1">子ども専用</text></svg></div>
      <div className="sponly"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358 300" width="100%" role="img" fontFamily="inherit" aria-label="スマートフォンを親と共用する割合は9歳まで子ども専用を上回り、10歳で逆転する"><line className="grid" x1="40" y1="266.0" x2="338" y2="266.0"/><text className="tick" x="32.0" y="270.0" textAnchor="end">0%</text><line className="grid" x1="40" y1="153.0" x2="338" y2="153.0"/><text className="tick" x="32.0" y="157.0" textAnchor="end">50%</text><line className="grid" x1="40" y1="40.0" x2="338" y2="40.0"/><text className="tick" x="32.0" y="44.0" textAnchor="end">100%</text><rect className="band" x="119.5" y="40" width="89.4" height="226"/><text className="bandlab" x="164.2" y="30.0" textAnchor="middle">小学3年生（おおむね）</text><line className="flip" x1="213.8" y1="40" x2="213.8" y2="266"/><polyline className="ln b" points="40.0,233.7 89.7,229.4 139.3,188.7 189.0,174.2 238.7,117.5 288.3,105.5 338.0,75.9"/><circle className="dot b" cx="40.0" cy="233.7" r="3.4"/><circle className="dot b" cx="89.7" cy="229.4" r="3.4"/><circle className="dot b" cx="139.3" cy="188.7" r="3.4"/><circle className="dot b" cx="189.0" cy="174.2" r="3.4"/><circle className="dot b" cx="238.7" cy="117.5" r="3.4"/><circle className="dot b" cx="288.3" cy="105.5" r="3.4"/><circle className="dot b" cx="338.0" cy="75.9" r="3.4"/><polyline className="ln a" points="40.0,84.3 89.7,93.1 139.3,145.8 189.0,156.4 238.7,212.0 288.3,225.3 338.0,247.5"/><circle className="dot a" cx="40.0" cy="84.3" r="3.4"/><circle className="dot a" cx="89.7" cy="93.1" r="3.4"/><circle className="dot a" cx="139.3" cy="145.8" r="3.4"/><circle className="dot a" cx="189.0" cy="156.4" r="3.4"/><circle className="dot a" cx="238.7" cy="212.0" r="3.4"/><circle className="dot a" cx="288.3" cy="225.3" r="3.4"/><circle className="dot a" cx="338.0" cy="247.5" r="3.4"/><text className="dl a" x="189.0" y="146.4" textAnchor="middle">48.5%</text><text className="dl b" x="189.0" y="192.2" textAnchor="middle">40.6%</text><text className="dl a" x="238.7" y="230.0" textAnchor="middle">23.9%</text><text className="dl b" x="238.7" y="107.5" textAnchor="middle">65.7%</text><text className="tick" x="40.0" y="286.0" textAnchor="middle">6歳</text><text className="tick" x="89.7" y="286.0" textAnchor="middle">7歳</text><text className="tick" x="139.3" y="286.0" textAnchor="middle">8歳</text><text className="tick" x="189.0" y="286.0" textAnchor="middle">9歳</text><text className="tick" x="238.7" y="286.0" textAnchor="middle">10歳</text><text className="tick" x="288.3" y="286.0" textAnchor="middle">11歳</text><text className="tick" x="338.0" y="286.0" textAnchor="middle">12歳</text><text className="lgd a" x="44.0" y="72.3">親と共用</text><text className="lgd b" x="44.0" y="255.7">子ども専用</text></svg></div>
    </Fig>
  );
}
