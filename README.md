# Contesting Software

Amateur Radio contesting is an activity where hobbyists get on air, exchange information and log the exchange. A contest awards points for such an exchange using rules defined by the contest manager. This project implements a contest logging solution that is Open Source, Cross Platform and Extensible.

The project has several active branches:
- [ ] [Main](https://github.com/vk6flab/contest-logger/tree/main) - the general main active branch where the actual application will emerge once we have something that's an actual application.
- [x] [Pre-Alpha](https://github.com/vk6flab/contest-logger/tree/pre-alpha) - A Minimum Viable Product (MVP), has been developed in a separate branch to act as a demonstration, one step above drawing on a piece of paper. You should not rely on it to accurately do anything. If you find issues, please lodge an issue, but understand that this is NOT the actual product, it's the first pass at exploring what kinds of issues will need to be resolved when implementing an open source, cross-platform contest logging solution.
- [ ] [system-design](https://github.com/vk6flab/contest-logger/tree/system-design) - the place where this project is being designed.

---

# Minimum Viable Product

To start a discussion about features and functionality, a Minimum Viable Product (MVP), has been developed as a product demonstration, one step above drawing on a piece of paper. You should **not rely on it to accurately do anything**. If you find issues, please let me know, but understand that this is **NOT the actual product**, it's the first pass at exploring what kinds of issues will need to be resolved when implementing an open source, cross-platform contest logging solution.

It is available online as a Progressive Web App (PWA) and can be [used in any web browser](https://vk6flab.github.io/contest-logger/) and should be installable as an application on all operating systems for offline use. Note that several browsers do not (yet) support installing a PWA.

The MVP has the following functionality:

- [x] Form with basic logging fields
- [x] Table with log entries
- [x] Example of a Preferences screen
- [x] Log current time
- [x] Local storage of current log
- [x] Log export to file
- [x] Example of a validation error
- [x] Switching between two layout style sheets
- [x] Installable PWA

---

# Proof Of Concept

The following projects and examples were explored to establish that the basic functionality can be built with a Progressive Web App.

- [x] Progressive Web App
  - https://github.com/ibrahima92/pwa-with-vanilla-js
  - https://app-manifest.firebaseapp.com/
- [x] Minimal CSS
  - https://github.com/picocss/pico
  - https://github.com/dohliam/dropin-minimal-css
  - https://github.com/longsien/BareCSS
  - https://design-system.service.gov.uk/
  - https://news.ycombinator.com/item?id=29559961
  - https://web.dev/building-a-theme-switch-component/
- [x] Dynamic Tables
  - https://datatables.net/examples/api/tabs_and_scrolling.html
- [x] External File Handling
  - https://github.com/GoogleChromeLabs/text-editor.git
- [x] Table Row Handling
  - https://www.javaguides.net/2020/11/javascript-crud-example-tutorial.html
- [x] Tabs in CSS
  - https://alvarotrigo.com/blog/html-css-tabs/
- [x] Default Values
  - https://www.w3schools.com/tags/att_input_value.asp
  - https://www.w3schools.com/jsref/prop_text_defaultvalue.asp
- [x] Icon Generator
  - https://favicon.io/favicon-generator/

---

This is an Open Source project, on purpose. The idea is that it's your project to contribute to in what ever way works for you. You can email me <cq@vk6flab.com>, or create an issue, better still, make a pull-request.

Look forward to your ideas!

73, de Onno VK6FLAB
