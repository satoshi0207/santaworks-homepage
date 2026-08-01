// 自動生成 — pr/drafts/chuju-src/build_figures.py が書き出す。**直接編集しない。**
// 数字の出どころは chuju-src/SOURCES.md。作り直すには build_figures.py を再実行する。
//
// ⚠️ `.fl` クラスを使っていない。JournalFx がスクロール演出で幅を0に戻すため、
//    dash 層の図では素の inline style で幅を持たせている（盆記事と同じ）。

/** 図①〜⑤の共通の器。dash 層は影も角丸も付けず、上のヘアラインと余白だけで区切る。 */
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
    <figure className="fig rv">
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

/* ── KPI（記事の頭に置く4枚） ─────────────────────────
   ⚠️ いちばん高い地区の名前をここに書かない。記事の頭に地区名を置くと、
      本文を読む前に順位表として受け取られる。名前は図③の中でだけ出す。 */
export function KpiTiles() {
  return (
    <div className="kpi rv">
      <div className="tile">
        <span className="lbl">全国</span>
        <span className="v n">8.3<small>%</small></span>
        <span className="note">中学1年生のうち私立。12人に1人</span>
      </div>
      <div className="tile on">
        <span className="lbl">東京都</span>
        <span className="v n">21.9<small>%</small></span>
        <span className="note">公立小を出た子のうち、国私立か都立中高一貫へ</span>
      </div>
      <div className="tile">
        <span className="lbl">いちばん高い地区</span>
        <span className="v n">52.3<small>%</small></span>
        <span className="note">2人に1人。いちばん低い地区は 3.1%</span>
      </div>
      <div className="tile">
        <span className="lbl">その開き</span>
        <span className="v n">16.7<small>倍</small></span>
        <span className="note">同じ都内・同じ制度のなかで</span>
      </div>
    </div>
  );
}

/* ── 図① 全国100人 ───────────────────────────────── */
export function FigNational() {
  return (
    <Fig
      n="01"
      title="全国の中学1年生を100人に縮めると"
      src="学校基本調査 令和7年度"
      caption={
        <>
          私立が 8.27%、国立を足して 9.13%。
          100人に丸めると私立 8 人・国立 1 人です。
          中等教育学校の前期課程はこの「中学校」に入らないので、実際はここより少しだけ多くなります。
        </>
      }
    >
      <div className="hundred" aria-hidden="true">
        <i key={0} data-k="shi" />
        <i key={1} data-k="shi" />
        <i key={2} data-k="shi" />
        <i key={3} data-k="shi" />
        <i key={4} data-k="shi" />
        <i key={5} data-k="shi" />
        <i key={6} data-k="shi" />
        <i key={7} data-k="shi" />
        <i key={8} data-k="koku" />
        <i key={9} data-k="ko" />
        <i key={10} data-k="ko" />
        <i key={11} data-k="ko" />
        <i key={12} data-k="ko" />
        <i key={13} data-k="ko" />
        <i key={14} data-k="ko" />
        <i key={15} data-k="ko" />
        <i key={16} data-k="ko" />
        <i key={17} data-k="ko" />
        <i key={18} data-k="ko" />
        <i key={19} data-k="ko" />
        <i key={20} data-k="ko" />
        <i key={21} data-k="ko" />
        <i key={22} data-k="ko" />
        <i key={23} data-k="ko" />
        <i key={24} data-k="ko" />
        <i key={25} data-k="ko" />
        <i key={26} data-k="ko" />
        <i key={27} data-k="ko" />
        <i key={28} data-k="ko" />
        <i key={29} data-k="ko" />
        <i key={30} data-k="ko" />
        <i key={31} data-k="ko" />
        <i key={32} data-k="ko" />
        <i key={33} data-k="ko" />
        <i key={34} data-k="ko" />
        <i key={35} data-k="ko" />
        <i key={36} data-k="ko" />
        <i key={37} data-k="ko" />
        <i key={38} data-k="ko" />
        <i key={39} data-k="ko" />
        <i key={40} data-k="ko" />
        <i key={41} data-k="ko" />
        <i key={42} data-k="ko" />
        <i key={43} data-k="ko" />
        <i key={44} data-k="ko" />
        <i key={45} data-k="ko" />
        <i key={46} data-k="ko" />
        <i key={47} data-k="ko" />
        <i key={48} data-k="ko" />
        <i key={49} data-k="ko" />
        <i key={50} data-k="ko" />
        <i key={51} data-k="ko" />
        <i key={52} data-k="ko" />
        <i key={53} data-k="ko" />
        <i key={54} data-k="ko" />
        <i key={55} data-k="ko" />
        <i key={56} data-k="ko" />
        <i key={57} data-k="ko" />
        <i key={58} data-k="ko" />
        <i key={59} data-k="ko" />
        <i key={60} data-k="ko" />
        <i key={61} data-k="ko" />
        <i key={62} data-k="ko" />
        <i key={63} data-k="ko" />
        <i key={64} data-k="ko" />
        <i key={65} data-k="ko" />
        <i key={66} data-k="ko" />
        <i key={67} data-k="ko" />
        <i key={68} data-k="ko" />
        <i key={69} data-k="ko" />
        <i key={70} data-k="ko" />
        <i key={71} data-k="ko" />
        <i key={72} data-k="ko" />
        <i key={73} data-k="ko" />
        <i key={74} data-k="ko" />
        <i key={75} data-k="ko" />
        <i key={76} data-k="ko" />
        <i key={77} data-k="ko" />
        <i key={78} data-k="ko" />
        <i key={79} data-k="ko" />
        <i key={80} data-k="ko" />
        <i key={81} data-k="ko" />
        <i key={82} data-k="ko" />
        <i key={83} data-k="ko" />
        <i key={84} data-k="ko" />
        <i key={85} data-k="ko" />
        <i key={86} data-k="ko" />
        <i key={87} data-k="ko" />
        <i key={88} data-k="ko" />
        <i key={89} data-k="ko" />
        <i key={90} data-k="ko" />
        <i key={91} data-k="ko" />
        <i key={92} data-k="ko" />
        <i key={93} data-k="ko" />
        <i key={94} data-k="ko" />
        <i key={95} data-k="ko" />
        <i key={96} data-k="ko" />
        <i key={97} data-k="ko" />
        <i key={98} data-k="ko" />
        <i key={99} data-k="ko" />
      </div>
      <div className="hkey">
        <span><i data-k="shi" />私立</span>
        <span><i data-k="koku" />国立</span>
        <span><i data-k="ko" />公立</span>
      </div>
    </Fig>
  );
}

/* ── 図② 同じ「東京都」で2つの数字が出る ───────────── */
export function FigBasis() {
  const rows: [string, string, number, boolean][] = [
    ["学校基本調査", "学校がある場所", 27.3, false],
    ["都教委の進路調査", "住んでいる場所", 21.9, true],
  ];
  return (
    <Fig
      n="02"
      title="同じ「東京都の中学受験」が、資料によって別の数字になります"
      src="学校基本調査 ／ 東京都教育委員会"
      caption={
        <>
          学校基本調査は<b>学校のある場所</b>で数えるので、東京都の私立中1年生には
          埼玉・千葉・神奈川から通ってくる子が入ります。都教委の調査は
          <b>通っていた公立小の場所</b>＝住んでいる場所です。
          ここで知りたいのは後者なので、この記事はこの先すべて都教委の数字を使います。
        </>
      }
    >
      <div className="bars wk">
        {rows.map(([k, basis, v, on]) => (
          <div className={"b" + (on ? " on" : "")} key={k}>
            <span className="k">
              {k}
              <small>{basis}</small>
            </span>
            <span className="t">
              <i style={{ width: v * 2 + "%" }} />
            </span>
            <span className="v n">{v.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </Fig>
  );
}

/* ── 図③ 51区市町村の散らばり ─────────────────────── */
export function FigSpread() {
  return (
    <Fig
      n="03"
      title="51区市町村を、1本の軸に並べる"
      src="東京都教育委員会 第1表（令和6年度卒業）"
      caption={
        <>
          点ひとつが1区市町村です。上下の段は重なりを避けるためで、意味はありません。
          <b>いちばん上と下で 16.7倍</b>。
          これは通える学校が何校あるかの差でもあります。
          <b>どこが高いかを比べる図ではありません。</b>
        </>
      }
    >
      <div className="pconly"><svg viewBox="0 0 600 132" role="img" aria-label="東京都の51区市町村の受験計の散らばり">
      <line x1="46" y1="74" x2="554" y2="74" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <line x1="46.0" y1="74" x2="46.0" y2="79" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="46.0" y="94" fontSize="15" textAnchor="middle" opacity="0.55">0%</text>
      <line x1="138.4" y1="74" x2="138.4" y2="79" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="138.4" y="94" fontSize="15" textAnchor="middle" opacity="0.55">10%</text>
      <line x1="230.7" y1="74" x2="230.7" y2="79" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="230.7" y="94" fontSize="15" textAnchor="middle" opacity="0.55">20%</text>
      <line x1="323.1" y1="74" x2="323.1" y2="79" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="323.1" y="94" fontSize="15" textAnchor="middle" opacity="0.55">30%</text>
      <line x1="415.5" y1="74" x2="415.5" y2="79" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="415.5" y="94" fontSize="15" textAnchor="middle" opacity="0.55">40%</text>
      <line x1="507.8" y1="74" x2="507.8" y2="79" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="507.8" y="94" fontSize="15" textAnchor="middle" opacity="0.55">50%</text>
      <line x1="248.7" y1="28" x2="248.7" y2="76" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" opacity="0.45" />
      <text x="248.7" y="22" fontSize="15" textAnchor="middle" opacity="0.62">都全体 21.9%</text>
      <circle cx="461.7" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="432.9" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="446.9" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="407.4" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="529.4" cy="65.8" r="4.6" fill="var(--accent)" opacity="1" />
      <circle cx="366.9" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="233.1" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="332.6" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="383.7" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="453.8" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="254.5" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="390.5" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="402.9" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="325.3" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="372.6" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="368.3" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="292.7" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="265.1" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="222.9" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="224.6" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="165.5" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="167.7" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="152.6" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="129.2" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="149.3" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="374.2" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="268.0" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="94.5" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="156.6" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="102.2" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="232.8" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="110.1" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="233.5" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="174.0" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="132.6" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="119.4" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="202.3" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="231.7" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="111.2" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="201.7" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="113.7" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="95.3" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="121.2" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="87.8" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="170.9" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="192.2" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="98.1" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="91.4" cy="43.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="189.7" cy="65.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <circle cx="74.9" cy="65.8" r="4.6" fill="var(--accent)" opacity="1" />
      <circle cx="82.9" cy="54.8" r="3.8" fill="var(--demph)" opacity="0.62" />
      <text x="72.9" y="124" fontSize="16" textAnchor="start" fontWeight="700">瑞穂町 3.1%</text>
      <text x="531.4" y="124" fontSize="16" textAnchor="end" fontWeight="700">文京区 52.3%</text>
      </svg></div>
      <div className="sponly"><svg viewBox="0 0 360 150" role="img" aria-label="東京都の51区市町村の受験計の散らばり">
      <line x1="26" y1="84" x2="334" y2="84" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <line x1="26.0" y1="84" x2="26.0" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="26.0" y="102" fontSize="13" textAnchor="middle" opacity="0.55">0%</text>
      <line x1="82.0" y1="84" x2="82.0" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="82.0" y="102" fontSize="13" textAnchor="middle" opacity="0.55">10%</text>
      <line x1="138.0" y1="84" x2="138.0" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="138.0" y="102" fontSize="13" textAnchor="middle" opacity="0.55">20%</text>
      <line x1="194.0" y1="84" x2="194.0" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="194.0" y="102" fontSize="13" textAnchor="middle" opacity="0.55">30%</text>
      <line x1="250.0" y1="84" x2="250.0" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="250.0" y="102" fontSize="13" textAnchor="middle" opacity="0.55">40%</text>
      <line x1="306.0" y1="84" x2="306.0" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <text x="306.0" y="102" fontSize="13" textAnchor="middle" opacity="0.55">50%</text>
      <line x1="148.9" y1="30" x2="148.9" y2="86" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" opacity="0.45" />
      <text x="148.9" y="24" fontSize="13" textAnchor="middle" opacity="0.62">都全体 21.9%</text>
      <circle cx="278.0" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="260.6" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="269.0" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="245.1" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="319.1" cy="74.2" r="5.5" fill="var(--accent)" opacity="1" />
      <circle cx="220.5" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="139.4" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="199.8" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="230.8" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="273.3" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="152.4" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="234.9" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="242.4" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="195.3" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="224.0" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="221.4" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="175.6" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="158.8" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="133.2" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="134.3" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="98.4" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="99.8" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="90.6" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="76.4" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="88.7" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="225.0" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="160.6" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="55.4" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="93.1" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="60.1" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="139.2" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="64.9" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="139.7" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="103.6" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="78.5" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="70.5" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="120.8" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="138.6" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="65.5" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="120.4" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="67.1" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="55.9" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="71.6" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="51.4" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="101.7" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="114.7" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="57.6" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="53.5" cy="48.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="113.1" cy="74.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <circle cx="43.5" cy="74.2" r="5.5" fill="var(--accent)" opacity="1" />
      <circle cx="48.4" cy="61.2" r="4.5" fill="var(--demph)" opacity="0.62" />
      <text x="41.5" y="142" fontSize="14" textAnchor="start" fontWeight="700">瑞穂町 3.1%</text>
      <text x="321.1" y="142" fontSize="14" textAnchor="end" fontWeight="700">文京区 52.3%</text>
      </svg></div>
    </Fig>
  );
}

/* ── 図④ 51区市町村ぜんぶ ─────────────────────────── */
// ⚠️ 並びは都道府県コードに準じた区市町村の順。**率の順に並べ替えないこと。**
//    順位表に見えると「あの町は意識が低い」という読まれ方に転ぶ。この記事の主題ではない。
const D51: [string, number, number][] = [
  ["千代田区", 44.1, 45.0],
  ["中央区", 39.6, 41.9],
  ["港区", 41.9, 43.4],
  ["新宿区", 36.0, 39.1],
  ["文京区", 48.5, 52.3],
  ["台東区", 30.9, 34.7],
  ["墨田区", 17.7, 20.3],
  ["江東区", 28.7, 31.0],
  ["品川区", 34.9, 36.6],
  ["目黒区", 41.8, 44.2],
  ["大田区", 21.1, 22.6],
  ["世田谷区", 35.1, 37.3],
  ["渋谷区", 36.3, 38.6],
  ["中野区", 26.8, 30.2],
  ["杉並区", 32.0, 35.4],
  ["豊島区", 32.3, 34.9],
  ["北区", 24.8, 26.7],
  ["荒川区", 21.2, 23.7],
  ["板橋区", 17.8, 19.2],
  ["練馬区", 16.8, 19.3],
  ["足立区", 11.8, 12.9],
  ["葛飾区", 12.0, 13.2],
  ["江戸川区", 10.6, 11.5],
  ["八王子市", 7.6, 9.0],
  ["立川市", 8.7, 11.2],
  ["武蔵野市", 31.7, 35.5],
  ["三鷹市", 20.0, 24.0],
  ["青梅市", 4.6, 5.2],
  ["府中市", 10.0, 12.0],
  ["昭島市", 5.4, 6.1],
  ["調布市", 17.6, 20.2],
  ["町田市", 6.0, 6.9],
  ["小金井市", 15.1, 20.3],
  ["小平市", 11.8, 13.9],
  ["日野市", 7.5, 9.4],
  ["東村山市", 6.8, 7.9],
  ["国分寺市", 12.8, 16.9],
  ["国立市", 16.4, 20.1],
  ["福生市", 6.5, 7.1],
  ["狛江市", 14.9, 16.9],
  ["東大和市", 5.1, 7.3],
  ["清瀬市", 4.8, 5.3],
  ["東久留米市", 7.0, 8.1],
  ["武蔵村山市", 3.9, 4.5],
  ["多摩市", 12.2, 13.5],
  ["稲城市", 13.4, 15.8],
  ["羽村市", 4.7, 5.6],
  ["あきる野市", 4.3, 4.9],
  ["西東京市", 12.6, 15.6],
  ["瑞穂町", 3.1, 3.1],
  ["日の出町", 2.9, 4.0],
];

export function FigAll() {
  const avg = 21.9;
  return (
    <Fig
      n="04"
      title="51区市町村ぜんぶ（並びは順位ではありません）"
      src="東京都教育委員会 第1表"
      caption={
        <>
          グレーが私立、赤が国立と都立の中高一貫です。
          縦の破線は都全体の {avg}%。卒業者が100人に満たない町村は、
          率が暴れるので外しています。
        </>
      }
    >
      <div className="d51">
        {D51.map(([name, shi, all]) => (
          <div className="dr" key={name}>
            <span className="dk">{name}</span>
            <span className="dt">
              <i className="s1" style={{ width: shi * 1.8 + "%" }} />
              <i className="s2" style={{ left: shi * 1.8 + "%", width: (all - shi) * 1.8 + "%" }} />
              <b style={{ left: avg * 1.8 + "%" }} />
            </span>
            <span className="dv n">{all.toFixed(1)}</span>
          </div>
        ))}
      </div>
    </Fig>
  );
}

/* ── 図⑤ 私立だけで見ると落ちるもの ─────────────────── */
const PICK6: [string, number, number][] = [
  ["文京区", 48.5, 52.3],
  ["目黒区", 41.8, 44.2],
  ["大田区", 21.1, 22.6],
  ["三鷹市", 20.0, 24.0],
  ["小金井市", 15.1, 20.3],
  ["八王子市", 7.6, 9.0],
];

export function FigPick() {
  return (
    <Fig
      n="05"
      title="「公立へ行った」に、受験した子が混ざっています"
      src="東京都教育委員会 第1表 注3"
      caption={
        <>
          グレーが私立、赤が国立と都立の中高一貫。
          都立の中高一貫と区立の中等教育学校は、表の上では「公立」に入ります。
          市部ほどここが厚く、<b>私立だけの率で並べると、市部の受験がまるごと落ちます。</b>
          6地区は区部と市部から3つずつ選んだもので、上位下位ではありません。
        </>
      }
    >
      <div className="d51 wide">
        {PICK6.map(([name, shi, all]) => (
          <div className="dr" key={name}>
            <span className="dk">{name}</span>
            <span className="dt">
              <i className="s1" style={{ width: shi * 1.8 + "%" }} />
              <i className="s2" style={{ left: shi * 1.8 + "%", width: (all - shi) * 1.8 + "%" }} />
            </span>
            <span className="dv n">
              {shi.toFixed(1)} <em>→</em> {all.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </Fig>
  );
}

/* ── 図⑥ 推移 ────────────────────────────────────── */
export function FigTrend() {
  return (
    <Fig
      n="06"
      title="私立は令和5年で頭打ち。都外へ出る子だけが増えています"
      src="東京都教育委員会 第1表（令和元年度〜6年度）"
      caption={
        <>
          いちばん上の線には、都外の私立へ進んだ子と、
          <b>引っ越して都外の公立へ入った子が両方入っています。</b>
          第1表にその内訳はありません。だから、この線が上がっている理由は分かりませんでした。
        </>
      }
    >
      <svg viewBox="0 0 600 250" role="img" aria-label="令和元年度から6年度までの推移">
      <line x1="52" y1="210.0" x2="504" y2="210.0" stroke="currentColor" strokeWidth="1" opacity="0.14" />
      <text x="44" y="215.0" fontSize="14" textAnchor="end" opacity="0.5">16%</text>
      <line x1="52" y1="173.2" x2="504" y2="173.2" stroke="currentColor" strokeWidth="1" opacity="0.14" />
      <text x="44" y="178.2" fontSize="14" textAnchor="end" opacity="0.5">18%</text>
      <line x1="52" y1="136.4" x2="504" y2="136.4" stroke="currentColor" strokeWidth="1" opacity="0.14" />
      <text x="44" y="141.4" fontSize="14" textAnchor="end" opacity="0.5">20%</text>
      <line x1="52" y1="99.6" x2="504" y2="99.6" stroke="currentColor" strokeWidth="1" opacity="0.14" />
      <text x="44" y="104.6" fontSize="14" textAnchor="end" opacity="0.5">22%</text>
      <line x1="52" y1="62.8" x2="504" y2="62.8" stroke="currentColor" strokeWidth="1" opacity="0.14" />
      <text x="44" y="67.8" fontSize="14" textAnchor="end" opacity="0.5">24%</text>
      <line x1="52" y1="26.0" x2="504" y2="26.0" stroke="currentColor" strokeWidth="1" opacity="0.14" />
      <text x="44" y="31.0" fontSize="14" textAnchor="end" opacity="0.5">26%</text>
      <text x="52.0" y="234" fontSize="14" textAnchor="middle" opacity="0.55">元</text>
      <text x="142.4" y="234" fontSize="14" textAnchor="middle" opacity="0.55">２</text>
      <text x="232.8" y="234" fontSize="14" textAnchor="middle" opacity="0.55">３</text>
      <text x="323.2" y="234" fontSize="14" textAnchor="middle" opacity="0.55">４</text>
      <text x="413.6" y="234" fontSize="14" textAnchor="middle" opacity="0.55">５</text>
      <text x="504.0" y="234" fontSize="14" textAnchor="middle" opacity="0.55">６</text>
      <text x="44" y="234" fontSize="13" textAnchor="end" opacity="0.45">令和</text>
      <polyline points="52.0,165.2 142.4,160.1 232.8,148.1 323.2,139.8 413.6,133.7 504.0,137.9" fill="none" stroke="var(--demph)" strokeWidth="2.2" opacity="0.7" strokeLinejoin="round" />
      <circle cx="52.0" cy="165.2" r="3" fill="var(--demph)" opacity="0.7" />
      <circle cx="142.4" cy="160.1" r="3" fill="var(--demph)" opacity="0.7" />
      <circle cx="232.8" cy="148.1" r="3" fill="var(--demph)" opacity="0.7" />
      <circle cx="323.2" cy="139.8" r="3" fill="var(--demph)" opacity="0.7" />
      <circle cx="413.6" cy="133.7" r="3" fill="var(--demph)" opacity="0.7" />
      <circle cx="504.0" cy="137.9" r="3" fill="var(--demph)" opacity="0.7" />
      <text x="512" y="142.9" fontSize="15" fill="var(--demph)" opacity="0.7" fontWeight="700">私立だけ</text>
      <polyline points="52.0,131.0 142.4,124.9 232.8,111.1 323.2,101.6 413.6,96.5 504.0,100.6" fill="none" stroke="var(--accent)" strokeWidth="2.2" opacity="1.0" strokeLinejoin="round" />
      <circle cx="52.0" cy="131.0" r="3" fill="var(--accent)" opacity="1.0" />
      <circle cx="142.4" cy="124.9" r="3" fill="var(--accent)" opacity="1.0" />
      <circle cx="232.8" cy="111.1" r="3" fill="var(--accent)" opacity="1.0" />
      <circle cx="323.2" cy="101.6" r="3" fill="var(--accent)" opacity="1.0" />
      <circle cx="413.6" cy="96.5" r="3" fill="var(--accent)" opacity="1.0" />
      <circle cx="504.0" cy="100.6" r="3" fill="var(--accent)" opacity="1.0" />
      <text x="512" y="105.6" fontSize="15" fill="var(--accent)" opacity="1.0" fontWeight="700">受験計</text>
      <polyline points="52.0,103.0 142.4,97.6 232.8,80.1 323.2,68.6 413.6,54.7 504.0,51.7" fill="none" stroke="var(--demph)" strokeWidth="2.2" opacity="0.45" strokeLinejoin="round" />
      <circle cx="52.0" cy="103.0" r="3" fill="var(--demph)" opacity="0.45" />
      <circle cx="142.4" cy="97.6" r="3" fill="var(--demph)" opacity="0.45" />
      <circle cx="232.8" cy="80.1" r="3" fill="var(--demph)" opacity="0.45" />
      <circle cx="323.2" cy="68.6" r="3" fill="var(--demph)" opacity="0.45" />
      <circle cx="413.6" cy="54.7" r="3" fill="var(--demph)" opacity="0.45" />
      <circle cx="504.0" cy="51.7" r="3" fill="var(--demph)" opacity="0.45" />
      <text x="512" y="56.7" fontSize="15" fill="var(--demph)" opacity="0.45" fontWeight="700">＋都外</text>
      </svg>
    </Fig>
  );
}
