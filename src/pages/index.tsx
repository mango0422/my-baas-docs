import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">📘 {siteConfig.title}</h1>
        <p className="hero__subtitle">
          Kafka, gRPC, Redis 기반 MSA 아키텍처를 정리한 BaaS 문서입니다.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            문서 시작하기 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx("card", styles.featureCard)}>
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--outline button--primary button--block"
            to={link}
          >
            자세히 보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="My BaaS Docs" description="MSA 기반 문서 포털">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <FeatureCard
            title="📂 MSA 아키텍처"
            description="서비스 분리, DB 구조, 트랜잭션 처리 전략 등 전체 구조를 안내합니다."
            link="/docs/msa-architecture/00-overview"
          />
          <FeatureCard
            title="🔧 마이크로서비스"
            description="gRPC, Kafka, OpenAPI, 배포 및 운영 관련 실전 내용을 정리했습니다."
            link="/docs/microservices/01-introduction"
          />
          <FeatureCard
            title="📝 기술 블로그"
            description="TIL 및 실습 기반 DevOps 기술 블로그로 이동합니다."
            link="/blog"
          />
        </div>
      </main>
    </Layout>
  );
}
