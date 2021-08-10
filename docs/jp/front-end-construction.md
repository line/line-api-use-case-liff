# フロントエンド環境構築

## index.jsの修正
APP -> js -> index.jsにて、環境ごとに変更が必要な値があるため、そちらを修正してください。
修正箇所は以下の2点です。
1. const cloudfrontUrl = "【バックエンドの構築 -> 名刺アプリ用cloudfrontのデプロイ】でデプロイ時に表示されたCloudfrontのURL"  
例）const cloudfrontUrl = 'https://xxxxxxxxxxxxxx.cloudfront.net'
1. const defaultLiffId = "【LINEチャネルの作成 -> チャネルの作成 -> LIFFアプリの追加】にて追加したLIFFアプリのLIFFID"  
例）const defaultLiffId = "1000000000-xxxxxxxx"

## S3にフロントエンドのモジュールを配置
 APPフォルダ内のcss,img,js,langフォルダとindex.htmlを対象S3バケットに配置してください。


[次の頁へ](validation.md)

[目次へ戻る](../../README.md)
