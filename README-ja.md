# Claude Logo Replacer

[English](https://github.com/hakhatz2486/claude-logo-replacer/blob/main/README.md) | 日本語

Claude.aiのデフォルトのロゴとファビコンを、Claude Codeのキャラクターである[Clawd](https://lobehub.com/ja/icons/claudecode)に置き換えるユーザースクリプトです。

## 機能

- Claude.aiのデフォルトロゴをClawdに置き換え
- ブラウザのファビコンをClawdに置き換え
- Claude.aiの動的な画面描画に追従
- Chromium系ブラウザおよびFirefox上のTampermonkeyやViolentmonkeyなどのユーザースクリプトマネージャーに対応

## インストール

1. [Tampermonkey](https://www.tampermonkey.net/) や[Violentmonkey](https://violentmonkey.github.io/)などのユーザースクリプトマネージャーをブラウザへインストールします。
2. [claude-logo-replacer.user.js](https://github.com/hakhatz2486/claude-logo-replacer/raw/refs/heads/main/claude-logo-replacer.user.js) を開きます。
3. ユーザースクリプトマネージャーの確認画面でインストールします。
4. `claude.ai` を再読み込みします。

## 使い方

インストール後、Claude.aiのロゴとブラウザのファビコンが自動的にClawdへ置き換わります。

## 注意事項

- Claude.aiの画面構造やロゴのマークアップが変更されると、置き換えが動作しなくなる場合があります。
- 本スクリプトはClaude.aiの画面を操作するもので、APIやAPIキーは使用しません。

## 変更履歴

[CHANGELOG-ja.md](https://github.com/hakhatz2486/claude-logo-replacer/blob/main/CHANGELOG-ja.md) を参照してください。

## ライセンス

[MIT License](https://github.com/hakhatz2486/claude-logo-replacer/blob/main/LICENSE)
