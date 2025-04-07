import { HeroHeader } from '@/components/blocks/header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden bg-background text-white min-h-screen px-4">
        <div
          aria-hidden
          className="absolute inset-0 isolate opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <div className="space-y-12 pb-12 pt-28 max-w-4xl w-full mx-auto">
          <h1 className="text-4xl font-bold text-center">Ofte stilte spørsmål</h1>
          <p className="text-center">
            Kommer snart
          </p>
        </div>
      </main>
    </>
  )
}
