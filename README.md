# Node AWS Elastic Beanstalk & RDS

This is a simple example of a Node.js application deployed on AWS Elastic Beanstalk with AWS Codepipeline and AWS CodeBuild for the Build Stage. The application connects to an AWS RDS database instance decoupled from the Elastic Beanstalk environment.

* [buildspec.yml](buildspec.yml) for CodeBuild to use for build commands and configurations

* [Install the devDependencies packages](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-platform-dependencies.html) using `NPM_USE_PRODUCTION` in `.ebextensions`.
