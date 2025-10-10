import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  const title = "Support";
  const content = "Support 24/7";

  beforeAll(() => {
    // 🧠 on simule une hauteur de contenu dans jsdom
    Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
      configurable: true,
      value: 100,
    });
  });

  test("le contenu est masqué par défaut (max-height = 0)", () => {
    render(<Dropdown title={title} content={content} />);
    const wrapper = screen.getByText(content).closest(".dropdown-content-wrapper");
    expect(wrapper.style.maxHeight).toBe("0px");
  });

  test("ouvre et ferme le contenu au clic", async () => {
    render(<Dropdown title={title} content={content} />);
    const button = screen.getByRole("button", { name: title });
    const wrapper = screen.getByText(content).closest(".dropdown-content-wrapper");

    // 🔹 ouverture
    fireEvent.click(button);
    await waitFor(() =>
      expect(parseInt(wrapper.style.maxHeight)).toBeGreaterThan(0)
    );

    // 🔹 fermeture
    fireEvent.click(button);
    await waitFor(() =>
      expect(wrapper.style.maxHeight).toBe("0px")
    );
  });

  test("la flèche pivote correctement", async () => {
    render(<Dropdown title={title} content={content} />);
    const button = screen.getByRole("button", { name: title });
    const chevron = button.querySelector(".chevron");

    expect(chevron.classList.contains("up")).toBe(true);

    fireEvent.click(button);
    await waitFor(() =>
      expect(chevron.classList.contains("down")).toBe(true)
    );
  });
});
