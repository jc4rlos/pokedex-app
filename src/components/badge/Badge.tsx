import { FC, HTMLAttributes } from "react";
import { PokemonType } from "../../types/pokemonType";
import { cva, cx } from "class-variance-authority";

type Props = HTMLAttributes<HTMLDivElement> & {
  type: PokemonType;
};

const badgeStyles = cva(
  "rounded-xl text-header-subtitle-3 capitalize text-white px-3 h-5 inline-flex items-center",
  {
    variants: {
      type: {
        normal: "bg-pokemon-type-normal",
        fire: "bg-pokemon-type-fire",
        water: "bg-pokemon-type-water",
        electric: "bg-pokemon-type-electric",
        grass: "bg-pokemon-type-grass",
        ice: "bg-pokemon-type-ice",
        fighting: "bg-pokemon-type-fighting",
        poison: "bg-pokemon-type-poison",
        ground: "bg-pokemon-type-ground",
        flying: "bg-pokemon-type-flying",
        psychic: "bg-pokemon-type-psychic",
        bug: "bg-pokemon-type-bug",
        rock: "bg-pokemon-type-rock",
        ghost: "bg-pokemon-type-ghost",
        dragon: "bg-pokemon-type-dragon",
        dark: "bg-pokemon-type-dark",
        steel: "bg-pokemon-type-steel",
        fairy: "bg-pokemon-type-fairy",
      },
    },
  }
);

const Badge: FC<Props> = ({ type, className, ...rest }) => (
  <div className={cx(badgeStyles({ type }), className)} {...rest}>
    {type}
  </div>
);

export default Badge;
