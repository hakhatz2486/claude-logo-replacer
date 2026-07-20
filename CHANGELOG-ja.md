# 変更履歴

このプロジェクトの主な変更内容を記録します。

形式は [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) を参考にし、
バージョン番号は [Semantic Versioning](https://semver.org/lang/ja/) に準拠します。

## 1.0.2 - 2026-07-20

### Changed

- ユーザースクリプト名を`Claude Logo Replacer: Clawd`に変更

## 1.0.1 - 2026-07-20

### Fixed

- 同時に描画されたClaudeロゴを同一フレーム内ですべて置き換えるよう修正
- Reactの再描画時にロゴが重複しないよう、既存のSVG要素を維持して置き換える方式へ変更

## 1.0.0 - 2026-07-19

### Added

- Claude.aiのデフォルトロゴをClawdに置き換える機能を追加
- ブラウザのファビコンをClawdに置き換える機能を追加
- ページ描画後の動的なロゴ・ファビコン置き換えに対応
