## 起動方法

```bash
npm run dev
```

## main ブランチのプル

ターミナル上で<br>

```bash
git pull origin main
```

を実行することで、最新の main ブランチをローカルブランチ(PC 上のブランチ)に持ってくることができます。<br>
main ブランチが更新された後は新しいパッケージが追加される場合が多いので必ず次のコマンドをターミナル上で実行する。<br>

```bash
npm install
```

## コンポーネント作成のフォルダー

src/app/component の配下に作成するコンポーネント名のフォルダーを作製し<br>
その配下に.module.css、.tsx ファイルを作成すること<br>
