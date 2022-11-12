# GoogleSitesToMarkdown

この拡張機能は、Google SitesのページをMarkdown記法に変換する作業をアシストしてくれます。
具体的には、Google Sitesのページ上でアイコンをクリックすると、Markdown記法に変換したページをクリップボードに保存してくれます。

新しいGoogle SitesはAPIを持っていないため、Google Sitesのページを別の形式に一括で変換しようにもツールを作ることが難しいです。
また、Seleniumなどといったブラウザ自動ツールを使って変換することも、自動ツールでGoogleにログインできない制約により難しい課題もあります。

そのため、各ページを人力で変換する方法しかないのですが、全ての作業を人力でやるのはとても辛い作業になります。

そこで、Google Sitesのページでアイコンをクリックすることで、Markdown記法に変換したページをクリップボードに保存する拡張機能を作りました。
下記のように使うことで全て手動でやるより簡単にMarkdown記法のページに移行することができます。

1. Chromeの拡張機能の設定でGoogleSitesToMarkdownのアイコンをツールバーに出すようにします。
2. Markdownに変換したいGoogle Sitesのページにアクセスします。
3. GoogleSitesToMarkdownをクリックします。
4. お好みのテキストエディタに貼り付けます。

この拡張機能は、下記の変換に対応しています。

1. Google Sitesの見出しをMarkdownの見出し記法に変換できます。
2. Google Sitesの順序付きリストや箇条リストをMarkdownの記法に変換で来ます。
3. Google Sitesのコードブロックを、Markdownのコードブロック記法に変換できます。
4. Google Sitesの通常のテキストを、Markdownの記法に変換できます。

# ライセンス

 MIT License
 