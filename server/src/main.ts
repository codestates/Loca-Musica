import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(80);
}
bootstrap();

// version: 0.2

// #env:
//   #variables:
//      # key: "value"
//      # key: "value"
//   #parameter-store:
//      # key: "value"
//      # key: "value"
//   #secrets-manager:
//      # key: secret-id:json-key:version-stage:version-id
//      # key: secret-id:json-key:version-stage:version-id
//   #exported-variables:
//      # - variable
//      # - variable
//   #git-credential-helper: yes
// #batch:
//   #fast-fail: true
//   #build-list:
//   #build-matrix:
//   #build-graph:
// phases:
//   #install:
//     #Ubuntu 표준 이미지 2.0 이상을 사용하는 경우 런타임 버전을 지정해야 합니다.
//     #런타임 버전을 지정하는 경우 Ubuntu 표준 이미지 2.0 이외의 이미지를 사용하면 빌드에 실패합니다.
//     #runtime-versions:
//       # name: version
//       # name: version
//     #commands:
//       # - command
//       # - command
//   pre_build:
//     commands:
//       - cd server
//       - npm install
//   build:
//     commands:
//       - npm run build
//       # - command
//   #post_build:
//     #commands:
//       # - command
//       # - command
// #reports:
//   #report-name-or-arn:
//     #files:
//       # - location
//       # - location
//     #base-directory: location
//     #discard-paths: yes
//     #file-format: JunitXml | CucumberJson
// artifacts:
//   files:
//     - "**/*"
//     # - location
//   #name: $(date +%Y-%m-%d)
//   #discard-paths: yes
//   base-directory: server/dist
// #cache:
//   #paths:
//     # - paths
