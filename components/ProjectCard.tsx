type Props = {
  title: string
  description: string
  year: string
  tags: string[]
}

export default function ProjectCard({
  title,
  description,
  year,
  tags,
}: Props) {
  return (
    <div className="border border-zinc-800 rounded-2xl p-8">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-1xl font-bold">
          {title}
        </h3>

        <span className="text-sm text-zinc-500">
          {year}
        </span>
      </div>

      <p className="text-zinc-400 leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1 rounded-full border border-zinc-700 text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  )
}