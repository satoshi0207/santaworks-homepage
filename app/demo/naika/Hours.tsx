"use client";

import { useEffect, useRef } from "react";
import { CLINIC, HOURS } from "./data";

/** ●／— は装飾。読み上げには必ずテキストを渡す */
function Mark({ open }: { open: boolean }) {
  return (
    <>
      <span aria-hidden="true" className={open ? "on" : "off"}>
        {open ? "●" : "—"}
      </span>
      <span className="sy-vh">{open ? "診療" : "休診"}</span>
    </>
  );
}

/**
 * 診療時間表。
 * 曜日を「行」にしているので、狭い画面でも横スクロールが出ない
 * （曜日を列にした表はスマホで必ず溢れる＝患者がいちばん見たい情報が見えなくなる）。
 * 「本日」の目印だけクライアント側で付ける（静的書き出しのため、描画後に判定）。
 */
export default function Hours() {
  const body = useRef<HTMLTableSectionElement>(null);

  // 「本日」の目印は描画後にクラスを足すだけ（再描画を起こさない）
  useEffect(() => {
    const row = body.current?.querySelector(
      `[data-dow="${new Date().getDay()}"]`,
    );
    row?.classList.add("today");
  }, []);

  return (
    <>
      <table className="sy-hours">
        {/* 見出しの繰り返しではなく、表だけ読んでも分かる情報を入れる */}
        <caption>曜日ごとの診療時間（{CLINIC.closed}は休診）</caption>
        <thead>
          <tr>
            <th scope="col">診療日</th>
            <th scope="col">
              午前
              <span className="time">{CLINIC.am}</span>
            </th>
            <th scope="col">
              午後
              <span className="time">{CLINIC.pm}</span>
            </th>
          </tr>
        </thead>
        <tbody ref={body}>
          {HOURS.map((h) => {
            const rest = !h.am && !h.pm;
            return (
              <tr
                key={h.day}
                data-dow={h.dow}
                className={rest ? "rest" : undefined}
              >
                <th scope="row">{h.dow === 0 ? "日曜・祝日" : h.day}</th>
                <td>
                  <Mark open={h.am} />
                </td>
                <td>
                  <Mark open={h.pm} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul className="sy-hours-notes">
        <li>
          受付は午前 {CLINIC.amReception}／午後 {CLINIC.pmReception} まで。
          初めての方はお時間に余裕をもってお越しください。
        </li>
        <li>休診日：{CLINIC.closed}</li>
        <li>
          発熱・咳の症状がある方は、来院前にお電話ください。受診の時間帯と入口をご案内します。
        </li>
      </ul>
    </>
  );
}
