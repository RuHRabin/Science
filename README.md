<div align="center">

# Science — Interactive 3D Science Simulations, Objects & Materials

**A growing, open-source collection of web-based 3D visualisations of scientific objects and materials, with short articles that explain the science behind them. Built with three.js and WebGL, and it runs in your browser with nothing to install.**

[![Live site](https://img.shields.io/badge/live%20site-rabin.ruhrbin.site%2FScience-38bdf8?style=for-the-badge)](https://rabin.ruhrbin.site/Science/)
[![License: MIT](https://img.shields.io/github/license/RuHRabin/Science?style=for-the-badge)](LICENSE)
[![three.js](https://img.shields.io/badge/three.js-WebGL-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Actively updated](https://img.shields.io/github/last-commit/RuHRabin/Science?style=for-the-badge&label=last%20update)](https://github.com/RuHRabin/Science/commits/main)

[**Explore the site**](https://rabin.ruhrbin.site/Science/) · [**Report a bug**](https://github.com/RuHRabin/Science/issues) · [**Suggest a topic**](https://github.com/RuHRabin/Science/issues)

</div>

<!--
Add a preview image at assets/preview.png, then uncomment:
<p align="center">
  <img src="assets/preview.png" alt="Science: interactive 3D scientific objects and materials rendered in the browser with three.js" width="860">
</p>
-->

---

## What is Science?

**Science** is a continuously updated open-source project for **seeing science in 3D**. Each module is an interactive, browser-based simulation or visualisation of a scientific object or material, such as atoms, elements, molecules, crystal structures, physical systems and mathematical forms. Short articles sit next to the visuals to explain what you are looking at.

Everything is built with **three.js** and **WebGL**. Modules run directly in a modern browser, on desktop or mobile, with no installation, account or build step.

The project is organised by subject (Physics, Chemistry, Math), and new modules and articles are added over time.

## Modules

| Module | Subject | What it shows | Status |
|---|---|---|---|
| **[Elementum 3D](https://rabin.ruhrbin.site/Science/)** | Chemistry | The periodic table of all 118 elements as an interactive 3D scene, with Table, Sphere and Helix layouts, search, category filters and a Bohr atom model for each element | Live |
| More 3D objects and materials | Physics · Chemistry · Math | Simulations and visualisations of scientific objects and materials | In progress, added continuously |

> The table above is updated as each module is released. Watch the repository to follow new additions.

### Featured: Elementum 3D

- **118 elements** with atomic number, symbol, name, mass, group, period, category and summary
- **Three animated 3D layouts**: Table, Sphere and Helix
- **Search** by name, symbol or atomic number, plus **10 colour-coded category filters**
- **Interactive Bohr model** with orbiting electrons for every shell, with orbit, zoom, auto-rotate and focus controls
- **Mouse, touch and keyboard controls**, with a responsive layout for desktop and mobile

| Action | Desktop | Mobile |
|---|---|---|
| Rotate | Click and drag | Drag |
| Zoom | Scroll | Pinch |
| Inspect an element | Click | Tap |
| Switch layout | `G` Table · `S` Sphere · `H` Helix | Top-bar buttons |
| Close panel | `Esc` or × | × |

## Articles

Articles are short explainers that accompany the simulations: the concepts, the data and the assumptions behind each visual. They live in the same folder as the module they describe, so the science and the 3D view stay together.

<!-- Add one line per article as you publish it:
| Title | Subject | Related module |
-->

Articles are added as modules are published.

## Why 3D?

Many scientific ideas are spatial: how electrons occupy shells, how atoms pack in a crystal, how a field curves through space. A model you can rotate, zoom and explore builds intuition faster than a flat diagram. This project aims to make that kind of exploration free, fast and accessible in any browser.

## Quick Facts

| | |
|---|---|
| **Project** | Science: 3D scientific objects, materials and simulations |
| **Subjects** | Physics, Chemistry, Math |
| **Rendering** | three.js on WebGL |
| **Languages** | HTML, CSS, vanilla JavaScript |
| **Install / build step** | None |
| **Runs on** | Any modern browser with WebGL, on desktop and mobile |
| **Updates** | Continuous |
| **License** | MIT |
| **Author** | Rakib Ul Hasan Rabin ([@RuHRabin](https://github.com/RuHRabin)) |
| **Contributors** | Arbin (information accuracy), plus community contributors |

## Getting Started

No installation is needed. Open the [live site](https://rabin.ruhrbin.site/Science/), or run it locally:

```bash
git clone https://github.com/RuHRabin/Science.git
cd Science

# Serve the folder locally (recommended)
python3 -m http.server 8000
# then visit http://localhost:8000
```

> **Note:** libraries such as three.js are currently loaded from public CDNs, so an internet connection is needed on first load.

## Repository Structure

The repository is growing. The target layout is:

```text
Science/
├── index.html        # Book-style index linking to every module and article
├── Physics/          # Physics simulations and articles
├── Chemistry/        # Chemistry simulations and articles (e.g. Elementum 3D)
├── Math/             # Mathematical forms and articles
├── CONTRIBUTING.md   # How to contribute
├── CODE_OF_CONDUCT.md
├── LICENSE           # MIT License
└── README.md
```

Each module is designed to be self-contained and easy to open: a single HTML file where practical, with no build tooling.

## Roadmap

- [x] Elementum 3D, the interactive periodic table
- [ ] Book-style landing index at the repository root
- [ ] `Physics/`, `Chemistry/` and `Math/` sections
- [ ] First articles alongside each module
- [ ] Favicon and social preview image
- [ ] Accessibility improvements (screen-reader labels, dialog semantics, reduced-motion support)
- [ ] Optional offline mode with vendored libraries
- [ ] More 3D scientific objects and materials

Have an idea for a topic? [Open an issue](https://github.com/RuHRabin/Science/issues).

## Accuracy and Scope

These are educational visualisations. Where a model is simplified (for example, the Bohr atom model shows shell occupancy, not quantum orbitals), the module or its article says so. Where values are theoretical or rounded, that is noted too. Information is checked for correctness by the maintainers, with Arbin helping to verify the content. If you spot a scientific error, please open an issue with a reputable source such as IUPAC, NIST or a peer-reviewed reference.

## FAQ

**What is the Science repository?**
A continuously updated open-source collection of interactive 3D visualisations of scientific objects and materials, with accompanying articles, built on three.js and WebGL.

**What can I explore right now?**
Elementum 3D, an interactive 3D periodic table with a Bohr model for each of the 118 elements. More modules are added over time.

**Do I need to install anything?**
No. Everything runs in a modern browser with WebGL. There is no build step.

**Does it work on phones and tablets?**
Yes. Modules use responsive layouts and touch-friendly controls.

**Which technologies are used?**
HTML, CSS and vanilla JavaScript with three.js for 3D rendering.

**Can I use it for teaching or in my own project?**
Yes. It is MIT-licensed. Keep the copyright notice and you are free to use, modify and share it.

**How can I contribute?**
Report issues, suggest topics, correct data, or add a module or article. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Contributing

Contributions are welcome, whether it is a bug fix, a data correction, an article or a whole new module. Please read [**CONTRIBUTING.md**](CONTRIBUTING.md) first, and follow our [**Code of Conduct**](CODE_OF_CONDUCT.md).

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-topic`
3. Add your module or change, keeping to the subject folders above
4. Commit: `git commit -m "Add your topic"`
5. Push the branch and open a pull request

For new modules, aim for a self-contained, mobile-friendly page with a short article that states the science, the sources and any simplifications.

## Contributors and Acknowledgements

| Name | Role |
|---|---|
| **Rakib Ul Hasan Rabin** ([@RuHRabin](https://github.com/RuHRabin)) | Creator and maintainer |
| **Arbin** | Co-builder of the repository; helps verify that the information is correct |

Thank you to everyone who reports issues, corrects data and adds modules or articles. Contributors are welcome to add themselves to this table in their pull request.

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE).

## Author

**Rakib Ul Hasan Rabin** — [@RuHRabin](https://github.com/RuHRabin) · [rabin.ruhrbin.site](https://rabin.ruhrbin.site)

With contributions from **Arbin** (see [Contributors and Acknowledgements](#contributors-and-acknowledgements)).

## Citation

```text
Rabin, R. U. H. (2026). Science: Interactive 3D Scientific Objects, Materials and Simulations [Source code].
https://github.com/RuHRabin/Science
```

---

<sub>Topics: 3D science visualization · science simulation · scientific objects and materials · three.js · WebGL · interactive periodic table · Bohr model · physics · chemistry · mathematics · science education · STEM · JavaScript</sub>
