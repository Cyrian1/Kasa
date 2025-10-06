import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  test("affiche le titre du dropdown", () => {
    render(<Dropdown title="Fiabilité" content="Contenu visible" />);
    expect(screen.getByText("Fiabilité")).toBeInTheDocument();
  });

  test("n'affiche pas le contenu par défaut", () => {
    render(<Dropdown title="Test" content="Contenu secret" />);
    expect(screen.queryByText("Contenu secret")).not.toBeInTheDocument();
  });

  test("ouvre et ferme le contenu au clic", () => {
    render(<Dropdown title="Service" content="Support 24/7" />);
    const header = screen.getByText("Service");

    // au premier clic -> ouverture
    fireEvent.click(header);
    expect(screen.getByText("Support 24/7")).toBeInTheDocument();

    // au second clic -> fermeture
    fireEvent.click(header);
    expect(screen.queryByText("Support 24/7")).not.toBeInTheDocument();
  });
});
