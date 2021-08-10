# Steps to build the backend
## Creating AWS resources

Follow the steps below to create an AWS resource.
An environment for static content delivery using S3 and CloudFront will be created.

- Change template.yaml
  Open template.yaml in the backend > APP folder, and modify these parameter items of dev in EnvironmentMap:  
  *If you need the S3 access log, uncomment the part that says ACCESS LOG SETTING.

  - `FrontS3BucketName` Any bucket name *This will be the S3 bucket name to place the front-side module.
  - `LogS3Bucket` Any bucket name (the name of the S3 where the access log is stored)  
  *Cancel the comment and record it only if you need an access log. Also, if you've already built another Use Case app, specify its access log bucket name and alias.
  - `LogFilePrefix` Any name (log file prefix)  
  *Cancel the comment and record it only if you need an access log.

- Run this command:

```
cd [backend > APP folder]
sam build --use-container
sam deploy --guided
*Must be specified when using profile information that's not the default (`sam deploy --guided --profile xxx`)
    Stack Name: any stack name
    AWS Region: ap-northeast-1
    Parameter Environment: dev
    #Shows you resources changes to be deployed and require a 'Y' to initiate deploy Confirm changes before deploy [Y/n]: Y
    #SAM needs permission to be able to create roles to connect to the resources in your template Allow SAM CLI IAM role creation[Y/n]: Y
    ××××× may not have authorization defined, Is this okay? [y/N]: y (Input "y" for all)

    SAM configuration file [samconfig.toml]: Press Enter only
    SAM configuration environment [default]: Press Enter only

    Save arguments to samconfig.toml [Y/n]: Y
    Deploy this changeset? [y/N]: y
```

- Notes of CloudFrontDomainName
Make a note of the CloudFrontDomainName that's displayed in OutPut when the deployment is successful. It will be used in later steps.

[Next page](front-end-construction.md)  

[Back to Table of Contents](README_en.md)
