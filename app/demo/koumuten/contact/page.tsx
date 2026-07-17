import type { Metadata } from "next";
import DemoMap from "@/components/DemoMap";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "架空の工務店「ひだまり工務店」のお問い合わせページ（デザインサンプル）。",
};

export default function KoumutenContact() {
  return (
    <>
      <PageHead en="Contact" title="お問い合わせ" />

      <section className="hd-section">
        <div className="hd-wrap">
          <p className="hd-lead">
            新築・リフォームのご相談、お見積り、採用のお問い合わせまで。
            どんな小さなことでもお気軽にどうぞ。ご相談・お見積りは無料です。
          </p>

          <p className="hd-note" style={{ marginBottom: "2rem" }}>
            ※ これはデザインサンプルです。下のフォームは見た目だけで、
            入力しても<strong>送信されません</strong>。電話番号・住所もすべて架空です。
          </p>

          <div
            style={{
              display: "grid",
              gap: "clamp(1.6rem, 4vw, 3rem)",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
              alignItems: "start",
            }}
          >
            {/* フォーム */}
            <form className="hd-form" aria-label="お問い合わせフォーム（サンプル）">
              <div className="hd-field">
                <label htmlFor="name">
                  お名前<span className="req">必須</span>
                </label>
                <input id="name" type="text" placeholder="山田 太郎" disabled />
              </div>
              <div className="hd-field">
                <label htmlFor="tel">お電話番号</label>
                <input id="tel" type="tel" placeholder="000-0000-0000" disabled />
              </div>
              <div className="hd-field">
                <label htmlFor="email">
                  メールアドレス<span className="req">必須</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  disabled
                />
              </div>
              <div className="hd-field">
                <label htmlFor="kind">ご相談の種類</label>
                <select id="kind" disabled defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>新築（注文住宅）</option>
                  <option>リフォーム・増改築</option>
                  <option>小さな修繕・お手入れ</option>
                  <option>採用・現場見学について</option>
                  <option>その他</option>
                </select>
              </div>
              <div className="hd-field">
                <label htmlFor="msg">
                  ご相談内容<span className="req">必須</span>
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  placeholder="例）築25年の実家のキッチンと浴室をリフォームしたいです。まず相談だけでも可能ですか？"
                  disabled
                />
              </div>
              <button
                type="button"
                className="hd-btn"
                disabled
                style={{ justifyContent: "center", opacity: 0.7, cursor: "not-allowed" }}
              >
                この内容で送信する（サンプルのため無効）
              </button>
            </form>

            {/* 連絡先・地図 */}
            <aside>
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  padding: "1.4rem 1.5rem",
                  marginBottom: "1.4rem",
                }}
              >
                <p
                  className="hd-label"
                  style={{ marginBottom: "0.6rem" }}
                >
                  Tel
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    margin: "0 0 0.2rem",
                  }}
                >
                  0120-00-0000
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--sub)", margin: 0 }}>
                  受付 9:00–18:00（日曜・祝日休）
                  <br />
                  ※ 架空の番号です
                </p>
              </div>

              <p className="hd-label" style={{ marginBottom: "0.7rem" }}>
                Access
              </p>
              <DemoMap station="陽向駅" walk="北口から車で5分" shop="陽" />
              <p style={{ fontSize: "0.84rem", color: "var(--sub)", marginTop: "0.9rem" }}>
                山ノ手県 陽向市 本町3-12（架空の住所です）
                <br />
                駐車場あり／現場見学はお電話にてご予約ください
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
