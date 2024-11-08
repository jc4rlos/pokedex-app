import { render, screen } from "@testing-library/react";
import Badge from "./Badge";
import { PokemonType } from "../../types/pokemonType";
import { describe, expect, it, test } from "vitest";

describe("Badge Component", () => {
  const types: PokemonType[] = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  test.each(types)("should render correctly with type '%s'", (type) => {
    render(<Badge type={type} />);
    expect(screen.getByText(type));
  });

  it("should apply additional class names correctly", () => {
    render(<Badge type="water" className="extra-class" />);
    expect(screen.getByText("water")).toHaveClass("extra-class");
  });

  it("should pass other HTML attributes correctly", () => {
    render(<Badge type="electric" data-testid="badge" />);
    expect(screen.getByTestId("badge")).toHaveTextContent("electric");
  });
});
