"use client";

import Image from "next/image";

import {
  comparisons,
  footprintStats,
  galleryItems,
  hero,
  marquee,
  pillars,
  roadmap,
  rows,
  rpcNetworks,
  sectionCopy,
  sections,
  teamGroups,
  tvl,
  validatorNetworks
} from "@/content/litepaper";
import type { Lang, Localized } from "@/content/litepaper";
import { Carousel } from "../ui/Carousel";
import { Chip } from "../ui/Chip";
import { LocalizedHtml } from "../ui/LocalizedHtml";
import { Reveal } from "../ui/Reveal";
import { RowList, type RowItem } from "../ui/RowList";
import { StatGrid } from "../ui/StatGrid";
import { FootprintDiagram } from "./DiagramSvgs";

function SectionLabel({ index, label, lang }: { index: string; label: Localized; lang: Lang }) {
  return <div className="label seclabel">{index} — {label[lang]}</div>;
}

function toRows(items: readonly (readonly string[])[]): RowItem[] {
  return items.map(([eyebrowEn, eyebrowKo, titleEn, titleKo, bodyEn, bodyKo]) => ({
    eyebrow: { en: eyebrowEn, ko: eyebrowKo },
    title: { en: titleEn, ko: titleKo },
    body: { en: bodyEn, ko: bodyKo }
  }));
}

export function AllSections({ lang }: { lang: Lang }) {
  const meta = Object.fromEntries(sections.map((section) => [section.id, section]));
  const marqueeUnit = marquee[lang].map((item) => (
    <span key={item}>
      <b>{item}</b><span className="dot">/</span>
    </span>
  ));

  return (
    <>
      <main className="main">
        <section id="cover" className="hero">
          <div className="wrap">
            <Reveal><div className="label" style={{ marginBottom: 24 }}>{hero.eyebrow[lang]}</div></Reveal>
            <Reveal delay={1}><LocalizedHtml as="h1" lang={lang} value={hero.title} /></Reveal>
            <Reveal delay={2}><div className="sub">{hero.subtitle[lang]}</div></Reveal>
            <Reveal delay={3}>
              <div className="meta">
                {hero.meta.map((item) => (
                  <div key={item.key.en}><div className="k">{item.key[lang]}</div><div className="v">{item.value[lang]}</div></div>
                ))}
              </div>
            </Reveal>
            <StatGrid className="coverstats" items={hero.stats} lang={lang} />
            <Reveal delay={3}><div className="scrollcue">{lang === "ko" ? "↓ 스크롤" : "↓ Scroll"}</div></Reveal>
          </div>
        </section>

        <div className="marquee" aria-hidden="true"><div className="track">{marqueeUnit}{marqueeUnit}</div></div>

        <section id="vision" className="vision">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.vision.index} label={meta.vision.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.vision.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p>{sectionCopy.vision.body[lang]}</p></Reveal>
          </div>
        </section>

        <section id="footprint">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.footprint.index} label={meta.footprint.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.footprint.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.footprint.body[lang]}</p></Reveal>
            <Reveal delay={1}><div className="dia"><FootprintDiagram /></div></Reveal>
            <StatGrid items={footprintStats} lang={lang} />
            <Reveal><div className="label" style={{ marginTop: 70 }}>{lang === "ko" ? "우리가 다르게 만든 방식" : "How we're built differently"}</div></Reveal>
            <div className="cmp">
              {comparisons.map((item) => (
                <Reveal delay={1} key={item.question.en}>
                  <div className="cmprow">
                    <div className="q">{item.question[lang]}</div>
                    <div className="cmpcell us"><span className="tag">FP Validated</span><span className="v">{item.us[lang]}</span><div className="bar"><i style={{ width: "100%" }} /></div></div>
                    <div className="cmpcell them"><span className="tag">{lang === "ko" ? "일반적 구성" : "Common Setup"}</span><span className="v">{item.them[lang]}</span><div className="bar"><i style={{ width: "38%" }} /></div></div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="note-illus">{lang === "ko" ? "이 비교는 벤더 벤치마크가 아니라 아키텍처 자세를 나타냅니다. ‘일반적 구성’ = 전형적인 단일 클러스터·단일 프로바이더 밸리데이터 배포." : "Comparison reflects architectural posture, not vendor benchmarks. “Common Setup” = a typical single-cluster, single-provider validator deployment."}</p>
          </div>
        </section>

        <section id="team">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.team.index} label={meta.team.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.team.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.team.body[lang]}</p></Reveal>
            <Reveal delay={2}><p className="lede" style={{ marginTop: 16 }}>{sectionCopy.team.body2[lang]}</p></Reveal>
            {teamGroups.map((group) => (
              <Reveal delay={1} key={group.label.en}>
                <div className="teamgrp">
                  <div className="gh">{group.label[lang]}</div>
                  {group.members.map((member) => (
                    <div className="tm" key={member.name}>
                      <div className="nm">{member.name}</div>
                      <div className="rl">{member.role ? <><b>{member.role}</b><br /></> : null}{member.bio}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="networks">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.networks.index} label={meta.networks.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.networks.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.networks.body[lang]}</p></Reveal>
            <div className="nets">
              <Reveal delay={1}><div className="netcol"><div className="k">{lang === "ko" ? "밸리데이터 · 16개 네트워크" : "Validators · 16 networks"}</div><div className="chips">{validatorNetworks.map((item) => <Chip icon={item.icon} key={`${item.name}-${item.label.en}`} label={item.label} lang={lang} name={item.name} />)}</div></div></Reveal>
              <Reveal delay={2}><div className="netcol"><div className="k">{lang === "ko" ? "RPC · 10개 메인넷 엔드포인트" : "RPC · 10 mainnet endpoints"}</div><div className="chips">{rpcNetworks.map((item) => <Chip icon={item.icon} key={item.name} lang={lang} name={item.name} />)}</div><div className="k" style={{ marginTop: 16 }}>{lang === "ko" ? "추가 예정" : "More to come"}</div></div></Reveal>
            </div>
          </div>
        </section>

        <section id="pillars">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.pillars.index} label={meta.pillars.label} lang={lang} /></Reveal>
            <Reveal delay={1}><div className="sechead sectionlogo"><span className="txt">Four Pillars of</span><Image src="https://4pillars.io/assets/brand/fp-validated/logo-white.png" alt="FP Validated" width={250} height={60} /></div></Reveal>
            <Reveal delay={2}><LocalizedHtml as="p" className="lede htmlcopy" lang={lang} value={sectionCopy.pillars.body} /></Reveal>
            <div className="pillars">
              {pillars.map((pillar, index) => (
                <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)} key={pillar.title.en}>
                  <div className="pillar"><div className="k">{pillar.eyebrow[lang]}</div><h3>{pillar.title[lang]}</h3><div className="big">{pillar.big[lang]}</div><p>{pillar.body[lang]}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.architecture.index} label={meta.architecture.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.architecture.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.architecture.body[lang]}</p></Reveal>
            <div className="pillars">
              {sectionCopy.architecture.roles.map((role, index) => (
                <Reveal key={role.label.en} delay={index === 0 ? 1 : 2}>
                  <div className="pillar"><div className="k">{role.label[lang]}</div><h3>{role.title[lang]}</h3><p>{role.body[lang]}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="security">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.security.index} label={meta.security.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.security.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.security.body[lang]}</p></Reveal>
            <RowList lang={lang} rows={toRows(rows.security)} />
            <Reveal><a className="source-link" href="https://github.com/FP-Validated/pillar-client">{lang === "ko" ? "Pillar 서명 클라이언트 소스 보기" : "Read the Pillar signing client source"} ↗</a></Reveal>
          </div>
        </section>
        <section id="observability">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.observability.index} label={meta.observability.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.observability.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.observability.body[lang]}</p></Reveal>
            <Reveal delay={1}>
              <figure>
                <ol className="message-trace">
                  {sectionCopy.observability.stages.map((stage, index) => (
                    <li key={stage.en}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{stage[lang]}</li>
                  ))}
                </ol>
                <figcaption className="dcap">{sectionCopy.observability.caption[lang]}</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
        <section id="operations">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.operations.index} label={meta.operations.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.operations.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.operations.body[lang]}</p></Reveal>
            <RowList lang={lang} rows={toRows(rows.operations)} />
          </div>
        </section>
        <section id="coverage">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.coverage.index} label={meta.coverage.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.coverage.title[lang]}</h2></Reveal>
            <Reveal delay={1}><div className="tvltop"><div><div className="tvlcap">{tvl.date[lang]}</div><div className="tvltot">{tvl.total}</div></div></div></Reveal>
            <Reveal delay={1}><figure className="shotframe"><div className="shot"><Image alt="FP Validated — total delegated value across chains" src="/img/tvl-overview.png" width={1100} height={650} /></div><figcaption>{sectionCopy.coverage.caption[lang]}</figcaption></figure></Reveal>
            <p className="note-illus">{sectionCopy.coverage.note[lang]}</p>
          </div>
        </section>
        <section id="live">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.live.index} label={meta.live.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.live.title[lang]}</h2></Reveal>
            <Reveal delay={2}><p className="lede">{sectionCopy.live.body[lang]}</p></Reveal>
            <Reveal><div className="gallabel">{lang === "ko" ? "노드 퍼포먼스 · 공개 익스플로러" : "Node performance · public explorers"}</div></Reveal>
            <Reveal delay={1}><Carousel items={galleryItems.perf} lang={lang} /></Reveal>
            <Reveal><div className="gallabel" style={{ marginTop: 54 }}>{lang === "ko" ? "FP Validated Guard · 내부 운영 통제" : "FP Validated Guard · internal operations"}</div></Reveal>
            <Reveal delay={2}><p className="lede" style={{ marginTop: 6 }}>{lang === "ko" ? "우리 자체 운영 도구는 업그레이드 준비도, 라이브 리소스, 로그를 모니터링하며, 안전 우선 변경 관리 접근 방식의 중추를 이룹니다." : "Our in-house operations tool monitors upgrade readiness, live resources, and logs, forming the backbone of our safety-first approach to change management."}</p></Reveal>
            <Reveal delay={1}><Carousel items={galleryItems.guard} lang={lang} /></Reveal>
          </div>
        </section>
        <section id="roadmap">
          <div className="wrap">
            <Reveal><SectionLabel index={meta.roadmap.index} label={meta.roadmap.label} lang={lang} /></Reveal>
            <Reveal delay={1}><h2 className="sechead">{sectionCopy.roadmap.title[lang]}</h2></Reveal>
            <div className="road">
              {roadmap.map((item, index) => (
                <Reveal delay={1} key={item.title.en}>
                  <div className="rdrow"><div className="t">{item.time[lang]}<span className={`s ${index === 0 ? "done" : ""}`}>{item.status[lang]}</span></div><div><h3>{item.title[lang]}</h3><p>{item.body[lang]}</p></div></div>
                </Reveal>
              ))}
            </div>
            <Reveal><p className="lede closing">{sectionCopy.roadmap.closing[lang]}</p></Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

export const renderedSectionIds = sections.map((section) => section.id);
