import { personas } from "./content";
import { Check, Icon } from "./icons";
import { Container, Section, SectionHeading, cn } from "./primitives";
import { Reveal } from "./reveal";

export function Personas() {
  return (
    <Section id="para-quem" className="bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Para quem é"
            title="Um fluxo, três formas de trabalhar"
            description="Agrônomo, produtor e recomendador usam a mesma plataforma — cada um com a visão certa para o seu papel na safra."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {personas.map((persona, i) => {
            const clay = persona.accent === "clay";
            return (
              <Reveal key={persona.id} delay={i * 110}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span
                    className={cn(
                      "grid size-14 place-items-center rounded-2xl ring-1",
                      clay
                        ? "bg-clay-50 text-clay-600 ring-clay-600/12"
                        : "bg-brand-50 text-brand-700 ring-brand-700/12",
                    )}
                  >
                    <Icon name={persona.icon} width={28} height={28} />
                  </span>

                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                    {persona.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 text-sm font-medium",
                      clay ? "text-clay-600" : "text-brand-600",
                    )}
                  >
                    {persona.role}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {persona.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          width={17}
                          height={17}
                          className={cn(
                            "mt-0.5 shrink-0",
                            clay ? "text-clay-500" : "text-brand-600",
                          )}
                        />
                        <span className="text-[0.925rem] leading-snug text-muted">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
