# Contributing to Science

Thank you for helping build **Science**, an open-source collection of interactive 3D visualisations of scientific objects and materials, with articles that explain the science behind them. This project grows continuously, and every bug report, data correction, article and new module helps.

By taking part, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Ways to contribute](#ways-to-contribute)
- [Before you start](#before-you-start)
- [Local setup](#local-setup)
- [Repository layout](#repository-layout)
- [Scientific accuracy](#scientific-accuracy)
- [Guidelines for 3D modules](#guidelines-for-3d-modules)
- [Guidelines for articles](#guidelines-for-articles)
- [Commit messages](#commit-messages)
- [Pull request checklist](#pull-request-checklist)
- [Review process](#review-process)
- [License of contributions](#license-of-contributions)

## Ways to contribute

- **Report a bug**: a broken control, a rendering problem, a layout issue on your phone
- **Correct information**: a wrong value, an outdated figure, a misleading explanation
- **Suggest a topic**: a scientific object or material you would like to see in 3D
- **Write an article**: a short, clear explainer that goes with a module
- **Build a module**: a new interactive 3D visualisation
- **Improve accessibility, performance or documentation**

## Before you start

1. Search the [existing issues](https://github.com/RuHRabin/Science/issues) to avoid duplicates.
2. For anything larger than a small fix, **open an issue first** to discuss the idea.
3. Keep each pull request focused on one change.

## Local setup

No build tools are required.

```bash
git clone https://github.com/<your-username>/Science.git
cd Science
python3 -m http.server 8000
# open http://localhost:8000
```

Fork the repository first, then clone your fork. Create a branch for your work:

```bash
git checkout -b feature/short-description
```

Test in at least one desktop browser and one mobile viewport (browser dev tools are fine).

## Repository layout

The repository is organised by subject. Put new work in the folder that fits best.

```text
Science/
├── index.html           # Book-style index of all modules and articles
├── Physics/
├── Chemistry/
├── Math/
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

Keep a module and its article together in the same folder so the visual and the explanation stay in sync.

## Scientific accuracy

Correct information is the core promise of this project. Every fact, value and explanation should be one a reader can check.

- **Cite reputable sources**: IUPAC, NIST, peer-reviewed papers, standard university textbooks, or official agency data (for example NASA, CERN).
- **Include the source** in your pull request description, and in the article when you add one.
- **Label simplifications.** If a model is a teaching aid (for example the Bohr model), say so.
- **Label predicted, estimated or rounded values** instead of presenting them as exact.
- **Use consistent units and spelling** within a module. Name the unit next to every number.
- **Do not copy text** from books, papers or websites. Write in your own words and cite the source.

Scientific changes are reviewed by the maintainers, including Arbin, who helps verify that the information in this repository is correct. Expect questions about sources, and please do not take them personally. They exist to keep the content trustworthy.

## Guidelines for 3D modules

- **Self-contained.** A module should open and run with no build step. A single HTML file is preferred where practical.
- **Mobile-friendly.** Support touch (drag to rotate, pinch to zoom, tap to select) and small screens. Avoid hover-only interactions.
- **Performance.** Keep draw calls, texture sizes and geometry light enough for mid-range phones. Reuse geometries and materials, dispose of what you no longer need, and avoid creating new WebGL contexts repeatedly.
- **Time-based animation.** Use elapsed time, not fixed per-frame steps, so speed is the same on 60 Hz and 120 Hz screens.
- **Accessibility.** Give controls readable labels, keep text legible with enough contrast, support keyboard use where possible, and respect `prefers-reduced-motion`.
- **Pin dependencies.** Load libraries from a CDN at an exact version (for example `three@0.128.0`), never from a floating tag such as `@latest`.
- **No secrets or tracking.** Do not add API keys, analytics or third-party trackers.
- **Readable code.** Format your code (Prettier is fine) and use clear names. Long unformatted lines make reviews and diffs hard.
- **Page basics.** Include a descriptive `<title>`, a meta description and `lang` attribute, and a short plain-text description of what the module shows.

## Guidelines for articles

- Write for a curious general reader. Explain terms the first time you use them.
- Start with a short summary of what the reader will learn.
- Link to the related 3D module and say what to look for in it.
- End with a **Sources** list.
- Keep the tone clear and friendly. Prefer short paragraphs.

## Commit messages

Write short, specific messages in the imperative mood.

```text
Fix search shortcuts firing while typing
Add crystal lattice module to Chemistry
Correct atomic mass of technetium (cite: IUPAC 2021)
```

## Pull request checklist

Before you open a pull request, check that:

- [ ] The change is focused and described clearly
- [ ] It runs locally with no console errors
- [ ] It works on a mobile-sized screen
- [ ] Scientific claims have sources, and simplifications are labelled
- [ ] New libraries are pinned to an exact version
- [ ] You wrote or adapted all content yourself (or it is properly licensed and credited)
- [ ] You have read the [Code of Conduct](CODE_OF_CONDUCT.md)

## Review process

1. A maintainer will look at your pull request, usually within a few days.
2. Scientific content is checked for accuracy and sourcing.
3. You may be asked for changes. This is normal and part of keeping quality high.
4. Once approved, your work is merged and will appear on the live site.

## License of contributions

By submitting a contribution, you agree that it is released under the project's [MIT License](LICENSE).

## Questions?

Open a [discussion or issue](https://github.com/RuHRabin/Science/issues), or visit [rabin.ruhrbin.site](https://rabin.ruhrbin.site). Thank you for helping make science easier to see.
