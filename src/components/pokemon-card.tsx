import Link from "next/link"
import { PokemonCategory } from "./pokemon-category"
interface PokemonCardProps {
    name: string
}

export function PokemonCard({ name } : PokemonCardProps) {
    return (
        <Link
        href={{
          pathname: name,
          query: { Pokemon: 'list' } // Add your string parameter here
      }}
      as={`/${name}?Pokemon=list`}
      // m-5 flex h-fit w-[14rem] flex-col items-center justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-100 backdrop-blur-sm backdrop-filter dark:bg-neutral-500 dark:bg-opacity-50 dark:shadow-neutral-900
          className="m-5 flex h-fit w-[14rem] flex-col items-center justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-100 backdrop-blur-sm backdrop-filter dark:bg-neutral-500 dark:bg-opacity-50 dark:shadow-neutral-900"
          key={name + "Card"}
        >
          <h2 className={`text-2xl font-semibold py-4`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
        </Link>
    )
}