import { Logo } from "@/assets/logo";
import { siteHost } from "./content";
import {
  Boxes,
  Chart,
  Clipboard,
  Layers,
  Refresh,
  Route,
  Sprout,
  WifiOff,
} from "./icons";
import { cn } from "./primitives";

/**
 * Decorative product mock: a web dashboard (agrônomo) with a mobile screen
 * (produtor) overlapping. No real data — purely illustrative.
 */
export function AppMock() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[36rem]">
      {/* Browser window — web dashboard */}
      <div className="animate-float overflow-hidden rounded-2xl bg-surface shadow-lift ring-1 ring-line">
        {/* Chrome */}
        <div className="flex items-center gap-3 border-b border-line bg-white/70 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-clay-300" />
            <span className="size-2.5 rounded-full bg-brand-200" />
            <span className="size-2.5 rounded-full bg-sand" />
          </div>
          <div className="flex h-6 flex-1 items-center gap-2 rounded-md bg-cream px-2.5 text-[11px] font-medium text-muted">
            <span className="size-1.5 rounded-full bg-brand-500" />
            {siteHost}
            <span className="text-ink/30">/ dashboard</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-14 flex-col items-center gap-1 border-r border-line bg-brand-50/70 py-4 sm:flex">
            <span className="mb-2 grid size-8 place-items-center rounded-lg bg-brand-700">
              <Logo width={13} height={16} fill="#fff" />
            </span>
            {[Sprout, Layers, Clipboard, Boxes, Chart].map((I, i) => (
              <span
                key={i}
                className={cn(
                  "grid size-8 place-items-center rounded-lg transition-colors",
                  i === 0 ? "bg-brand-100 text-brand-700" : "text-brand-700/40",
                )}
              >
                <I width={16} height={16} />
              </span>
            ))}
          </div>

          {/* Main */}
          <div className="min-w-0 flex-1 space-y-3.5 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-[15px] font-semibold text-ink">
                  Painel do agrônomo
                </p>
                <p className="text-[11px] text-muted">
                  Safra 24/25 · Soja e milho
                </p>
              </div>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-700/10">
                18/25 talhões
              </span>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2.5">
              <Stat label="Talhões ativos" value="18" foot="de 25" />
              <Stat label="Produtores" value="07" foot="ativos" />
              <Stat label="Safras" value="12" foot="em curso" tone="clay" />
            </div>

            {/* Upcoming applications */}
            <div className="rounded-xl border border-line bg-cream/60 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[12px] font-semibold text-ink">
                  Próximas aplicações
                </p>
                <span className="text-[11px] font-medium text-brand-600">
                  esta semana
                </span>
              </div>
              <div className="space-y-1.5">
                <AppRow
                  date="14 jan"
                  title="Fungicida · Talhão 3"
                  meta="DAP 45 · Soja"
                  status="ontime"
                />
                <AppRow
                  date="16 jan"
                  title="Inseticida · Talhão 7"
                  meta="DAP 52 · Soja"
                  status="ontime"
                />
                <AppRow
                  date="11 jan"
                  title="Herbicida · Talhão 1"
                  meta="DAP 38 · Milho"
                  status="late"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip — top-left */}
      <div className="absolute -left-3 top-16 hidden items-center gap-2 rounded-full bg-surface px-3 py-2 shadow-lift ring-1 ring-line sm:flex">
        <span className="grid size-7 place-items-center rounded-full bg-brand-100 text-brand-700">
          <Refresh width={15} height={15} />
        </span>
        <span className="text-[11px] font-semibold leading-tight text-ink">
          Datas recalculadas
          <span className="block font-normal text-muted">após o atraso</span>
        </span>
      </div>

      {/* Mobile — produtor registering an application */}
      <div className="absolute -bottom-8 -right-2 w-[10.5rem] overflow-hidden rounded-[1.6rem] bg-night p-2.5 shadow-lift ring-1 ring-brand-950/40 sm:-right-6 sm:w-[12rem]">
        <div className="grain relative overflow-hidden rounded-[1.15rem] bg-brand-950/60 p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-brand-100 ring-1 ring-white/10">
              <WifiOff width={11} height={11} /> offline
            </span>
            <span className="text-[9px] font-medium text-brand-200/70">
              Talhão 3
            </span>
          </div>

          <p className="font-display text-[13px] font-semibold leading-tight text-white">
            Registrar aplicação
          </p>
          <p className="mb-3 text-[9.5px] text-brand-200/70">
            Fungicida · 12 ha
          </p>

          <div className="space-y-1.5">
            <ProductRow name="BELYAN" dose="0,4 L/ha" />
            <ProductRow name="APROACH" dose="0,5 L/ha" />
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg bg-clay-500/15 px-2 py-1.5 ring-1 ring-clay-400/20">
            <span className="text-[9px] font-medium text-clay-100">
              Estoque
            </span>
            <span className="text-[10px] font-semibold text-clay-100">
              320 L
            </span>
          </div>

          <div className="mt-3 grid place-items-center rounded-lg bg-brand-500 py-2 text-[10.5px] font-semibold text-white">
            Registrar
          </div>
        </div>
      </div>

      {/* Floating chip — pricing, bottom-left */}
      <div className="absolute -left-4 bottom-6 hidden items-center gap-2 rounded-full bg-surface px-3 py-2 shadow-lift ring-1 ring-line md:flex">
        <span className="grid size-7 place-items-center rounded-full bg-clay-100 text-clay-600">
          <Route width={15} height={15} />
        </span>
        <span className="text-[11px] font-semibold leading-tight text-ink">
          Link ao lojista
          <span className="block font-normal text-muted">R$ ou sacas</span>
        </span>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  foot,
  tone = "brand",
}: {
  label: string;
  value: string;
  foot: string;
  tone?: "brand" | "clay";
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-2.5">
      <p className="truncate text-[10px] font-medium text-muted">{label}</p>
      <p
        className={cn(
          "mt-0.5 font-display text-xl font-semibold leading-none",
          tone === "clay" ? "text-clay-600" : "text-brand-700",
        )}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[9px] text-ink/40">{foot}</p>
    </div>
  );
}

function AppRow({
  date,
  title,
  meta,
  status,
}: {
  date: string;
  title: string;
  meta: string;
  status: "ontime" | "late";
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-surface px-2 py-1.5 ring-1 ring-line">
      <span className="grid w-11 shrink-0 place-items-center rounded-md bg-brand-50 py-1 text-[10px] font-semibold text-brand-700">
        {date}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[11px] font-semibold text-ink">
          {title}
        </span>
        <span className="block truncate text-[9.5px] text-muted">{meta}</span>
      </span>
      <span
        className={cn(
          "size-2 shrink-0 rounded-full",
          status === "late" ? "bg-clay-500" : "bg-brand-500",
        )}
      />
    </div>
  );
}

function ProductRow({ name, dose }: { name: string; dose: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5 ring-1 ring-white/5">
      <span className="text-[10px] font-semibold text-white">{name}</span>
      <span className="text-[9px] text-brand-200/80">{dose}</span>
    </div>
  );
}
