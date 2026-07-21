import { links } from "./content";
import { Bell, Monitor, Phone, WifiOff } from "./icons";
import { Button, Container, Section, SectionHeading } from "./primitives";
import { Reveal } from "./reveal";

const cards = [
  {
    icon: Monitor,
    title: "Plataforma web",
    description:
      "Painéis, catálogos, modelos e relatórios para o agrônomo e o admin, direto do navegador.",
  },
  {
    icon: Phone,
    title: "Aplicativo do produtor",
    description:
      "Lista de compras, aplicações, estoque e colheita na palma da mão, feitos para o campo.",
  },
  {
    icon: WifiOff,
    title: "Funciona offline",
    description:
      "Registre aplicações mesmo sem sinal. Quando a conexão volta, tudo sincroniza sozinho.",
  },
  {
    icon: Bell,
    title: "Sempre no tempo certo",
    description:
      "Avisos de aplicação próxima, etapa atrasada e substituição de produto para não perder a janela.",
  },
];

export function Spotlight() {
  return (
    <Section
      id="plataformas"
      className="grain relative overflow-hidden bg-night text-white"
    >
      <div
        aria-hidden
        className="absolute -left-24 top-0 size-[30rem] rounded-full bg-brand-600/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute -right-20 bottom-0 size-[26rem] rounded-full bg-clay-600/15 blur-[100px]"
      />
      <div aria-hidden className="absolute inset-0 bg-rows-dark opacity-60" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              dark
              align="left"
              eyebrow="Web + Aplicativo"
              title="No escritório e no campo, sempre em sincronia."
              description="O agrônomo trabalha no navegador, com painéis, catálogos e relatórios. O produtor resolve tudo pelo celular — inclusive sem internet."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={links.appUrl} variant="light" size="lg" withArrow>
                Acessar a plataforma
              </Button>
              <Button href={links.subscribe} variant="outlineLight" size="lg">
                Assinar agora
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.07]">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/20">
                  <card.icon width={23} height={23} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-brand-100/70">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
