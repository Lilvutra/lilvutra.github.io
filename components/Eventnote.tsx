import { rants } from "@/data/rants"

export default function Rants() {
  return (
    <section
      id="rants"
      className="min-h-screen px-10 py-32"
    >
      <h2 className="text-2xl font-bold mb-12">
        Rants
      </h2>

      <div className="space-y-8">
        {rants.map((rant) => (
          <div
            key={rant.title}
            className="py-6"
          >
            <div className="mb-3 text-sm text-zinc-500">
              {rant.date} : {rant.time}
            </div>

            <h3 className="text-1xl font-bold mb-4">
              {rant.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              {rant.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}