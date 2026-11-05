// デモ用の Google Fonts を、ページを開いたときに読み込む。
// next/font/google はビルドのたびに数百ファイルを取りに行き、取りこぼすとビルドが落ちるため、こちらにした。
// 文字の範囲ごとに分かれた配信なので、使っている字のぶんだけ読まれる。
export default function GoogleFonts({ families }: { families: string[] }) {
  const href = `https://fonts.googleapis.com/css2?${families
    .map((f) => `family=${f}`)
    .join("&")}&display=swap`;
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={href} precedence="default" />
    </>
  );
}
