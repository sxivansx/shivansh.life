import { FadeIn } from "./fade-in";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center px-6 py-24 md:py-40">
      <main className="w-full max-w-2xl space-y-12">
        {/* Header */}
        <FadeIn>
          <header className="space-y-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt="Shivansh Pandey"
              width={64}
              height={64}
              className="rounded-full"
            />
            <h1 className="text-3xl font-semibold tracking-tight">
              Shivansh Pandey
            </h1>
            <p className="text-sm leading-relaxed opacity-60">
              designer who codes. brands, interfaces, motion, and the dev to
              ship it. bengaluru, india.
            </p>
          </header>
        </FadeIn>

        {/* About */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>About</SectionTitle>
            <p className="text-sm leading-relaxed opacity-70">
              i design brands from scratch and build the products to go with
              them — logos, visual systems, interfaces, motion, and the code
              to ship it all. if it needs to look good and work, i probably
              do it.
            </p>
          </section>
        </FadeIn>

        {/* Now */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Now</SectionTitle>
            <div className="space-y-3.5 text-sm leading-relaxed">
              <Row label="building">
                <a href="https://desk.shivansh.life" target="_blank" rel="noopener noreferrer">
                  desk.shivansh.life
                </a>
                {" "}— log on to my desktop
              </Row>
              <Row label="learning">
                backend dev, self-hosting, containers, servers the hard way
              </Row>
              <Row label="exploring">3d and motion design</Row>
              <Row label="watching">one piece. again.</Row>
            </div>
          </section>
        </FadeIn>

        {/* Listening */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Listening</SectionTitle>
            <iframe
              src="https://open.spotify.com/embed/playlist/34dNUG6lDAItUagmNLTrxu?utm_source=generator&theme=0"
              width="100%"
              height={152}
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
              title="Spotify playlist"
            />
          </section>
        </FadeIn>

        {/* Experience */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-3 text-sm">
              <ExpRow
                company="RemoteStar"
                href="https://remotestar.io/"
                role="Product Designer"
                period="2025 —"
                desc="rebrand, landing page, candidate platform ui/ux + frontend"
              />
              <ExpRow
                company="IICT"
                href="https://compilertech.org/"
                role="Event Identity Designer"
                period="2026 —"
                desc="website redesign, motion graphics, event identity"
              />
              <ExpRow
                company="Twintro"
                role="UI/UX Designer"
                period="2026"
              />
              <ExpRow
                company="Point Blank — Zenith"
                href="https://zenith.pointblank.club"
                role="Design Lead"
                period="2025 — 26"
                desc="brand identity, landing page, collateral for a 24hr hackathon"
              />
              <ExpRow
                company="Prauga"
                href="https://prauga.com/"
                role="UI/UX + Brand"
                period="2025"
                desc="launcher ui, system interface, iconography, full brand for prauga os"
              />
              <ExpRow
                company="HiremeClub"
                role="UI/UX Designer"
                period="2025"
                desc="platform ui revamp, key screens and user flows"
              />
            </div>
          </section>
        </FadeIn>

        {/* Design Projects */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Design Projects</SectionTitle>
            <div className="space-y-3.5 text-sm">
              <Row label={<a href="https://www.behance.net/gallery/225193097/NexTribe-Local-Communities-App-(UIUX-Branding)" target="_blank" rel="noopener noreferrer">NexTribe</a>}>
                ui/ux, branding, promo assets for a community discovery app
              </Row>
              <Row label={<a href="https://dev.to/sxivansx/making-gpay-smarter-with-tags-ux-for-real-world-spending-ikl" target="_blank" rel="noopener noreferrer">GPay Tags</a>}>
                ux case study — payment grouping feature for google pay
              </Row>
            </div>
          </section>
        </FadeIn>

        {/* Dev Projects */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Dev Projects</SectionTitle>
            <div className="space-y-3.5 text-sm">
              <Row label={<a href="https://github.com/sxivansx/cert-proj" target="_blank" rel="noopener noreferrer">cert-proj</a>}>
                certificate generation tool <Muted>python</Muted>
              </Row>
              <Row label={<a href="https://github.com/sxivansx/GitWall" target="_blank" rel="noopener noreferrer">GitWall</a>}>
                github contribution wall generator <Muted>typescript</Muted>
              </Row>
              <Row label={<a href="https://github.com/sxivansx/ghstmail-frontend" target="_blank" rel="noopener noreferrer">ghstmail</a>}>
                privacy-first email client — with{" "}
                <a href="https://x.com/govind_404" target="_blank" rel="noopener noreferrer">@govind_404</a>
                {" "}<Muted>js, kotlin</Muted>
              </Row>
            </div>
          </section>
        </FadeIn>

        {/* GitHub */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>GitHub</SectionTitle>
            <div className="space-y-3">
              <p className="text-sm opacity-70">
                <a href="https://github.com/sxivansx" target="_blank" rel="noopener noreferrer">
                  @sxivansx
                </a>
                <span className="opacity-50"> — 22 repos, 19 followers</span>
              </p>
              <a
                href="https://github.com/sxivansx"
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/000000/sxivansx"
                  alt="GitHub contribution graph"
                  className="w-full dark:invert"
                  loading="lazy"
                />
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Skills */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Skills</SectionTitle>
            <div className="space-y-3.5 text-sm">
              <Row label="design">
                brand · logo · ui/ux · product design · design systems ·
                prototyping · wireframing · ux research · graphics ·
                illustration · motion · video editing · storytelling · mockups
              </Row>
              <Row label="dev">
                next.js · react · typescript · javascript · tailwind · html ·
                css · python · kotlin · framer · git · github · vercel ·
                mongodb · docker · postman · firebase
              </Row>
              <Row label="tools">
                figma · framer · illustrator · photoshop · after effects ·
                premiere pro · indesign · blender
              </Row>
            </div>
          </section>
        </FadeIn>

        {/* Education */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Education</SectionTitle>
            <p className="text-sm opacity-70">
              dayananda sagar college of engineering
              <span className="opacity-50"> — e&tc, 2023 — 2027</span>
            </p>
          </section>
        </FadeIn>

        {/* Links */}
        <FadeIn>
          <section className="space-y-5">
            <SectionTitle>Links</SectionTitle>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-70">
              <a href="mailto:sxivansx@duck.com">email</a>
              <a href="https://www.behance.net/sxivansx" target="_blank" rel="noopener noreferrer">behance</a>
              <a href="https://www.linkedin.com/in/sxivansx" target="_blank" rel="noopener noreferrer">linkedin</a>
              <a href="https://www.instagram.com/shivansh.life" target="_blank" rel="noopener noreferrer">instagram</a>
              <a href="https://x.com/sxivansx" target="_blank" rel="noopener noreferrer">x</a>
              <a href="https://github.com/sxivansx" target="_blank" rel="noopener noreferrer">github</a>
            </div>
          </section>
        </FadeIn>

        {/* Footer */}
        <FadeIn>
          <footer className="pt-10 border-t border-current/10 text-xs opacity-30 space-y-3">
            <p className="italic">
              &ldquo;when do you think people die? when they are forgotten.&rdquo;
              — dr. hiluluk
            </p>
            <p>© 2025 shivansh pandey</p>
          </footer>
        </FadeIn>
      </main>
    </div>
  );
}

/* ---- Shared Components ---- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-widest opacity-40">
      {children}
    </h2>
  );
}

function Row({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="opacity-40 shrink-0 w-20 font-medium">{label}</span>
      <span className="opacity-70">{children}</span>
    </div>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="opacity-40">{children}</span>;
}

function ExpRow({
  company,
  href,
  role,
  period,
  desc,
}: {
  company: string;
  href?: string;
  role: string;
  period: string;
  desc?: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
        <div className="flex-1 min-w-0">
          <span className="font-medium">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">{company}</a>
            ) : (
              company
            )}
          </span>
          <span className="opacity-40"> — {role}</span>
        </div>
        <span className="opacity-30 shrink-0 tabular-nums text-xs">{period}</span>
      </div>
      {desc && <p className="opacity-40 text-xs mt-0.5">{desc}</p>}
    </div>
  );
}
