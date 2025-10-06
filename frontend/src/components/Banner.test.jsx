import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import testImg from "../assets/Home_banner.png";

describe("Banner component", () => {
  test("affiche l'image de la bannière", () => {
    render(<Banner image={testImg} text="Chez vous, partout et ailleurs" />);
    const bannerImg = screen.getByAltText(/Bannière/i);
    expect(bannerImg).toBeInTheDocument();
    expect(bannerImg).toHaveAttribute("src", testImg);
  });

  test("affiche le texte si fourni", () => {
    render(<Banner image={testImg} text="Texte test" />);
    expect(screen.getByText("Texte test")).toBeInTheDocument();
  });

  test("ne rend pas de texte si 'text' est vide", () => {
    render(<Banner image={testImg} text="" />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
