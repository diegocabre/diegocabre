import { stack } from "@/data/site";

export function Stack() {
  return (
    <section aria-labelledby="stack-title" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="stack-title" className="text-sm font-medium text-muted">
          Con qué trabajo
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stack.map((g) => (
            <div key={g.group}>
              <h3 className="font-semibold tracking-tight">{g.group}</h3>
              <ul className="mt-3 space-y-1.5 text-muted">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
