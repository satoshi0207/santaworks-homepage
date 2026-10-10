"""動きの見本帳（public/motion/）を tailnet 内に配る（user サービス web-motion が起動する）。

本番は santaworks.net/motion/（public/ ごと Cloudflare に載る）。これは手元で直したものを、push の前に見るための口。

python3 -m http.server とほぼ同じ。違いは Cache-Control: no-cache を付けることだけ。
ファイルを直したら、再読み込みですぐ反映されるようにするため（付けないとブラウザが古い JS を使い続ける）。
"""
import functools
import http.server
import pathlib
import sys

HOST = '100.80.244.15'  # Tailscale の IP。インターネット側には出さない
PORT = 8925
ROOT = pathlib.Path(__file__).resolve().parent.parent / 'public' / 'motion'


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    handler = functools.partial(Handler, directory=str(ROOT))
    with http.server.ThreadingHTTPServer((HOST, port), handler) as httpd:
        httpd.serve_forever()
