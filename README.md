Remove the `<div style="background-color: #FFFF00">` and closing `</div>` after each section is updated!

<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">My Portfolio Website</h1>
  <h3 align="center">
    A fullstack, responsive website to showcase my latest projects!
  </h3>
  <a href="https://isimon.dev/">
    <img src="https://github.com/IsaiahSimon/Portfolio-v2/blob/main/frontend_react/src/assets/gif-portfolio-website.gif" alt="project img">
  </a>
  <p align="center">
    <br />
    <a href="https://isimon.dev/"><strong>View Demo</strong></a>
    ·
    <a href="https://github.com/IsaiahSimon/Portfolio-v2/issues">Report Bug</a>
    ·
    <a href="https://github.com/IsaiahSimon/Portfolio-v2/issues">Request Feature</a>
  </p>
</div>

<hr>

<!-- BUILT WITH -->

## Built With:

<div style="background-color: #FFFF00">
<!-- max: 3 per row for mobile! -->
<table>
  <tr>
    <td><a href="https://www.javascript.com/">JavaScript</a></td>
    <td><a href="https://reactjs.org/">ReactJS</a></td>
    <td><a href="">ViteJS</a></td>
  </tr>
  <tr>
    <td><a href="https://www.sanity.io/">Sanity.io</a></td>
    <td><a href="https://www.netlify.com/">Netlify</a></td>
    <td><a href="https://tailwindcss.com/">TailwindCSS</a></td>
  </tr>
  <tr>
    <td><a href="https://formik.org/">Formik</a></td>
    <td><a href="https://www.npmjs.com/package/yup">Yup</a></td>
    <td><a href="https://daisyui.com/">DaisyUI</a></td>
  </tr>
  <tr>
    <td><a href="https://www.framer.com/motion/">Framer Motion</a></td>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></td>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></td>
  </tr>
</table>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <ul>
        <li><a href="#installation">Installation</a></li>
    </ul>
    <li><a href="#details">Details</a></li>
    <ul>
        <li><a href="#future-updates">Future Updates</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ul>
  </ol>
</details>

<hr>

<!-- ABOUT THE PROJECT -->

## About The Project

<div style="background-color: #FFFF00">
This portfolio website has a full navbar with social media links, and a mobile version for smaller devices. Sections include: an Intro, an About, a dynamic Portfolio area with filters, Skills, a Contact form with validation full Footer with social media links. Data in all sections can be updated dynamically from the backend using Sanity.

- ViteJS was chosen for this project's structure since it is "a rapid development tool for modern web projects." The features I enjoyed most are the built-in support for React projects, lightning fast Hot Module Replacement (HMR), how it handles environment variables.
- React was chosen for the frontend because of it's flexibility when it comes to building user interfaces. Being able to reuse Components is one of its biggest advantages, in addition to using JSX elements. React also has a TON of useful UI component libraries that made it easier to handle things like rendering icons.
- For a backend, this project uses the Sanity.io content management platform. I like Sanity for its user-friendly interface that even non-technical users can utilize to safely update different bits of content on a website.
- Styling was done with a mix of DaisyUI components, some SCSS styles following the BEM model, and TailwindCSS utility classes. Media queries were used to help with responsiveness on the most common device sizes.
- The JavaScript generated contact form uses Formik, with Yup to handle input validation.
- Finally, I chose Netlify for automated continous deployment since it is a powerful serverless platform with an intuitive git-based workflow.
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->

## Usage

Set up the project locally or use the [demo](https://isimon.dev/).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LESSONS LEARNED -->

## Lessons Learned

<div style="background-color: #FFFF00">
<ul>
    <li>
      My biggest lesson here was definitely figuring out how to properly submit JavaScript-rendered forms on Netlify. The process was completely different to how regular HTML forms are handled.
    </li>
    <li>
      Functional Components & their reusability
    </li>
    <li>
      Vite + React file and folder structure
    </li>
    <li>
      Simple animations with Framer Motion
    </li>
    <li>
      Using Sanity as a Content Management System (CMS)
    </li>
    <li>
      Using Formik to handle forms in React + Yup for form validation
    </li>
    <li>
      Converting SCSS styles to TailwindCSS
    </li>
</ul>
</div>

<!-- GETTING STARTED -->

## Getting Started

<div style="background-color: #FFFF00">
To get a local copy up and running follow these simple example steps:
</div>

### Installation

<div style="background-color: #FFFF00">
- Get a free API Key at [https://api_key_link.com](https://api_key_link.com)
- Add your mongoDB URI and Google OAuth credentials to a .env file
</div>

```sh
# Clone the repo
  git clone https://github.com/IsaiahSimon/Portfolio-v2.git

# Install dependencies
  npm install

# Enter your API in `config.js`
  const API_KEY = "ENTER YOUR API";

# Run in development
  npm run dev

# Run in production
  npm start
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Future Updates

<div style="background-color: #FFFF00">

</div>

See the [open issues](https://github.com/IsaiahSimon/Portfolio-v2/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>

<!-- DETAILS -->

## Details:

<!-- CONTRIBUTING -->

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated!**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

### Contact

<a href="https://isimon.dev/">
    <img src="https://github.com/IsaiahSimon/IsaiahSimon/blob/main/images/banner_full_neon.gif" alt="Logo">
</a>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<div style="background-color: #FFFF00">

### Acknowledgments

- []()
- []()
- []()
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/IsaiahSimon/Portfolio-v2.svg?style=for-the-badge
[contributors-url]: https://github.com/IsaiahSimon/Portfolio-v2/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IsaiahSimon/Portfolio-v2.svg?style=for-the-badge
[forks-url]: https://github.com/IsaiahSimon/Portfolio-v2/network/members
[stars-shield]: https://img.shields.io/github/stars/IsaiahSimon/Portfolio-v2.svg?style=for-the-badge
[stars-url]: https://github.com/IsaiahSimon/Portfolio-v2/stargazers
[issues-shield]: https://img.shields.io/github/issues/IsaiahSimon/Portfolio-v2.svg?style=for-the-badge
[issues-url]: https://github.com/IsaiahSimon/Portfolio-v2/issues
[license-shield]: https://img.shields.io/github/license/IsaiahSimon/Portfolio-v2.svg?style=for-the-badge
[license-url]: https://github.com/IsaiahSimon/Portfolio-v2/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/isaiahsimon101
