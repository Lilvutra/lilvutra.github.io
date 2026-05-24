type Props = {
  title: string
  description: string
}

export default function ProjectCard({
  title,
  description,
}: Props) {
  return (
    <div className="border border-zinc-800 p-6 rounded-2xl">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-zinc-400 mt-4">
        {description}
      </p>
    </div>
  )
}