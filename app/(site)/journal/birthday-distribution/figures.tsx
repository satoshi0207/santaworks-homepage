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
      <div className="mo n">1月</div>
      <div className="days">
        <i className="d" data-q="1" title="1/1　1,475人" /><i className="d" data-q="1" title="1/2　1,487人" /><i className="d" data-q="1" title="1/3　1,597人" /><i className="d" data-q="4" title="1/4　2,412人" /><i className="d" data-q="5" title="1/5　2,820人" /><i className="d" data-q="5" title="1/6　2,609人" /><i className="d" data-q="4" title="1/7　2,404人" /><i className="d" data-q="1" title="1/8　2,209人" /><i className="d" data-q="1" title="1/9　2,201人" /><i className="d" data-q="2" title="1/10　2,316人" /><i className="d" data-q="3" title="1/11　2,373人" /><i className="d" data-q="3" title="1/12　2,379人" /><i className="d" data-q="3" title="1/13　2,340人" /><i className="d" data-q="1" title="1/14　2,231人" /><i className="d" data-q="4" title="1/15　2,420人" /><i className="d" data-q="4" title="1/16　2,420人" /><i className="d" data-q="4" title="1/17　2,394人" /><i className="d" data-q="4" title="1/18　2,426人" /><i className="d" data-q="4" title="1/19　2,453人" /><i className="d" data-q="4" title="1/20　2,429人" /><i className="d" data-q="3" title="1/21　2,328人" /><i className="d" data-q="3" title="1/22　2,360人" /><i className="d" data-q="5" title="1/23　2,464人" /><i className="d" data-q="3" title="1/24　2,366人" /><i className="d" data-q="4" title="1/25　2,412人" /><i className="d" data-q="4" title="1/26　2,433人" /><i className="d" data-q="3" title="1/27　2,357人" /><i className="d" data-q="1" title="1/28　2,249人" /><i className="d" data-q="2" title="1/29　2,291人" /><i className="d" data-q="2" title="1/30　2,309人" /><i className="d" data-q="2" title="1/31　2,254人" />
      </div>
      <div className="mo n">2月</div>
      <div className="days">
        <i className="d" data-q="4" title="2/1　2,419人" /><i className="d" data-q="5" title="2/2　2,494人" /><i className="d" data-q="3" title="2/3　2,329人" /><i className="d" data-q="1" title="2/4　2,185人" /><i className="d" data-q="2" title="2/5　2,306人" /><i className="d" data-q="3" title="2/6　2,331人" /><i className="d" data-q="2" title="2/7　2,288人" /><i className="d" data-q="4" title="2/8　2,401人" /><i className="d" data-q="4" title="2/9　2,416人" /><i className="d" data-q="3" title="2/10　2,378人" /><i className="d" data-q="1" title="2/11　1,659人" /><i className="d" data-q="1" title="2/12　2,120人" /><i className="d" data-q="2" title="2/13　2,301人" /><i className="d" data-q="3" title="2/14　2,381人" /><i className="d" data-q="3" title="2/15　2,376人" /><i className="d" data-q="4" title="2/16　2,391人" /><i className="d" data-q="2" title="2/17　2,290人" /><i className="d" data-q="1" title="2/18　2,200人" /><i className="d" data-q="1" title="2/19　2,228人" /><i className="d" data-q="3" title="2/20　2,357人" /><i className="d" data-q="2" title="2/21　2,302人" /><i className="d" data-q="5" title="2/22　2,486人" /><i className="d" data-q="1" title="2/23　2,030人" /><i className="d" data-q="1" title="2/24　2,177人" /><i className="d" data-q="1" title="2/25　2,200人" /><i className="d" data-q="1" title="2/26　2,248人" /><i className="d" data-q="2" title="2/27　2,300人" /><i className="d" data-q="1" title="2/28　2,220人" /><i className="d" data-q="1" title="2/29　1,962人" /><i className="d" data-q="0" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">3月</div>
      <div className="days">
        <i className="d" data-q="4" title="3/1　2,411人" /><i className="d" data-q="3" title="3/2　2,389人" /><i className="d" data-q="3" title="3/3　2,390人" /><i className="d" data-q="1" title="3/4　2,207人" /><i className="d" data-q="1" title="3/5　2,214人" /><i className="d" data-q="2" title="3/6　2,262人" /><i className="d" data-q="2" title="3/7　2,309人" /><i className="d" data-q="2" title="3/8　2,311人" /><i className="d" data-q="4" title="3/9　2,402人" /><i className="d" data-q="2" title="3/10　2,279人" /><i className="d" data-q="1" title="3/11　2,120人" /><i className="d" data-q="1" title="3/12　2,153人" /><i className="d" data-q="1" title="3/13　2,232人" /><i className="d" data-q="2" title="3/14　2,276人" /><i className="d" data-q="3" title="3/15　2,356人" /><i className="d" data-q="3" title="3/16　2,369人" /><i className="d" data-q="2" title="3/17　2,258人" /><i className="d" data-q="2" title="3/18　2,264人" /><i className="d" data-q="1" title="3/19　2,205人" /><i className="d" data-q="1" title="3/20　2,003人" /><i className="d" data-q="1" title="3/21　1,829人" /><i className="d" data-q="3" title="3/22　2,345人" /><i className="d" data-q="4" title="3/23　2,436人" /><i className="d" data-q="2" title="3/24　2,285人" /><i className="d" data-q="1" title="3/25　2,237人" /><i className="d" data-q="1" title="3/26　2,168人" /><i className="d" data-q="1" title="3/27　2,163人" /><i className="d" data-q="1" title="3/28　2,172人" /><i className="d" data-q="1" title="3/29　2,158人" /><i className="d" data-q="1" title="3/30　2,168人" /><i className="d" data-q="1" title="3/31　1,984人" />
      </div>
      <div className="mo n">4月</div>
      <div className="days">
        <i className="d" data-q="1" title="4/1　1,794人" /><i className="d" data-q="5" title="4/2　2,483人" /><i className="d" data-q="5" title="4/3　2,533人" /><i className="d" data-q="4" title="4/4　2,436人" /><i className="d" data-q="5" title="4/5　2,476人" /><i className="d" data-q="4" title="4/6　2,429人" /><i className="d" data-q="3" title="4/7　2,339人" /><i className="d" data-q="3" title="4/8　2,354人" /><i className="d" data-q="1" title="4/9　2,188人" /><i className="d" data-q="2" title="4/10　2,277人" /><i className="d" data-q="2" title="4/11　2,317人" /><i className="d" data-q="3" title="4/12　2,348人" /><i className="d" data-q="3" title="4/13　2,371人" /><i className="d" data-q="1" title="4/14　2,239人" /><i className="d" data-q="3" title="4/15　2,342人" /><i className="d" data-q="1" title="4/16　2,230人" /><i className="d" data-q="2" title="4/17　2,306人" /><i className="d" data-q="3" title="4/18　2,333人" /><i className="d" data-q="3" title="4/19　2,330人" /><i className="d" data-q="4" title="4/20　2,447人" /><i className="d" data-q="3" title="4/21　2,368人" /><i className="d" data-q="3" title="4/22　2,360人" /><i className="d" data-q="2" title="4/23　2,303人" /><i className="d" data-q="4" title="4/24　2,394人" /><i className="d" data-q="5" title="4/25　2,466人" /><i className="d" data-q="5" title="4/26　2,531人" /><i className="d" data-q="5" title="4/27　2,664人" /><i className="d" data-q="5" title="4/28　2,531人" /><i className="d" data-q="1" title="4/29　1,706人" /><i className="d" data-q="1" title="4/30　2,216人" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">5月</div>
      <div className="days">
        <i className="d" data-q="5" title="5/1　2,638人" /><i className="d" data-q="5" title="5/2　2,719人" /><i className="d" data-q="1" title="5/3　1,824人" /><i className="d" data-q="1" title="5/4　1,737人" /><i className="d" data-q="1" title="5/5　1,732人" /><i className="d" data-q="1" title="5/6　2,093人" /><i className="d" data-q="5" title="5/7　2,471人" /><i className="d" data-q="5" title="5/8　2,610人" /><i className="d" data-q="5" title="5/9　2,543人" /><i className="d" data-q="5" title="5/10　2,600人" /><i className="d" data-q="5" title="5/11　2,494人" /><i className="d" data-q="3" title="5/12　2,381人" /><i className="d" data-q="2" title="5/13　2,284人" /><i className="d" data-q="2" title="5/14　2,259人" /><i className="d" data-q="4" title="5/15　2,417人" /><i className="d" data-q="4" title="5/16　2,404人" /><i className="d" data-q="4" title="5/17　2,396人" /><i className="d" data-q="4" title="5/18　2,424人" /><i className="d" data-q="2" title="5/19　2,258人" /><i className="d" data-q="2" title="5/20　2,284人" /><i className="d" data-q="1" title="5/21　2,234人" /><i className="d" data-q="2" title="5/22　2,313人" /><i className="d" data-q="3" title="5/23　2,374人" /><i className="d" data-q="3" title="5/24　2,369人" /><i className="d" data-q="4" title="5/25　2,457人" /><i className="d" data-q="2" title="5/26　2,290人" /><i className="d" data-q="1" title="5/27　2,233人" /><i className="d" data-q="1" title="5/28　2,184人" /><i className="d" data-q="2" title="5/29　2,265人" /><i className="d" data-q="2" title="5/30　2,317人" /><i className="d" data-q="2" title="5/31　2,293人" />
      </div>
      <div className="mo n">6月</div>
      <div className="days">
        <i className="d" data-q="4" title="6/1　2,460人" /><i className="d" data-q="2" title="6/2　2,301人" /><i className="d" data-q="2" title="6/3　2,320人" /><i className="d" data-q="1" title="6/4　2,227人" /><i className="d" data-q="3" title="6/5　2,333人" /><i className="d" data-q="4" title="6/6　2,398人" /><i className="d" data-q="3" title="6/7　2,385人" /><i className="d" data-q="4" title="6/8　2,404人" /><i className="d" data-q="2" title="6/9　2,306人" /><i className="d" data-q="3" title="6/10　2,368人" /><i className="d" data-q="2" title="6/11　2,284人" /><i className="d" data-q="3" title="6/12　2,351人" /><i className="d" data-q="3" title="6/13　2,384人" /><i className="d" data-q="4" title="6/14　2,414人" /><i className="d" data-q="4" title="6/15　2,458人" /><i className="d" data-q="3" title="6/16　2,364人" /><i className="d" data-q="3" title="6/17　2,330人" /><i className="d" data-q="2" title="6/18　2,283人" /><i className="d" data-q="3" title="6/19　2,328人" /><i className="d" data-q="3" title="6/20　2,370人" /><i className="d" data-q="4" title="6/21　2,429人" /><i className="d" data-q="5" title="6/22　2,495人" /><i className="d" data-q="3" title="6/23　2,339人" /><i className="d" data-q="2" title="6/24　2,297人" /><i className="d" data-q="2" title="6/25　2,299人" /><i className="d" data-q="3" title="6/26　2,331人" /><i className="d" data-q="3" title="6/27　2,338人" /><i className="d" data-q="4" title="6/28　2,392人" /><i className="d" data-q="3" title="6/29　2,361人" /><i className="d" data-q="2" title="6/30　2,316人" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">7月</div>
      <div className="days">
        <i className="d" data-q="4" title="7/1　2,448人" /><i className="d" data-q="2" title="7/2　2,309人" /><i className="d" data-q="4" title="7/3　2,401人" /><i className="d" data-q="4" title="7/4　2,418人" /><i className="d" data-q="5" title="7/5　2,478人" /><i className="d" data-q="5" title="7/6　2,468人" /><i className="d" data-q="5" title="7/7　2,582人" /><i className="d" data-q="4" title="7/8　2,391人" /><i className="d" data-q="2" title="7/9　2,282人" /><i className="d" data-q="3" title="7/10　2,344人" /><i className="d" data-q="4" title="7/11　2,452人" /><i className="d" data-q="5" title="7/12　2,511人" /><i className="d" data-q="5" title="7/13　2,524人" /><i className="d" data-q="5" title="7/14　2,477人" /><i className="d" data-q="2" title="7/15　2,272人" /><i className="d" data-q="2" title="7/16　2,271人" /><i className="d" data-q="2" title="7/17　2,315人" /><i className="d" data-q="2" title="7/18　2,295人" /><i className="d" data-q="5" title="7/19　2,544人" /><i className="d" data-q="5" title="7/20　2,593人" /><i className="d" data-q="5" title="7/21　2,532人" /><i className="d" data-q="5" title="7/22　2,472人" /><i className="d" data-q="1" title="7/23　2,240人" /><i className="d" data-q="2" title="7/24　2,326人" /><i className="d" data-q="5" title="7/25　2,460人" /><i className="d" data-q="5" title="7/26　2,483人" /><i className="d" data-q="5" title="7/27　2,578人" /><i className="d" data-q="5" title="7/28　2,472人" /><i className="d" data-q="4" title="7/29　2,412人" /><i className="d" data-q="3" title="7/30　2,338人" /><i className="d" data-q="3" title="7/31　2,370人" />
      </div>
      <div className="mo n">8月</div>
      <div className="days">
        <i className="d" data-q="5" title="8/1　2,519人" /><i className="d" data-q="5" title="8/2　2,558人" /><i className="d" data-q="5" title="8/3　2,595人" /><i className="d" data-q="5" title="8/4　2,483人" /><i className="d" data-q="5" title="8/5　2,487人" /><i className="d" data-q="4" title="8/6　2,394人" /><i className="d" data-q="5" title="8/7　2,527人" /><i className="d" data-q="5" title="8/8　2,665人" /><i className="d" data-q="5" title="8/9　2,544人" /><i className="d" data-q="5" title="8/10　2,582人" /><i className="d" data-q="1" title="8/11　2,148人" /><i className="d" data-q="2" title="8/12　2,267人" /><i className="d" data-q="1" title="8/13　2,223人" /><i className="d" data-q="2" title="8/14　2,255人" /><i className="d" data-q="2" title="8/15　2,271人" /><i className="d" data-q="5" title="8/16　2,476人" /><i className="d" data-q="5" title="8/17　2,629人" /><i className="d" data-q="5" title="8/18　2,501人" /><i className="d" data-q="4" title="8/19　2,416人" /><i className="d" data-q="3" title="8/20　2,369人" /><i className="d" data-q="4" title="8/21　2,438人" /><i className="d" data-q="4" title="8/22　2,449人" /><i className="d" data-q="5" title="8/23　2,485人" /><i className="d" data-q="5" title="8/24　2,504人" /><i className="d" data-q="4" title="8/25　2,416人" /><i className="d" data-q="3" title="8/26　2,363人" /><i className="d" data-q="2" title="8/27　2,282人" /><i className="d" data-q="3" title="8/28　2,336人" /><i className="d" data-q="3" title="8/29　2,346人" /><i className="d" data-q="3" title="8/30　2,386人" /><i className="d" data-q="3" title="8/31　2,379人" />
      </div>
      <div className="mo n">9月</div>
      <div className="days">
        <i className="d" data-q="4" title="9/1　2,418人" /><i className="d" data-q="3" title="9/2　2,365人" /><i className="d" data-q="2" title="9/3　2,311人" /><i className="d" data-q="3" title="9/4　2,334人" /><i className="d" data-q="4" title="9/5　2,427人" /><i className="d" data-q="4" title="9/6　2,439人" /><i className="d" data-q="5" title="9/7　2,510人" /><i className="d" data-q="4" title="9/8　2,408人" /><i className="d" data-q="4" title="9/9　2,453人" /><i className="d" data-q="3" title="9/10　2,383人" /><i className="d" data-q="4" title="9/11　2,409人" /><i className="d" data-q="5" title="9/12　2,483人" /><i className="d" data-q="5" title="9/13　2,584人" /><i className="d" data-q="5" title="9/14　2,605人" /><i className="d" data-q="5" title="9/15　2,590人" /><i className="d" data-q="4" title="9/16　2,415人" /><i className="d" data-q="4" title="9/17　2,407人" /><i className="d" data-q="5" title="9/18　2,473人" /><i className="d" data-q="4" title="9/19　2,458人" /><i className="d" data-q="5" title="9/20　2,677人" /><i className="d" data-q="5" title="9/21　2,596人" /><i className="d" data-q="2" title="9/22　2,313人" /><i className="d" data-q="1" title="9/23　2,088人" /><i className="d" data-q="4" title="9/24　2,447人" /><i className="d" data-q="5" title="9/25　2,644人" /><i className="d" data-q="5" title="9/26　2,649人" /><i className="d" data-q="5" title="9/27　2,640人" /><i className="d" data-q="5" title="9/28　2,653人" /><i className="d" data-q="5" title="9/29　2,472人" /><i className="d" data-q="4" title="9/30　2,427人" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">10月</div>
      <div className="days">
        <i className="d" data-q="4" title="10/1　2,438人" /><i className="d" data-q="5" title="10/2　2,467人" /><i className="d" data-q="5" title="10/3　2,495人" /><i className="d" data-q="5" title="10/4　2,506人" /><i className="d" data-q="5" title="10/5　2,533人" /><i className="d" data-q="4" title="10/6　2,448人" /><i className="d" data-q="3" title="10/7　2,388人" /><i className="d" data-q="1" title="10/8　2,236人" /><i className="d" data-q="1" title="10/9　2,152人" /><i className="d" data-q="2" title="10/10　2,274人" /><i className="d" data-q="5" title="10/11　2,523人" /><i className="d" data-q="4" title="10/12　2,442人" /><i className="d" data-q="3" title="10/13　2,350人" /><i className="d" data-q="1" title="10/14　2,187人" /><i className="d" data-q="2" title="10/15　2,277人" /><i className="d" data-q="3" title="10/16　2,328人" /><i className="d" data-q="4" title="10/17　2,428人" /><i className="d" data-q="4" title="10/18　2,451人" /><i className="d" data-q="4" title="10/19　2,439人" /><i className="d" data-q="4" title="10/20　2,423人" /><i className="d" data-q="3" title="10/21　2,361人" /><i className="d" data-q="1" title="10/22　2,180人" /><i className="d" data-q="2" title="10/23　2,323人" /><i className="d" data-q="3" title="10/24　2,359人" /><i className="d" data-q="4" title="10/25　2,408人" /><i className="d" data-q="4" title="10/26　2,426人" /><i className="d" data-q="3" title="10/27　2,344人" /><i className="d" data-q="3" title="10/28　2,339人" /><i className="d" data-q="1" title="10/29　2,250人" /><i className="d" data-q="2" title="10/30　2,297人" /><i className="d" data-q="3" title="10/31　2,343人" />
      </div>
      <div className="mo n">11月</div>
      <div className="days">
        <i className="d" data-q="5" title="11/1　2,615人" /><i className="d" data-q="5" title="11/2　2,519人" /><i className="d" data-q="1" title="11/3　1,720人" /><i className="d" data-q="1" title="11/4　2,160人" /><i className="d" data-q="2" title="11/5　2,324人" /><i className="d" data-q="4" title="11/6　2,397人" /><i className="d" data-q="4" title="11/7　2,449人" /><i className="d" data-q="4" title="11/8　2,439人" /><i className="d" data-q="4" title="11/9　2,440人" /><i className="d" data-q="3" title="11/10　2,337人" /><i className="d" data-q="4" title="11/11　2,412人" /><i className="d" data-q="1" title="11/12　2,228人" /><i className="d" data-q="2" title="11/13　2,254人" /><i className="d" data-q="2" title="11/14　2,326人" /><i className="d" data-q="4" title="11/15　2,427人" /><i className="d" data-q="4" title="11/16　2,409人" /><i className="d" data-q="2" title="11/17　2,282人" /><i className="d" data-q="2" title="11/18　2,256人" /><i className="d" data-q="1" title="11/19　2,239人" /><i className="d" data-q="3" title="11/20　2,355人" /><i className="d" data-q="3" title="11/21　2,354人" /><i className="d" data-q="5" title="11/22　2,470人" /><i className="d" data-q="1" title="11/23　1,638人" /><i className="d" data-q="1" title="11/24　2,253人" /><i className="d" data-q="3" title="11/25　2,350人" /><i className="d" data-q="1" title="11/26　2,235人" /><i className="d" data-q="2" title="11/27　2,271人" /><i className="d" data-q="2" title="11/28　2,298人" /><i className="d" data-q="2" title="11/29　2,307人" /><i className="d" data-q="2" title="11/30　2,323人" /><i className="d" data-q="0" />
      </div>
      <div className="mo n">12月</div>
      <div className="days">
        <i className="d" data-q="2" title="12/1　2,312人" /><i className="d" data-q="1" title="12/2　2,225人" /><i className="d" data-q="1" title="12/3　2,245人" /><i className="d" data-q="1" title="12/4　2,248人" /><i className="d" data-q="2" title="12/5　2,322人" /><i className="d" data-q="3" title="12/6　2,343人" /><i className="d" data-q="3" title="12/7　2,369人" /><i className="d" data-q="2" title="12/8　2,254人" /><i className="d" data-q="1" title="12/9　2,213人" /><i className="d" data-q="1" title="12/10　2,202人" /><i className="d" data-q="2" title="12/11　2,269人" /><i className="d" data-q="4" title="12/12　2,391人" /><i className="d" data-q="3" title="12/13　2,339人" /><i className="d" data-q="3" title="12/14　2,328人" /><i className="d" data-q="2" title="12/15　2,287人" /><i className="d" data-q="2" title="12/16　2,270人" /><i className="d" data-q="1" title="12/17　2,239人" /><i className="d" data-q="2" title="12/18　2,301人" /><i className="d" data-q="3" title="12/19　2,359人" /><i className="d" data-q="4" title="12/20　2,435人" /><i className="d" data-q="5" title="12/21　2,495人" /><i className="d" data-q="3" title="12/22　2,371人" /><i className="d" data-q="1" title="12/23　2,100人" /><i className="d" data-q="2" title="12/24　2,258人" /><i className="d" data-q="5" title="12/25　2,516人" /><i className="d" data-q="5" title="12/26　2,557人" /><i className="d" data-q="5" title="12/27　2,545人" /><i className="d" data-q="5" title="12/28　2,484人" /><i className="d" data-q="1" title="12/29　1,923人" /><i className="d" data-q="1" title="12/30　1,659人" /><i className="d" data-q="1" title="12/31　1,504人" />
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

