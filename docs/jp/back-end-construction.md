# バックエンドの構築手順
## AWSリソースの作成

以下の手順で、AWSリソースの作成をしてください。  
S3とCloudFrontを利用した静的コンテンツ配信の環境が作成されます。  

- template.yaml の修正  
  backend -> APP フォルダ内の template.yaml を開き、EnvironmentMap の dev の以下のパラメータ項目を修正する。
  ※S3のアクセスログが必要な場合、ACCESS LOG SETTING とコメントされている箇所のコメントを解除してください。

  - `FrontS3BucketName` 任意のバケット名 ※フロント側モジュールを配置するための S3 バケット名になります。
  - `LogS3Bucket` 任意のバケット名(アクセスログを保管するS3の名称)  
  ※アクセスログが必要な場合のみコメントを解除して記載してください。また、他UseCaseアプリを構築済みの方は、他UseCaseアプリのアクセスログバケット名と別名で指定してください。
  - `LogFilePrefix` 任意の名称（ログファイルの接頭辞）  
  ※アクセスログが必要な場合のみコメントを解除して記載してください。

- 以下コマンドの実行

```
cd [backend -> APP のフォルダ]
sam build --use-container
sam deploy --guided
※プロファイル情報(default)以外を使用する場合は指定必要 sam deploy --guided --profile xxx
    Stack Name : 任意のスタック名
    AWS Region : ap-northeast-1
    Parameter Environment: dev
    #Shows you resources changes to be deployed and require a 'Y' to initiate deploy Confirm changes before deploy [Y/n]: Y
    #SAM needs permission to be able to create roles to connect to the resources in your template Allow SAM CLI IAM role creation[Y/n]: Y
    ××××× may not have authorization defined, Is this okay? [y/N]: y (全てyと入力)  

    SAM configuration file [samconfig.toml]: 入力せずEnter
    SAM configuration environment [default]: 入力せずEnter

    Save arguments to samconfig.toml [Y/n]: Y
    Deploy this changeset? [y/N]: y
```

- CloufFrontDomainNameのメモ  
デプロイ成功時にOutPutにて表示されるCloudFrontDomainNameのメモを取ってください。後の手順にて利用します。


[次の頁へ](front-end-construction.md)

[目次へ戻る](../../README.md)
