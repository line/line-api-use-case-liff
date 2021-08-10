# Building a front-end environment

## Fix index.js

In APP > js > index.js, there is a value that needs to be changed for each environment, so modify that value.
There are two points to be modified:
1. const cloudfrontUrl = "Cloudfront URL displayed during deployment in [Building backend > Deploying cloudfront for business card application]"
Example: const cloudfrontUrl = 'https://xxxxxxxxxxxxxx.cloudfront.net'
1. const defaultLiffId = "LIFFID of the LIFF app added in [Create LINE Channel > Create Channel > Add LIFF App]"
Example: const defaultLiffId = "1000000000-xxxxxxxx"

## Deploy front-end modules in S3

 Place the css,img,js,lang folders in the APP folder and index.html in the target S3 bucket.


[Next page](validation.md)  
[Back to Table of Contents](README_en.md)
