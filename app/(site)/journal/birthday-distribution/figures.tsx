// ⚠️ 自動生成。手で編集しない。
// 生成元: pr/drafts/birthday-distribution-src/build_figures.py
// 数字は e-Stat「人口動態統計 保管統計表 出生7」2015〜2024年の実測値から算出。
// 計算は build_preview.py と同一。検証は verify.py（69項目 OK / 0 FAIL）。
//
// 色は dash.css のトークン（--ramp-1..5 / --demph / --accent）に任せる。
// ここで色を固定すると data-theme の切り替えに追従しなくなる。
import type { CSSProperties } from "react";

export function KpiTiles() {
  return (
    <div className="kpi">
      <div className="tile on">
        <span className="lbl">曜日</span>
        <span className="v n">1.68<small>倍</small></span>
        <span className="note">最多の火曜と最少の日曜の差</span>
      </div>
      <div className="tile on">
        <span className="lbl">祝日</span>
        <span className="v n">0.69<small>倍</small></span>
        <span className="note">ふつうの平日を1としたとき</span>
      </div>
      <div className="tile">
        <span className="lbl">六曜</span>
        <span className="v n">1.01<small>倍</small></span>
        <span className="note">大安と赤口の差。ほぼ無い</span>
      </div>
      <div className="tile">
        <span className="lbl">対象</span>
        <span className="v n">3,653<small>日</small></span>
        <span className="note">2015〜2024年・欠損なし</span>
      </div>
    </div>
  );
}

/** 12行×31列。存在しない日付は data-q="0"（透明）。 */
export function CalendarHeat() {
  return (
    <>
      <div className="mo" />
      <div className="days dnum n">
        <span data-d="1">1</span><span /><span /><span /><span data-d="5">5</span><span /><span /><span /><span /><span data-d="10">10</span><span /><span /><span /><span /><span data-d="15">15</span><span /><span /><span /><span /><span data-d="20">20</span><span /><span /><span /><span /><span data-d="25">25</span><span /><span /><span /><span /><span /><span data-d="31">31</span>
      </div>
      <div className="mo n">1月</div>
      <div className="days">
        <i className="d" data-q="1" data-t="1月1日　1,475人（全日付平均の63.1%）" title="1月1日　1,475人（全日付平均の63.1%）" /><i className="d" data-q="1" data-t="1月2日　1,487人（全日付平均の63.6%）" title="1月2日　1,487人（全日付平均の63.6%）" /><i className="d" data-q="1" data-t="1月3日　1,597人（全日付平均の68.3%）" title="1月3日　1,597人（全日付平均の68.3%）" /><i className="d" data-q="4" data-t="1月4日　2,412人（全日付平均の103.1%）" title="1月4日　2,412人（全日付平均の103.1%）" /><i className="d" data-q="5" data-t="1月5日　2,820人（全日付平均の120.5%）" title="1月5日　2,820人（全日付平均の120.5%）" /><i className="d" data-q="5" data-t="1月6日　2,609人（全日付平均の111.5%）" title="1月6日　2,609人（全日付平均の111.5%）" /><i className="d" data-q="4" data-t="1月7日　2,404人（全日付平均の102.7%）" title="1月7日　2,404人（全日付平均の102.7%）" /><i className="d" data-q="1" data-t="1月8日　2,209人（全日付平均の94.4%）" title="1月8日　2,209人（全日付平均の94.4%）" /><i className="d" data-q="1" data-t="1月9日　2,201人（全日付平均の94.1%）" title="1月9日　2,201人（全日付平均の94.1%）" /><i className="d" data-q="2" data-t="1月10日　2,316人（全日付平均の99.0%）" title="1月10日　2,316人（全日付平均の99.0%）" /><i className="d" data-q="3" data-t="1月11日　2,373人（全日付平均の101.4%）" title="1月11日　2,373人（全日付平均の101.4%）" /><i className="d" data-q="3" data-t="1月12日　2,379人（全日付平均の101.7%）" title="1月12日　2,379人（全日付平均の101.7%）" /><i className="d" data-q="3" data-t="1月13日　2,340人（全日付平均の100.0%）" title="1月13日　2,340人（全日付平均の100.0%）" /><i className="d" data-q="1" data-t="1月14日　2,231人（全日付平均の95.4%）" title="1月14日　2,231人（全日付平均の95.4%）" /><i className="d" data-q="4" data-t="1月15日　2,420人（全日付平均の103.4%）" title="1月15日　2,420人（全日付平均の103.4%）" /><i className="d" data-q="4" data-t="1月16日　2,420人（全日付平均の103.4%）" title="1月16日　2,420人（全日付平均の103.4%）" /><i className="d" data-q="4" data-t="1月17日　2,394人（全日付平均の102.3%）" title="1月17日　2,394人（全日付平均の102.3%）" /><i className="d" data-q="4" data-t="1月18日　2,426人（全日付平均の103.7%）" title="1月18日　2,426人（全日付平均の103.7%）" /><i className="d" data-q="4" data-t="1月19日　2,453人（全日付平均の104.8%）" title="1月19日　2,453人（全日付平均の104.8%）" /><i className="d" data-q="4" data-t="1月20日　2,429人（全日付平均の103.8%）" title="1月20日　2,429人（全日付平均の103.8%）" /><i className="d" data-q="3" data-t="1月21日　2,328人（全日付平均の99.5%）" title="1月21日　2,328人（全日付平均の99.5%）" /><i className="d" data-q="3" data-t="1月22日　2,360人（全日付平均の100.9%）" title="1月22日　2,360人（全日付平均の100.9%）" /><i className="d" data-q="5" data-t="1月23日　2,464人（全日付平均の105.3%）" title="1月23日　2,464人（全日付平均の105.3%）" /><i className="d" data-q="3" data-t="1月24日　2,366人（全日付平均の101.1%）" title="1月24日　2,366人（全日付平均の101.1%）" /><i className="d" data-q="4" data-t="1月25日　2,412人（全日付平均の103.1%）" title="1月25日　2,412人（全日付平均の103.1%）" /><i className="d" data-q="4" data-t="1月26日　2,433人（全日付平均の104.0%）" title="1月26日　2,433人（全日付平均の104.0%）" /><i className="d" data-q="3" data-t="1月27日　2,357人（全日付平均の100.7%）" title="1月27日　2,357人（全日付平均の100.7%）" /><i className="d" data-q="1" data-t="1月28日　2,249人（全日付平均の96.1%）" title="1月28日　2,249人（全日付平均の96.1%）" /><i className="d" data-q="2" data-t="1月29日　2,291人（全日付平均の97.9%）" title="1月29日　2,291人（全日付平均の97.9%）" /><i className="d" data-q="2" data-t="1月30日　2,309人（全日付平均の98.7%）" title="1月30日　2,309人（全日付平均の98.7%）" /><i className="d" data-q="2" data-t="1月31日　2,254人（全日付平均の96.3%）" title="1月31日　2,254人（全日付平均の96.3%）" />
      </div>
      <div className="mo n">2月</div>
      <div className="days">
        <i className="d" data-q="4" data-t="2月1日　2,419人（全日付平均の103.4%）" title="2月1日　2,419人（全日付平均の103.4%）" /><i className="d" data-q="5" data-t="2月2日　2,494人（全日付平均の106.6%）" title="2月2日　2,494人（全日付平均の106.6%）" /><i className="d" data-q="3" data-t="2月3日　2,329人（全日付平均の99.5%）" title="2月3日　2,329人（全日付平均の99.5%）" /><i className="d" data-q="1" data-t="2月4日　2,185人（全日付平均の93.4%）" title="2月4日　2,185人（全日付平均の93.4%）" /><i className="d" data-q="2" data-t="2月5日　2,306人（全日付平均の98.6%）" title="2月5日　2,306人（全日付平均の98.6%）" /><i className="d" data-q="3" data-t="2月6日　2,331人（全日付平均の99.6%）" title="2月6日　2,331人（全日付平均の99.6%）" /><i className="d" data-q="2" data-t="2月7日　2,288人（全日付平均の97.8%）" title="2月7日　2,288人（全日付平均の97.8%）" /><i className="d" data-q="4" data-t="2月8日　2,401人（全日付平均の102.6%）" title="2月8日　2,401人（全日付平均の102.6%）" /><i className="d" data-q="4" data-t="2月9日　2,416人（全日付平均の103.2%）" title="2月9日　2,416人（全日付平均の103.2%）" /><i className="d" data-q="3" data-t="2月10日　2,378人（全日付平均の101.6%）" title="2月10日　2,378人（全日付平均の101.6%）" /><i className="d" data-q="1" data-t="2月11日　1,659人（全日付平均の70.9%）" title="2月11日　1,659人（全日付平均の70.9%）" /><i className="d" data-q="1" data-t="2月12日　2,120人（全日付平均の90.6%）" title="2月12日　2,120人（全日付平均の90.6%）" /><i className="d" data-q="2" data-t="2月13日　2,301人（全日付平均の98.4%）" title="2月13日　2,301人（全日付平均の98.4%）" /><i className="d" data-q="3" data-t="2月14日　2,381人（全日付平均の101.7%）" title="2月14日　2,381人（全日付平均の101.7%）" /><i className="d" data-q="3" data-t="2月15日　2,376人（全日付平均の101.5%）" title="2月15日　2,376人（全日付平均の101.5%）" /><i className="d" data-q="4" data-t="2月16日　2,391人（全日付平均の102.2%）" title="2月16日　2,391人（全日付平均の102.2%）" /><i className="d" data-q="2" data-t="2月17日　2,290人（全日付平均の97.9%）" title="2月17日　2,290人（全日付平均の97.9%）" /><i className="d" data-q="1" data-t="2月18日　2,200人（全日付平均の94.0%）" title="2月18日　2,200人（全日付平均の94.0%）" /><i className="d" data-q="1" data-t="2月19日　2,228人（全日付平均の95.2%）" title="2月19日　2,228人（全日付平均の95.2%）" /><i className="d" data-q="3" data-t="2月20日　2,357人（全日付平均の100.7%）" title="2月20日　2,357人（全日付平均の100.7%）" /><i className="d" data-q="2" data-t="2月21日　2,302人（全日付平均の98.4%）" title="2月21日　2,302人（全日付平均の98.4%）" /><i className="d" data-q="5" data-t="2月22日　2,486人（全日付平均の106.2%）" title="2月22日　2,486人（全日付平均の106.2%）" /><i className="d" data-q="1" data-t="2月23日　2,030人（全日付平均の86.8%）" title="2月23日　2,030人（全日付平均の86.8%）" /><i className="d" data-q="1" data-t="2月24日　2,177人（全日付平均の93.1%）" title="2月24日　2,177人（全日付平均の93.1%）" /><i className="d" data-q="1" data-t="2月25日　2,200人（全日付平均の94.0%）" title="2月25日　2,200人（全日付平均の94.0%）" /><i className="d" data-q="1" data-t="2月26日　2,248人（全日付平均の96.1%）" title="2月26日　2,248人（全日付平均の96.1%）" /><i className="d" data-q="2" data-t="2月27日　2,300人（全日付平均の98.3%）" title="2月27日　2,300人（全日付平均の98.3%）" /><i className="d" data-q="1" data-t="2月28日　2,220人（全日付平均の94.9%）" title="2月28日　2,220人（全日付平均の94.9%）" /><i className="d" data-q="1" data-t="2月29日　1,962人（全日付平均の83.9%）" title="2月29日　1,962人（全日付平均の83.9%）" /><i className="d" data-q="0" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">3月</div>
      <div className="days">
        <i className="d" data-q="4" data-t="3月1日　2,411人（全日付平均の103.1%）" title="3月1日　2,411人（全日付平均の103.1%）" /><i className="d" data-q="3" data-t="3月2日　2,389人（全日付平均の102.1%）" title="3月2日　2,389人（全日付平均の102.1%）" /><i className="d" data-q="3" data-t="3月3日　2,390人（全日付平均の102.1%）" title="3月3日　2,390人（全日付平均の102.1%）" /><i className="d" data-q="1" data-t="3月4日　2,207人（全日付平均の94.3%）" title="3月4日　2,207人（全日付平均の94.3%）" /><i className="d" data-q="1" data-t="3月5日　2,214人（全日付平均の94.6%）" title="3月5日　2,214人（全日付平均の94.6%）" /><i className="d" data-q="2" data-t="3月6日　2,262人（全日付平均の96.7%）" title="3月6日　2,262人（全日付平均の96.7%）" /><i className="d" data-q="2" data-t="3月7日　2,309人（全日付平均の98.7%）" title="3月7日　2,309人（全日付平均の98.7%）" /><i className="d" data-q="2" data-t="3月8日　2,311人（全日付平均の98.8%）" title="3月8日　2,311人（全日付平均の98.8%）" /><i className="d" data-q="4" data-t="3月9日　2,402人（全日付平均の102.7%）" title="3月9日　2,402人（全日付平均の102.7%）" /><i className="d" data-q="2" data-t="3月10日　2,279人（全日付平均の97.4%）" title="3月10日　2,279人（全日付平均の97.4%）" /><i className="d" data-q="1" data-t="3月11日　2,120人（全日付平均の90.6%）" title="3月11日　2,120人（全日付平均の90.6%）" /><i className="d" data-q="1" data-t="3月12日　2,153人（全日付平均の92.0%）" title="3月12日　2,153人（全日付平均の92.0%）" /><i className="d" data-q="1" data-t="3月13日　2,232人（全日付平均の95.4%）" title="3月13日　2,232人（全日付平均の95.4%）" /><i className="d" data-q="2" data-t="3月14日　2,276人（全日付平均の97.3%）" title="3月14日　2,276人（全日付平均の97.3%）" /><i className="d" data-q="3" data-t="3月15日　2,356人（全日付平均の100.7%）" title="3月15日　2,356人（全日付平均の100.7%）" /><i className="d" data-q="3" data-t="3月16日　2,369人（全日付平均の101.3%）" title="3月16日　2,369人（全日付平均の101.3%）" /><i className="d" data-q="2" data-t="3月17日　2,258人（全日付平均の96.5%）" title="3月17日　2,258人（全日付平均の96.5%）" /><i className="d" data-q="2" data-t="3月18日　2,264人（全日付平均の96.8%）" title="3月18日　2,264人（全日付平均の96.8%）" /><i className="d" data-q="1" data-t="3月19日　2,205人（全日付平均の94.3%）" title="3月19日　2,205人（全日付平均の94.3%）" /><i className="d" data-q="1" data-t="3月20日　2,003人（全日付平均の85.6%）" title="3月20日　2,003人（全日付平均の85.6%）" /><i className="d" data-q="1" data-t="3月21日　1,829人（全日付平均の78.2%）" title="3月21日　1,829人（全日付平均の78.2%）" /><i className="d" data-q="3" data-t="3月22日　2,345人（全日付平均の100.2%）" title="3月22日　2,345人（全日付平均の100.2%）" /><i className="d" data-q="4" data-t="3月23日　2,436人（全日付平均の104.1%）" title="3月23日　2,436人（全日付平均の104.1%）" /><i className="d" data-q="2" data-t="3月24日　2,285人（全日付平均の97.7%）" title="3月24日　2,285人（全日付平均の97.7%）" /><i className="d" data-q="1" data-t="3月25日　2,237人（全日付平均の95.6%）" title="3月25日　2,237人（全日付平均の95.6%）" /><i className="d" data-q="1" data-t="3月26日　2,168人（全日付平均の92.7%）" title="3月26日　2,168人（全日付平均の92.7%）" /><i className="d" data-q="1" data-t="3月27日　2,163人（全日付平均の92.4%）" title="3月27日　2,163人（全日付平均の92.4%）" /><i className="d" data-q="1" data-t="3月28日　2,172人（全日付平均の92.9%）" title="3月28日　2,172人（全日付平均の92.9%）" /><i className="d" data-q="1" data-t="3月29日　2,158人（全日付平均の92.3%）" title="3月29日　2,158人（全日付平均の92.3%）" /><i className="d" data-q="1" data-t="3月30日　2,168人（全日付平均の92.6%）" title="3月30日　2,168人（全日付平均の92.6%）" /><i className="d" data-q="1" data-t="3月31日　1,984人（全日付平均の84.8%）" title="3月31日　1,984人（全日付平均の84.8%）" />
      </div>
      <div className="mo n">4月</div>
      <div className="days">
        <i className="d" data-q="1" data-t="4月1日　1,794人（全日付平均の76.7%）" title="4月1日　1,794人（全日付平均の76.7%）" /><i className="d" data-q="5" data-t="4月2日　2,483人（全日付平均の106.1%）" title="4月2日　2,483人（全日付平均の106.1%）" /><i className="d" data-q="5" data-t="4月3日　2,533人（全日付平均の108.3%）" title="4月3日　2,533人（全日付平均の108.3%）" /><i className="d" data-q="4" data-t="4月4日　2,436人（全日付平均の104.1%）" title="4月4日　2,436人（全日付平均の104.1%）" /><i className="d" data-q="5" data-t="4月5日　2,476人（全日付平均の105.8%）" title="4月5日　2,476人（全日付平均の105.8%）" /><i className="d" data-q="4" data-t="4月6日　2,429人（全日付平均の103.8%）" title="4月6日　2,429人（全日付平均の103.8%）" /><i className="d" data-q="3" data-t="4月7日　2,339人（全日付平均の100.0%）" title="4月7日　2,339人（全日付平均の100.0%）" /><i className="d" data-q="3" data-t="4月8日　2,354人（全日付平均の100.6%）" title="4月8日　2,354人（全日付平均の100.6%）" /><i className="d" data-q="1" data-t="4月9日　2,188人（全日付平均の93.5%）" title="4月9日　2,188人（全日付平均の93.5%）" /><i className="d" data-q="2" data-t="4月10日　2,277人（全日付平均の97.3%）" title="4月10日　2,277人（全日付平均の97.3%）" /><i className="d" data-q="2" data-t="4月11日　2,317人（全日付平均の99.0%）" title="4月11日　2,317人（全日付平均の99.0%）" /><i className="d" data-q="3" data-t="4月12日　2,348人（全日付平均の100.4%）" title="4月12日　2,348人（全日付平均の100.4%）" /><i className="d" data-q="3" data-t="4月13日　2,371人（全日付平均の101.4%）" title="4月13日　2,371人（全日付平均の101.4%）" /><i className="d" data-q="1" data-t="4月14日　2,239人（全日付平均の95.7%）" title="4月14日　2,239人（全日付平均の95.7%）" /><i className="d" data-q="3" data-t="4月15日　2,342人（全日付平均の100.1%）" title="4月15日　2,342人（全日付平均の100.1%）" /><i className="d" data-q="1" data-t="4月16日　2,230人（全日付平均の95.3%）" title="4月16日　2,230人（全日付平均の95.3%）" /><i className="d" data-q="2" data-t="4月17日　2,306人（全日付平均の98.6%）" title="4月17日　2,306人（全日付平均の98.6%）" /><i className="d" data-q="3" data-t="4月18日　2,333人（全日付平均の99.7%）" title="4月18日　2,333人（全日付平均の99.7%）" /><i className="d" data-q="3" data-t="4月19日　2,330人（全日付平均の99.6%）" title="4月19日　2,330人（全日付平均の99.6%）" /><i className="d" data-q="4" data-t="4月20日　2,447人（全日付平均の104.6%）" title="4月20日　2,447人（全日付平均の104.6%）" /><i className="d" data-q="3" data-t="4月21日　2,368人（全日付平均の101.2%）" title="4月21日　2,368人（全日付平均の101.2%）" /><i className="d" data-q="3" data-t="4月22日　2,360人（全日付平均の100.9%）" title="4月22日　2,360人（全日付平均の100.9%）" /><i className="d" data-q="2" data-t="4月23日　2,303人（全日付平均の98.4%）" title="4月23日　2,303人（全日付平均の98.4%）" /><i className="d" data-q="4" data-t="4月24日　2,394人（全日付平均の102.3%）" title="4月24日　2,394人（全日付平均の102.3%）" /><i className="d" data-q="5" data-t="4月25日　2,466人（全日付平均の105.4%）" title="4月25日　2,466人（全日付平均の105.4%）" /><i className="d" data-q="5" data-t="4月26日　2,531人（全日付平均の108.2%）" title="4月26日　2,531人（全日付平均の108.2%）" /><i className="d" data-q="5" data-t="4月27日　2,664人（全日付平均の113.9%）" title="4月27日　2,664人（全日付平均の113.9%）" /><i className="d" data-q="5" data-t="4月28日　2,531人（全日付平均の108.2%）" title="4月28日　2,531人（全日付平均の108.2%）" /><i className="d" data-q="1" data-t="4月29日　1,706人（全日付平均の72.9%）" title="4月29日　1,706人（全日付平均の72.9%）" /><i className="d" data-q="1" data-t="4月30日　2,216人（全日付平均の94.7%）" title="4月30日　2,216人（全日付平均の94.7%）" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">5月</div>
      <div className="days">
        <i className="d" data-q="5" data-t="5月1日　2,638人（全日付平均の112.8%）" title="5月1日　2,638人（全日付平均の112.8%）" /><i className="d" data-q="5" data-t="5月2日　2,719人（全日付平均の116.2%）" title="5月2日　2,719人（全日付平均の116.2%）" /><i className="d" data-q="1" data-t="5月3日　1,824人（全日付平均の78.0%）" title="5月3日　1,824人（全日付平均の78.0%）" /><i className="d" data-q="1" data-t="5月4日　1,737人（全日付平均の74.3%）" title="5月4日　1,737人（全日付平均の74.3%）" /><i className="d" data-q="1" data-t="5月5日　1,732人（全日付平均の74.0%）" title="5月5日　1,732人（全日付平均の74.0%）" /><i className="d" data-q="1" data-t="5月6日　2,093人（全日付平均の89.4%）" title="5月6日　2,093人（全日付平均の89.4%）" /><i className="d" data-q="5" data-t="5月7日　2,471人（全日付平均の105.6%）" title="5月7日　2,471人（全日付平均の105.6%）" /><i className="d" data-q="5" data-t="5月8日　2,610人（全日付平均の111.6%）" title="5月8日　2,610人（全日付平均の111.6%）" /><i className="d" data-q="5" data-t="5月9日　2,543人（全日付平均の108.7%）" title="5月9日　2,543人（全日付平均の108.7%）" /><i className="d" data-q="5" data-t="5月10日　2,600人（全日付平均の111.1%）" title="5月10日　2,600人（全日付平均の111.1%）" /><i className="d" data-q="5" data-t="5月11日　2,494人（全日付平均の106.6%）" title="5月11日　2,494人（全日付平均の106.6%）" /><i className="d" data-q="3" data-t="5月12日　2,381人（全日付平均の101.8%）" title="5月12日　2,381人（全日付平均の101.8%）" /><i className="d" data-q="2" data-t="5月13日　2,284人（全日付平均の97.6%）" title="5月13日　2,284人（全日付平均の97.6%）" /><i className="d" data-q="2" data-t="5月14日　2,259人（全日付平均の96.5%）" title="5月14日　2,259人（全日付平均の96.5%）" /><i className="d" data-q="4" data-t="5月15日　2,417人（全日付平均の103.3%）" title="5月15日　2,417人（全日付平均の103.3%）" /><i className="d" data-q="4" data-t="5月16日　2,404人（全日付平均の102.7%）" title="5月16日　2,404人（全日付平均の102.7%）" /><i className="d" data-q="4" data-t="5月17日　2,396人（全日付平均の102.4%）" title="5月17日　2,396人（全日付平均の102.4%）" /><i className="d" data-q="4" data-t="5月18日　2,424人（全日付平均の103.6%）" title="5月18日　2,424人（全日付平均の103.6%）" /><i className="d" data-q="2" data-t="5月19日　2,258人（全日付平均の96.5%）" title="5月19日　2,258人（全日付平均の96.5%）" /><i className="d" data-q="2" data-t="5月20日　2,284人（全日付平均の97.6%）" title="5月20日　2,284人（全日付平均の97.6%）" /><i className="d" data-q="1" data-t="5月21日　2,234人（全日付平均の95.5%）" title="5月21日　2,234人（全日付平均の95.5%）" /><i className="d" data-q="2" data-t="5月22日　2,313人（全日付平均の98.9%）" title="5月22日　2,313人（全日付平均の98.9%）" /><i className="d" data-q="3" data-t="5月23日　2,374人（全日付平均の101.5%）" title="5月23日　2,374人（全日付平均の101.5%）" /><i className="d" data-q="3" data-t="5月24日　2,369人（全日付平均の101.3%）" title="5月24日　2,369人（全日付平均の101.3%）" /><i className="d" data-q="4" data-t="5月25日　2,457人（全日付平均の105.0%）" title="5月25日　2,457人（全日付平均の105.0%）" /><i className="d" data-q="2" data-t="5月26日　2,290人（全日付平均の97.9%）" title="5月26日　2,290人（全日付平均の97.9%）" /><i className="d" data-q="1" data-t="5月27日　2,233人（全日付平均の95.5%）" title="5月27日　2,233人（全日付平均の95.5%）" /><i className="d" data-q="1" data-t="5月28日　2,184人（全日付平均の93.4%）" title="5月28日　2,184人（全日付平均の93.4%）" /><i className="d" data-q="2" data-t="5月29日　2,265人（全日付平均の96.8%）" title="5月29日　2,265人（全日付平均の96.8%）" /><i className="d" data-q="2" data-t="5月30日　2,317人（全日付平均の99.0%）" title="5月30日　2,317人（全日付平均の99.0%）" /><i className="d" data-q="2" data-t="5月31日　2,293人（全日付平均の98.0%）" title="5月31日　2,293人（全日付平均の98.0%）" />
      </div>
      <div className="mo n">6月</div>
      <div className="days">
        <i className="d" data-q="4" data-t="6月1日　2,460人（全日付平均の105.1%）" title="6月1日　2,460人（全日付平均の105.1%）" /><i className="d" data-q="2" data-t="6月2日　2,301人（全日付平均の98.4%）" title="6月2日　2,301人（全日付平均の98.4%）" /><i className="d" data-q="2" data-t="6月3日　2,320人（全日付平均の99.2%）" title="6月3日　2,320人（全日付平均の99.2%）" /><i className="d" data-q="1" data-t="6月4日　2,227人（全日付平均の95.2%）" title="6月4日　2,227人（全日付平均の95.2%）" /><i className="d" data-q="3" data-t="6月5日　2,333人（全日付平均の99.7%）" title="6月5日　2,333人（全日付平均の99.7%）" /><i className="d" data-q="4" data-t="6月6日　2,398人（全日付平均の102.5%）" title="6月6日　2,398人（全日付平均の102.5%）" /><i className="d" data-q="3" data-t="6月7日　2,385人（全日付平均の101.9%）" title="6月7日　2,385人（全日付平均の101.9%）" /><i className="d" data-q="4" data-t="6月8日　2,404人（全日付平均の102.7%）" title="6月8日　2,404人（全日付平均の102.7%）" /><i className="d" data-q="2" data-t="6月9日　2,306人（全日付平均の98.5%）" title="6月9日　2,306人（全日付平均の98.5%）" /><i className="d" data-q="3" data-t="6月10日　2,368人（全日付平均の101.2%）" title="6月10日　2,368人（全日付平均の101.2%）" /><i className="d" data-q="2" data-t="6月11日　2,284人（全日付平均の97.6%）" title="6月11日　2,284人（全日付平均の97.6%）" /><i className="d" data-q="3" data-t="6月12日　2,351人（全日付平均の100.5%）" title="6月12日　2,351人（全日付平均の100.5%）" /><i className="d" data-q="3" data-t="6月13日　2,384人（全日付平均の101.9%）" title="6月13日　2,384人（全日付平均の101.9%）" /><i className="d" data-q="4" data-t="6月14日　2,414人（全日付平均の103.2%）" title="6月14日　2,414人（全日付平均の103.2%）" /><i className="d" data-q="4" data-t="6月15日　2,458人（全日付平均の105.1%）" title="6月15日　2,458人（全日付平均の105.1%）" /><i className="d" data-q="3" data-t="6月16日　2,364人（全日付平均の101.0%）" title="6月16日　2,364人（全日付平均の101.0%）" /><i className="d" data-q="3" data-t="6月17日　2,330人（全日付平均の99.6%）" title="6月17日　2,330人（全日付平均の99.6%）" /><i className="d" data-q="2" data-t="6月18日　2,283人（全日付平均の97.6%）" title="6月18日　2,283人（全日付平均の97.6%）" /><i className="d" data-q="3" data-t="6月19日　2,328人（全日付平均の99.5%）" title="6月19日　2,328人（全日付平均の99.5%）" /><i className="d" data-q="3" data-t="6月20日　2,370人（全日付平均の101.3%）" title="6月20日　2,370人（全日付平均の101.3%）" /><i className="d" data-q="4" data-t="6月21日　2,429人（全日付平均の103.8%）" title="6月21日　2,429人（全日付平均の103.8%）" /><i className="d" data-q="5" data-t="6月22日　2,495人（全日付平均の106.6%）" title="6月22日　2,495人（全日付平均の106.6%）" /><i className="d" data-q="3" data-t="6月23日　2,339人（全日付平均の100.0%）" title="6月23日　2,339人（全日付平均の100.0%）" /><i className="d" data-q="2" data-t="6月24日　2,297人（全日付平均の98.2%）" title="6月24日　2,297人（全日付平均の98.2%）" /><i className="d" data-q="2" data-t="6月25日　2,299人（全日付平均の98.3%）" title="6月25日　2,299人（全日付平均の98.3%）" /><i className="d" data-q="3" data-t="6月26日　2,331人（全日付平均の99.6%）" title="6月26日　2,331人（全日付平均の99.6%）" /><i className="d" data-q="3" data-t="6月27日　2,338人（全日付平均の99.9%）" title="6月27日　2,338人（全日付平均の99.9%）" /><i className="d" data-q="4" data-t="6月28日　2,392人（全日付平均の102.2%）" title="6月28日　2,392人（全日付平均の102.2%）" /><i className="d" data-q="3" data-t="6月29日　2,361人（全日付平均の100.9%）" title="6月29日　2,361人（全日付平均の100.9%）" /><i className="d" data-q="2" data-t="6月30日　2,316人（全日付平均の99.0%）" title="6月30日　2,316人（全日付平均の99.0%）" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">7月</div>
      <div className="days">
        <i className="d" data-q="4" data-t="7月1日　2,448人（全日付平均の104.6%）" title="7月1日　2,448人（全日付平均の104.6%）" /><i className="d" data-q="2" data-t="7月2日　2,309人（全日付平均の98.7%）" title="7月2日　2,309人（全日付平均の98.7%）" /><i className="d" data-q="4" data-t="7月3日　2,401人（全日付平均の102.6%）" title="7月3日　2,401人（全日付平均の102.6%）" /><i className="d" data-q="4" data-t="7月4日　2,418人（全日付平均の103.4%）" title="7月4日　2,418人（全日付平均の103.4%）" /><i className="d" data-q="5" data-t="7月5日　2,478人（全日付平均の105.9%）" title="7月5日　2,478人（全日付平均の105.9%）" /><i className="d" data-q="5" data-t="7月6日　2,468人（全日付平均の105.5%）" title="7月6日　2,468人（全日付平均の105.5%）" /><i className="d" data-q="5" data-t="7月7日　2,582人（全日付平均の110.4%）" title="7月7日　2,582人（全日付平均の110.4%）" /><i className="d" data-q="4" data-t="7月8日　2,391人（全日付平均の102.2%）" title="7月8日　2,391人（全日付平均の102.2%）" /><i className="d" data-q="2" data-t="7月9日　2,282人（全日付平均の97.5%）" title="7月9日　2,282人（全日付平均の97.5%）" /><i className="d" data-q="3" data-t="7月10日　2,344人（全日付平均の100.2%）" title="7月10日　2,344人（全日付平均の100.2%）" /><i className="d" data-q="4" data-t="7月11日　2,452人（全日付平均の104.8%）" title="7月11日　2,452人（全日付平均の104.8%）" /><i className="d" data-q="5" data-t="7月12日　2,511人（全日付平均の107.3%）" title="7月12日　2,511人（全日付平均の107.3%）" /><i className="d" data-q="5" data-t="7月13日　2,524人（全日付平均の107.9%）" title="7月13日　2,524人（全日付平均の107.9%）" /><i className="d" data-q="5" data-t="7月14日　2,477人（全日付平均の105.9%）" title="7月14日　2,477人（全日付平均の105.9%）" /><i className="d" data-q="2" data-t="7月15日　2,272人（全日付平均の97.1%）" title="7月15日　2,272人（全日付平均の97.1%）" /><i className="d" data-q="2" data-t="7月16日　2,271人（全日付平均の97.0%）" title="7月16日　2,271人（全日付平均の97.0%）" /><i className="d" data-q="2" data-t="7月17日　2,315人（全日付平均の98.9%）" title="7月17日　2,315人（全日付平均の98.9%）" /><i className="d" data-q="2" data-t="7月18日　2,295人（全日付平均の98.1%）" title="7月18日　2,295人（全日付平均の98.1%）" /><i className="d" data-q="5" data-t="7月19日　2,544人（全日付平均の108.7%）" title="7月19日　2,544人（全日付平均の108.7%）" /><i className="d" data-q="5" data-t="7月20日　2,593人（全日付平均の110.8%）" title="7月20日　2,593人（全日付平均の110.8%）" /><i className="d" data-q="5" data-t="7月21日　2,532人（全日付平均の108.2%）" title="7月21日　2,532人（全日付平均の108.2%）" /><i className="d" data-q="5" data-t="7月22日　2,472人（全日付平均の105.7%）" title="7月22日　2,472人（全日付平均の105.7%）" /><i className="d" data-q="1" data-t="7月23日　2,240人（全日付平均の95.8%）" title="7月23日　2,240人（全日付平均の95.8%）" /><i className="d" data-q="2" data-t="7月24日　2,326人（全日付平均の99.4%）" title="7月24日　2,326人（全日付平均の99.4%）" /><i className="d" data-q="5" data-t="7月25日　2,460人（全日付平均の105.1%）" title="7月25日　2,460人（全日付平均の105.1%）" /><i className="d" data-q="5" data-t="7月26日　2,483人（全日付平均の106.1%）" title="7月26日　2,483人（全日付平均の106.1%）" /><i className="d" data-q="5" data-t="7月27日　2,578人（全日付平均の110.2%）" title="7月27日　2,578人（全日付平均の110.2%）" /><i className="d" data-q="5" data-t="7月28日　2,472人（全日付平均の105.7%）" title="7月28日　2,472人（全日付平均の105.7%）" /><i className="d" data-q="4" data-t="7月29日　2,412人（全日付平均の103.1%）" title="7月29日　2,412人（全日付平均の103.1%）" /><i className="d" data-q="3" data-t="7月30日　2,338人（全日付平均の99.9%）" title="7月30日　2,338人（全日付平均の99.9%）" /><i className="d" data-q="3" data-t="7月31日　2,370人（全日付平均の101.3%）" title="7月31日　2,370人（全日付平均の101.3%）" />
      </div>
      <div className="mo n">8月</div>
      <div className="days">
        <i className="d" data-q="5" data-t="8月1日　2,519人（全日付平均の107.6%）" title="8月1日　2,519人（全日付平均の107.6%）" /><i className="d" data-q="5" data-t="8月2日　2,558人（全日付平均の109.4%）" title="8月2日　2,558人（全日付平均の109.4%）" /><i className="d" data-q="5" data-t="8月3日　2,595人（全日付平均の110.9%）" title="8月3日　2,595人（全日付平均の110.9%）" /><i className="d" data-q="5" data-t="8月4日　2,483人（全日付平均の106.1%）" title="8月4日　2,483人（全日付平均の106.1%）" /><i className="d" data-q="5" data-t="8月5日　2,487人（全日付平均の106.3%）" title="8月5日　2,487人（全日付平均の106.3%）" /><i className="d" data-q="4" data-t="8月6日　2,394人（全日付平均の102.3%）" title="8月6日　2,394人（全日付平均の102.3%）" /><i className="d" data-q="5" data-t="8月7日　2,527人（全日付平均の108.0%）" title="8月7日　2,527人（全日付平均の108.0%）" /><i className="d" data-q="5" data-t="8月8日　2,665人（全日付平均の113.9%）" title="8月8日　2,665人（全日付平均の113.9%）" /><i className="d" data-q="5" data-t="8月9日　2,544人（全日付平均の108.7%）" title="8月9日　2,544人（全日付平均の108.7%）" /><i className="d" data-q="5" data-t="8月10日　2,582人（全日付平均の110.3%）" title="8月10日　2,582人（全日付平均の110.3%）" /><i className="d" data-q="1" data-t="8月11日　2,148人（全日付平均の91.8%）" title="8月11日　2,148人（全日付平均の91.8%）" /><i className="d" data-q="2" data-t="8月12日　2,267人（全日付平均の96.9%）" title="8月12日　2,267人（全日付平均の96.9%）" /><i className="d" data-q="1" data-t="8月13日　2,223人（全日付平均の95.0%）" title="8月13日　2,223人（全日付平均の95.0%）" /><i className="d" data-q="2" data-t="8月14日　2,255人（全日付平均の96.4%）" title="8月14日　2,255人（全日付平均の96.4%）" /><i className="d" data-q="2" data-t="8月15日　2,271人（全日付平均の97.1%）" title="8月15日　2,271人（全日付平均の97.1%）" /><i className="d" data-q="5" data-t="8月16日　2,476人（全日付平均の105.8%）" title="8月16日　2,476人（全日付平均の105.8%）" /><i className="d" data-q="5" data-t="8月17日　2,629人（全日付平均の112.4%）" title="8月17日　2,629人（全日付平均の112.4%）" /><i className="d" data-q="5" data-t="8月18日　2,501人（全日付平均の106.9%）" title="8月18日　2,501人（全日付平均の106.9%）" /><i className="d" data-q="4" data-t="8月19日　2,416人（全日付平均の103.2%）" title="8月19日　2,416人（全日付平均の103.2%）" /><i className="d" data-q="3" data-t="8月20日　2,369人（全日付平均の101.3%）" title="8月20日　2,369人（全日付平均の101.3%）" /><i className="d" data-q="4" data-t="8月21日　2,438人（全日付平均の104.2%）" title="8月21日　2,438人（全日付平均の104.2%）" /><i className="d" data-q="4" data-t="8月22日　2,449人（全日付平均の104.7%）" title="8月22日　2,449人（全日付平均の104.7%）" /><i className="d" data-q="5" data-t="8月23日　2,485人（全日付平均の106.2%）" title="8月23日　2,485人（全日付平均の106.2%）" /><i className="d" data-q="5" data-t="8月24日　2,504人（全日付平均の107.0%）" title="8月24日　2,504人（全日付平均の107.0%）" /><i className="d" data-q="4" data-t="8月25日　2,416人（全日付平均の103.3%）" title="8月25日　2,416人（全日付平均の103.3%）" /><i className="d" data-q="3" data-t="8月26日　2,363人（全日付平均の101.0%）" title="8月26日　2,363人（全日付平均の101.0%）" /><i className="d" data-q="2" data-t="8月27日　2,282人（全日付平均の97.5%）" title="8月27日　2,282人（全日付平均の97.5%）" /><i className="d" data-q="3" data-t="8月28日　2,336人（全日付平均の99.9%）" title="8月28日　2,336人（全日付平均の99.9%）" /><i className="d" data-q="3" data-t="8月29日　2,346人（全日付平均の100.2%）" title="8月29日　2,346人（全日付平均の100.2%）" /><i className="d" data-q="3" data-t="8月30日　2,386人（全日付平均の102.0%）" title="8月30日　2,386人（全日付平均の102.0%）" /><i className="d" data-q="3" data-t="8月31日　2,379人（全日付平均の101.7%）" title="8月31日　2,379人（全日付平均の101.7%）" />
      </div>
      <div className="mo n">9月</div>
      <div className="days">
        <i className="d" data-q="4" data-t="9月1日　2,418人（全日付平均の103.4%）" title="9月1日　2,418人（全日付平均の103.4%）" /><i className="d" data-q="3" data-t="9月2日　2,365人（全日付平均の101.1%）" title="9月2日　2,365人（全日付平均の101.1%）" /><i className="d" data-q="2" data-t="9月3日　2,311人（全日付平均の98.8%）" title="9月3日　2,311人（全日付平均の98.8%）" /><i className="d" data-q="3" data-t="9月4日　2,334人（全日付平均の99.7%）" title="9月4日　2,334人（全日付平均の99.7%）" /><i className="d" data-q="4" data-t="9月5日　2,427人（全日付平均の103.7%）" title="9月5日　2,427人（全日付平均の103.7%）" /><i className="d" data-q="4" data-t="9月6日　2,439人（全日付平均の104.3%）" title="9月6日　2,439人（全日付平均の104.3%）" /><i className="d" data-q="5" data-t="9月7日　2,510人（全日付平均の107.3%）" title="9月7日　2,510人（全日付平均の107.3%）" /><i className="d" data-q="4" data-t="9月8日　2,408人（全日付平均の102.9%）" title="9月8日　2,408人（全日付平均の102.9%）" /><i className="d" data-q="4" data-t="9月9日　2,453人（全日付平均の104.8%）" title="9月9日　2,453人（全日付平均の104.8%）" /><i className="d" data-q="3" data-t="9月10日　2,383人（全日付平均の101.8%）" title="9月10日　2,383人（全日付平均の101.8%）" /><i className="d" data-q="4" data-t="9月11日　2,409人（全日付平均の102.9%）" title="9月11日　2,409人（全日付平均の102.9%）" /><i className="d" data-q="5" data-t="9月12日　2,483人（全日付平均の106.1%）" title="9月12日　2,483人（全日付平均の106.1%）" /><i className="d" data-q="5" data-t="9月13日　2,584人（全日付平均の110.5%）" title="9月13日　2,584人（全日付平均の110.5%）" /><i className="d" data-q="5" data-t="9月14日　2,605人（全日付平均の111.3%）" title="9月14日　2,605人（全日付平均の111.3%）" /><i className="d" data-q="5" data-t="9月15日　2,590人（全日付平均の110.7%）" title="9月15日　2,590人（全日付平均の110.7%）" /><i className="d" data-q="4" data-t="9月16日　2,415人（全日付平均の103.2%）" title="9月16日　2,415人（全日付平均の103.2%）" /><i className="d" data-q="4" data-t="9月17日　2,407人（全日付平均の102.9%）" title="9月17日　2,407人（全日付平均の102.9%）" /><i className="d" data-q="5" data-t="9月18日　2,473人（全日付平均の105.7%）" title="9月18日　2,473人（全日付平均の105.7%）" /><i className="d" data-q="4" data-t="9月19日　2,458人（全日付平均の105.1%）" title="9月19日　2,458人（全日付平均の105.1%）" /><i className="d" data-q="5" data-t="9月20日　2,677人（全日付平均の114.4%）" title="9月20日　2,677人（全日付平均の114.4%）" /><i className="d" data-q="5" data-t="9月21日　2,596人（全日付平均の110.9%）" title="9月21日　2,596人（全日付平均の110.9%）" /><i className="d" data-q="2" data-t="9月22日　2,313人（全日付平均の98.8%）" title="9月22日　2,313人（全日付平均の98.8%）" /><i className="d" data-q="1" data-t="9月23日　2,088人（全日付平均の89.2%）" title="9月23日　2,088人（全日付平均の89.2%）" /><i className="d" data-q="4" data-t="9月24日　2,447人（全日付平均の104.6%）" title="9月24日　2,447人（全日付平均の104.6%）" /><i className="d" data-q="5" data-t="9月25日　2,644人（全日付平均の113.0%）" title="9月25日　2,644人（全日付平均の113.0%）" /><i className="d" data-q="5" data-t="9月26日　2,649人（全日付平均の113.2%）" title="9月26日　2,649人（全日付平均の113.2%）" /><i className="d" data-q="5" data-t="9月27日　2,640人（全日付平均の112.8%）" title="9月27日　2,640人（全日付平均の112.8%）" /><i className="d" data-q="5" data-t="9月28日　2,653人（全日付平均の113.4%）" title="9月28日　2,653人（全日付平均の113.4%）" /><i className="d" data-q="5" data-t="9月29日　2,472人（全日付平均の105.7%）" title="9月29日　2,472人（全日付平均の105.7%）" /><i className="d" data-q="4" data-t="9月30日　2,427人（全日付平均の103.7%）" title="9月30日　2,427人（全日付平均の103.7%）" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">10月</div>
      <div className="days">
        <i className="d" data-q="4" data-t="10月1日　2,438人（全日付平均の104.2%）" title="10月1日　2,438人（全日付平均の104.2%）" /><i className="d" data-q="5" data-t="10月2日　2,467人（全日付平均の105.5%）" title="10月2日　2,467人（全日付平均の105.5%）" /><i className="d" data-q="5" data-t="10月3日　2,495人（全日付平均の106.6%）" title="10月3日　2,495人（全日付平均の106.6%）" /><i className="d" data-q="5" data-t="10月4日　2,506人（全日付平均の107.1%）" title="10月4日　2,506人（全日付平均の107.1%）" /><i className="d" data-q="5" data-t="10月5日　2,533人（全日付平均の108.2%）" title="10月5日　2,533人（全日付平均の108.2%）" /><i className="d" data-q="4" data-t="10月6日　2,448人（全日付平均の104.7%）" title="10月6日　2,448人（全日付平均の104.7%）" /><i className="d" data-q="3" data-t="10月7日　2,388人（全日付平均の102.0%）" title="10月7日　2,388人（全日付平均の102.0%）" /><i className="d" data-q="1" data-t="10月8日　2,236人（全日付平均の95.6%）" title="10月8日　2,236人（全日付平均の95.6%）" /><i className="d" data-q="1" data-t="10月9日　2,152人（全日付平均の92.0%）" title="10月9日　2,152人（全日付平均の92.0%）" /><i className="d" data-q="2" data-t="10月10日　2,274人（全日付平均の97.2%）" title="10月10日　2,274人（全日付平均の97.2%）" /><i className="d" data-q="5" data-t="10月11日　2,523人（全日付平均の107.8%）" title="10月11日　2,523人（全日付平均の107.8%）" /><i className="d" data-q="4" data-t="10月12日　2,442人（全日付平均の104.4%）" title="10月12日　2,442人（全日付平均の104.4%）" /><i className="d" data-q="3" data-t="10月13日　2,350人（全日付平均の100.4%）" title="10月13日　2,350人（全日付平均の100.4%）" /><i className="d" data-q="1" data-t="10月14日　2,187人（全日付平均の93.5%）" title="10月14日　2,187人（全日付平均の93.5%）" /><i className="d" data-q="2" data-t="10月15日　2,277人（全日付平均の97.3%）" title="10月15日　2,277人（全日付平均の97.3%）" /><i className="d" data-q="3" data-t="10月16日　2,328人（全日付平均の99.5%）" title="10月16日　2,328人（全日付平均の99.5%）" /><i className="d" data-q="4" data-t="10月17日　2,428人（全日付平均の103.8%）" title="10月17日　2,428人（全日付平均の103.8%）" /><i className="d" data-q="4" data-t="10月18日　2,451人（全日付平均の104.8%）" title="10月18日　2,451人（全日付平均の104.8%）" /><i className="d" data-q="4" data-t="10月19日　2,439人（全日付平均の104.3%）" title="10月19日　2,439人（全日付平均の104.3%）" /><i className="d" data-q="4" data-t="10月20日　2,423人（全日付平均の103.5%）" title="10月20日　2,423人（全日付平均の103.5%）" /><i className="d" data-q="3" data-t="10月21日　2,361人（全日付平均の100.9%）" title="10月21日　2,361人（全日付平均の100.9%）" /><i className="d" data-q="1" data-t="10月22日　2,180人（全日付平均の93.2%）" title="10月22日　2,180人（全日付平均の93.2%）" /><i className="d" data-q="2" data-t="10月23日　2,323人（全日付平均の99.3%）" title="10月23日　2,323人（全日付平均の99.3%）" /><i className="d" data-q="3" data-t="10月24日　2,359人（全日付平均の100.8%）" title="10月24日　2,359人（全日付平均の100.8%）" /><i className="d" data-q="4" data-t="10月25日　2,408人（全日付平均の102.9%）" title="10月25日　2,408人（全日付平均の102.9%）" /><i className="d" data-q="4" data-t="10月26日　2,426人（全日付平均の103.7%）" title="10月26日　2,426人（全日付平均の103.7%）" /><i className="d" data-q="3" data-t="10月27日　2,344人（全日付平均の100.2%）" title="10月27日　2,344人（全日付平均の100.2%）" /><i className="d" data-q="3" data-t="10月28日　2,339人（全日付平均の100.0%）" title="10月28日　2,339人（全日付平均の100.0%）" /><i className="d" data-q="1" data-t="10月29日　2,250人（全日付平均の96.2%）" title="10月29日　2,250人（全日付平均の96.2%）" /><i className="d" data-q="2" data-t="10月30日　2,297人（全日付平均の98.2%）" title="10月30日　2,297人（全日付平均の98.2%）" /><i className="d" data-q="3" data-t="10月31日　2,343人（全日付平均の100.2%）" title="10月31日　2,343人（全日付平均の100.2%）" />
      </div>
      <div className="mo n">11月</div>
      <div className="days">
        <i className="d" data-q="5" data-t="11月1日　2,615人（全日付平均の111.8%）" title="11月1日　2,615人（全日付平均の111.8%）" /><i className="d" data-q="5" data-t="11月2日　2,519人（全日付平均の107.7%）" title="11月2日　2,519人（全日付平均の107.7%）" /><i className="d" data-q="1" data-t="11月3日　1,720人（全日付平均の73.5%）" title="11月3日　1,720人（全日付平均の73.5%）" /><i className="d" data-q="1" data-t="11月4日　2,160人（全日付平均の92.3%）" title="11月4日　2,160人（全日付平均の92.3%）" /><i className="d" data-q="2" data-t="11月5日　2,324人（全日付平均の99.3%）" title="11月5日　2,324人（全日付平均の99.3%）" /><i className="d" data-q="4" data-t="11月6日　2,397人（全日付平均の102.5%）" title="11月6日　2,397人（全日付平均の102.5%）" /><i className="d" data-q="4" data-t="11月7日　2,449人（全日付平均の104.7%）" title="11月7日　2,449人（全日付平均の104.7%）" /><i className="d" data-q="4" data-t="11月8日　2,439人（全日付平均の104.2%）" title="11月8日　2,439人（全日付平均の104.2%）" /><i className="d" data-q="4" data-t="11月9日　2,440人（全日付平均の104.3%）" title="11月9日　2,440人（全日付平均の104.3%）" /><i className="d" data-q="3" data-t="11月10日　2,337人（全日付平均の99.9%）" title="11月10日　2,337人（全日付平均の99.9%）" /><i className="d" data-q="4" data-t="11月11日　2,412人（全日付平均の103.1%）" title="11月11日　2,412人（全日付平均の103.1%）" /><i className="d" data-q="1" data-t="11月12日　2,228人（全日付平均の95.2%）" title="11月12日　2,228人（全日付平均の95.2%）" /><i className="d" data-q="2" data-t="11月13日　2,254人（全日付平均の96.3%）" title="11月13日　2,254人（全日付平均の96.3%）" /><i className="d" data-q="2" data-t="11月14日　2,326人（全日付平均の99.4%）" title="11月14日　2,326人（全日付平均の99.4%）" /><i className="d" data-q="4" data-t="11月15日　2,427人（全日付平均の103.7%）" title="11月15日　2,427人（全日付平均の103.7%）" /><i className="d" data-q="4" data-t="11月16日　2,409人（全日付平均の103.0%）" title="11月16日　2,409人（全日付平均の103.0%）" /><i className="d" data-q="2" data-t="11月17日　2,282人（全日付平均の97.5%）" title="11月17日　2,282人（全日付平均の97.5%）" /><i className="d" data-q="2" data-t="11月18日　2,256人（全日付平均の96.4%）" title="11月18日　2,256人（全日付平均の96.4%）" /><i className="d" data-q="1" data-t="11月19日　2,239人（全日付平均の95.7%）" title="11月19日　2,239人（全日付平均の95.7%）" /><i className="d" data-q="3" data-t="11月20日　2,355人（全日付平均の100.7%）" title="11月20日　2,355人（全日付平均の100.7%）" /><i className="d" data-q="3" data-t="11月21日　2,354人（全日付平均の100.6%）" title="11月21日　2,354人（全日付平均の100.6%）" /><i className="d" data-q="5" data-t="11月22日　2,470人（全日付平均の105.5%）" title="11月22日　2,470人（全日付平均の105.5%）" /><i className="d" data-q="1" data-t="11月23日　1,638人（全日付平均の70.0%）" title="11月23日　1,638人（全日付平均の70.0%）" /><i className="d" data-q="1" data-t="11月24日　2,253人（全日付平均の96.3%）" title="11月24日　2,253人（全日付平均の96.3%）" /><i className="d" data-q="3" data-t="11月25日　2,350人（全日付平均の100.5%）" title="11月25日　2,350人（全日付平均の100.5%）" /><i className="d" data-q="1" data-t="11月26日　2,235人（全日付平均の95.5%）" title="11月26日　2,235人（全日付平均の95.5%）" /><i className="d" data-q="2" data-t="11月27日　2,271人（全日付平均の97.1%）" title="11月27日　2,271人（全日付平均の97.1%）" /><i className="d" data-q="2" data-t="11月28日　2,298人（全日付平均の98.2%）" title="11月28日　2,298人（全日付平均の98.2%）" /><i className="d" data-q="2" data-t="11月29日　2,307人（全日付平均の98.6%）" title="11月29日　2,307人（全日付平均の98.6%）" /><i className="d" data-q="2" data-t="11月30日　2,323人（全日付平均の99.3%）" title="11月30日　2,323人（全日付平均の99.3%）" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">12月</div>
      <div className="days">
        <i className="d" data-q="2" data-t="12月1日　2,312人（全日付平均の98.8%）" title="12月1日　2,312人（全日付平均の98.8%）" /><i className="d" data-q="1" data-t="12月2日　2,225人（全日付平均の95.1%）" title="12月2日　2,225人（全日付平均の95.1%）" /><i className="d" data-q="1" data-t="12月3日　2,245人（全日付平均の96.0%）" title="12月3日　2,245人（全日付平均の96.0%）" /><i className="d" data-q="1" data-t="12月4日　2,248人（全日付平均の96.1%）" title="12月4日　2,248人（全日付平均の96.1%）" /><i className="d" data-q="2" data-t="12月5日　2,322人（全日付平均の99.3%）" title="12月5日　2,322人（全日付平均の99.3%）" /><i className="d" data-q="3" data-t="12月6日　2,343人（全日付平均の100.1%）" title="12月6日　2,343人（全日付平均の100.1%）" /><i className="d" data-q="3" data-t="12月7日　2,369人（全日付平均の101.3%）" title="12月7日　2,369人（全日付平均の101.3%）" /><i className="d" data-q="2" data-t="12月8日　2,254人（全日付平均の96.3%）" title="12月8日　2,254人（全日付平均の96.3%）" /><i className="d" data-q="1" data-t="12月9日　2,213人（全日付平均の94.6%）" title="12月9日　2,213人（全日付平均の94.6%）" /><i className="d" data-q="1" data-t="12月10日　2,202人（全日付平均の94.1%）" title="12月10日　2,202人（全日付平均の94.1%）" /><i className="d" data-q="2" data-t="12月11日　2,269人（全日付平均の97.0%）" title="12月11日　2,269人（全日付平均の97.0%）" /><i className="d" data-q="4" data-t="12月12日　2,391人（全日付平均の102.2%）" title="12月12日　2,391人（全日付平均の102.2%）" /><i className="d" data-q="3" data-t="12月13日　2,339人（全日付平均の100.0%）" title="12月13日　2,339人（全日付平均の100.0%）" /><i className="d" data-q="3" data-t="12月14日　2,328人（全日付平均の99.5%）" title="12月14日　2,328人（全日付平均の99.5%）" /><i className="d" data-q="2" data-t="12月15日　2,287人（全日付平均の97.8%）" title="12月15日　2,287人（全日付平均の97.8%）" /><i className="d" data-q="2" data-t="12月16日　2,270人（全日付平均の97.0%）" title="12月16日　2,270人（全日付平均の97.0%）" /><i className="d" data-q="1" data-t="12月17日　2,239人（全日付平均の95.7%）" title="12月17日　2,239人（全日付平均の95.7%）" /><i className="d" data-q="2" data-t="12月18日　2,301人（全日付平均の98.4%）" title="12月18日　2,301人（全日付平均の98.4%）" /><i className="d" data-q="3" data-t="12月19日　2,359人（全日付平均の100.8%）" title="12月19日　2,359人（全日付平均の100.8%）" /><i className="d" data-q="4" data-t="12月20日　2,435人（全日付平均の104.1%）" title="12月20日　2,435人（全日付平均の104.1%）" /><i className="d" data-q="5" data-t="12月21日　2,495人（全日付平均の106.6%）" title="12月21日　2,495人（全日付平均の106.6%）" /><i className="d" data-q="3" data-t="12月22日　2,371人（全日付平均の101.3%）" title="12月22日　2,371人（全日付平均の101.3%）" /><i className="d" data-q="1" data-t="12月23日　2,100人（全日付平均の89.7%）" title="12月23日　2,100人（全日付平均の89.7%）" /><i className="d" data-q="2" data-t="12月24日　2,258人（全日付平均の96.5%）" title="12月24日　2,258人（全日付平均の96.5%）" /><i className="d" data-q="5" data-t="12月25日　2,516人（全日付平均の107.5%）" title="12月25日　2,516人（全日付平均の107.5%）" /><i className="d" data-q="5" data-t="12月26日　2,557人（全日付平均の109.3%）" title="12月26日　2,557人（全日付平均の109.3%）" /><i className="d" data-q="5" data-t="12月27日　2,545人（全日付平均の108.8%）" title="12月27日　2,545人（全日付平均の108.8%）" /><i className="d" data-q="5" data-t="12月28日　2,484人（全日付平均の106.2%）" title="12月28日　2,484人（全日付平均の106.2%）" /><i className="d" data-q="1" data-t="12月29日　1,923人（全日付平均の82.2%）" title="12月29日　1,923人（全日付平均の82.2%）" /><i className="d" data-q="1" data-t="12月30日　1,659人（全日付平均の70.9%）" title="12月30日　1,659人（全日付平均の70.9%）" /><i className="d" data-q="1" data-t="12月31日　1,504人（全日付平均の64.3%）" title="12月31日　1,504人（全日付平均の64.3%）" />
      </div>
    </>
  );
}

export function WeekdayBars() {
  return (
    <div className="bars">
      <div className="b">
        <span className="k">月</span>
        <span className="t"><i style={{ "--w": "89.5%" } as CSSProperties} /></span>
        <span className="v n">2,446</span>
      </div>
      <div className="b">
        <span className="k">火</span>
        <span className="t"><i style={{ "--w": "100.0%" } as CSSProperties} /></span>
        <span className="v n">2,733</span>
      </div>
      <div className="b">
        <span className="k">水</span>
        <span className="t"><i style={{ "--w": "96.1%" } as CSSProperties} /></span>
        <span className="v n">2,626</span>
      </div>
      <div className="b">
        <span className="k">木</span>
        <span className="t"><i style={{ "--w": "92.8%" } as CSSProperties} /></span>
        <span className="v n">2,537</span>
      </div>
      <div className="b">
        <span className="k">金</span>
        <span className="t"><i style={{ "--w": "93.2%" } as CSSProperties} /></span>
        <span className="v n">2,547</span>
      </div>
      <div className="b on">
        <span className="k">土</span>
        <span className="t"><i style={{ "--w": "68.4%" } as CSSProperties} /></span>
        <span className="v n">1,870</span>
      </div>
      <div className="b on">
        <span className="k">日</span>
        <span className="t"><i style={{ "--w": "59.4%" } as CSSProperties} /></span>
        <span className="v n">1,623</span>
      </div>
    </div>
  );
}

export function AprilBars() {
  return (
    <div className="bars">
      <div className="b">
        <span className="k">3/30</span>
        <span className="t"><i style={{ "--w": "78.7%" } as CSSProperties} /></span>
        <span className="v n">92.6%</span>
      </div>
      <div className="b">
        <span className="k">3/31</span>
        <span className="t"><i style={{ "--w": "72.1%" } as CSSProperties} /></span>
        <span className="v n">84.8%</span>
      </div>
      <div className="b on">
        <span className="k">4/1</span>
        <span className="t"><i style={{ "--w": "65.2%" } as CSSProperties} /></span>
        <span className="v n">76.7%</span>
      </div>
      <div className="b on">
        <span className="k">4/2</span>
        <span className="t"><i style={{ "--w": "90.2%" } as CSSProperties} /></span>
        <span className="v n">106.1%</span>
      </div>
      <div className="b">
        <span className="k">4/3</span>
        <span className="t"><i style={{ "--w": "92.0%" } as CSSProperties} /></span>
        <span className="v n">108.3%</span>
      </div>
    </div>
  );
}

/** 点が推定値、横棒が95%信頼区間。0.95〜1.05 を幅いっぱいに割り当てている。 */
export function RokuyoDots() {
  return (
    <div className="dots">
      <div className="r on">
        <span className="k">大安</span>
        <span className="t">
          <i className="ci" style={{ left: "49.1%", width: "18.9%" }} />
          <i className="pt" style={{ left: "58.6%" }} />
        </span>
        <span className="v n">1.009</span>
      </div>
      <div className="r">
        <span className="k">先負</span>
        <span className="t">
          <i className="ci" style={{ left: "43.4%", width: "16.5%" }} />
          <i className="pt" style={{ left: "51.7%" }} />
        </span>
        <span className="v n">1.002</span>
      </div>
      <div className="r">
        <span className="k">仏滅</span>
        <span className="t">
          <i className="ci" style={{ left: "41.4%", width: "16.8%" }} />
          <i className="pt" style={{ left: "49.8%" }} />
        </span>
        <span className="v n">1.000</span>
      </div>
      <div className="r">
        <span className="k">先勝</span>
        <span className="t">
          <i className="ci" style={{ left: "39.6%", width: "18.3%" }} />
          <i className="pt" style={{ left: "48.7%" }} />
        </span>
        <span className="v n">0.999</span>
      </div>
      <div className="r">
        <span className="k">友引</span>
        <span className="t">
          <i className="ci" style={{ left: "36.6%", width: "19.5%" }} />
          <i className="pt" style={{ left: "46.3%" }} />
        </span>
        <span className="v n">0.996</span>
      </div>
      <div className="r">
        <span className="k">赤口</span>
        <span className="t">
          <i className="ci" style={{ left: "35.9%", width: "18.2%" }} />
          <i className="pt" style={{ left: "45.0%" }} />
        </span>
        <span className="v n">0.995</span>
      </div>
    </div>
  );
}

