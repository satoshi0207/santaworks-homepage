import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function FactoryContact() {
  return (
    <>
      <PageHead en="Contact" title="お問い合わせ" />

      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Contact</p>
            <h2 className="t-h2">お見積り・ご相談</h2>
            <p style={{ maxWidth: "44rem" }}>
              図面（PDF・DXF）やお写真があればスムーズですが、「こんなものは作れるか」という段階のご相談も歓迎です。お見積りは原則2営業日以内にご返信します。
            </p>
          </Reveal>

          <Reveal>
            <div className="t-tel-box">
              <div>
                <span className="tel">03-0000-0000</span>
              </div>
              <p className="note">
                受付時間 平日 8:30 — 17:30
                <br />
                ※ 架空の電話番号です（デザインサンプル）
              </p>
            </div>
          </Reveal>

          <Reveal>
            <form className="t-form">
              <label>
                会社名
                <input type="text" name="company" autoComplete="organization" />
              </label>
              <label>
                お名前<span className="req">必須</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                メールアドレス<span className="req">必須</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                ご用件
                <select name="subject" defaultValue="お見積りについて">
                  <option>お見積りについて</option>
                  <option>加工のご相談</option>
                  <option>採用について</option>
                  <option>その他</option>
                </select>
              </label>
              <label>
                内容<span className="req">必須</span>
                <textarea name="message" rows={7} required />
              </label>
              <p className="t-form-note">
                ※ このフォームはデザインサンプルのため送信されません。
              </p>
              <button type="button">送信する（サンプル）</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
