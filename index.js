const fs = require("fs/promises");

(async () => {
  // Commands
  const CREATE_NAVBAR = "create navbar";
  const CREATE_BANNER = "create banner";
  const CREATE_ABOUT = "create about";
  const CREATE_CONTACT = "create contact";
  const CREATE_FOOTER = "create footer";
  const indexPath = "./index.html";

  const initializeHTMLFile = async () => {
    try {
      await fs.access(indexPath);
    } catch (e) {
      const initialContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dynamic HTML Elements</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100">
      </body>
      </html>`;
      await fs.writeFile(indexPath, initialContent, "utf-8");
    }
  };

  const appendToBody = async (content) => {
    const html = await fs.readFile(indexPath, "utf-8");
    const updatedHTML = html.replace("</body>", `${content}\n</body>`);
    await fs.writeFile(indexPath, updatedHTML, "utf-8");
  };

  const appendNavbarToHTML = async () => {
    const navbarHTML = ` <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
          >
            <a
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >Logo</span
              >
            </a>
            <div class="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Services</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>`;
    await appendToBody(navbarHTML);
  };

  const appendBannerToHTML = async () => {
    const bannerHTML = `
       <div class="bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 font-[sans-serif] min-h-screen flex items-center justify-center">
  <div class="relative overflow-hidden w-full max-w-7xl mx-auto p-8 lg:p-16">
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Left Content -->
      <div class="flex flex-col justify-center text-center lg:text-left space-y-6">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Experience <span class="text-pink-400">Luxury Cuisine</span> at its Best
        </h1>
        <p class="text-lg text-gray-200 max-w-md mx-auto lg:mx-0">
          Discover a world of premium tastes and exquisite flavors crafted just for you. Join us in an unforgettable culinary journey.
        </p>
        <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-8">
          <button class="flex items-center justify-center px-8 py-3 text-base rounded-md text-white bg-pink-500 hover:bg-pink-400 transition ease-in-out">
            Start Your Journey
          </button>
          <button class="flex items-center justify-center px-8 py-3 text-base rounded-md text-pink-600 bg-white hover:text-pink-500 hover:bg-pink-100 transition ease-in-out">
            Explore More
          </button>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative">
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Exquisite Cuisine" class="w-full h-full object-cover" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900 opacity-50"></div>
      </div>
    </div>
  </div>
</div>
`;
    await appendToBody(bannerHTML);
  };

  const appendAboutSection = async () => {
    const aboutHTML = `<section class="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:bg-gray-900">
    <div class="flex flex-col lg:flex-row items-center gap-12 py-16 px-6 mx-auto max-w-7xl lg:px-12">
        <!-- Text Content -->
        <div class="lg:w-1/2 text-center lg:text-left">
            <h2 class="text-4xl font-bold tracking-tight text-gray-800 dark:text-white mb-6">
                We go beyond the basics
            </h2>
            <p class="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                We’re not just developers; we’re visionaries, designers, and strategists, here to bring your ideas to life in innovative ways. Our approach is both flexible and thorough, providing customized solutions that meet your needs with precision.
            </p>
            <p class="text-md text-gray-600 dark:text-gray-400">
                Our team is agile and committed to delivering high-quality work with the personalized touch of a small team, while having the expertise and resources to handle large-scale projects efficiently.
            </p>
        </div>

        <!-- Image Content -->
        <div class="grid grid-cols-2 gap-4 lg:w-1/2">
            <img class="w-full rounded-lg shadow-lg transform transition hover:scale-105" src="https://fsa2-assets.imgix.net/assets/Legacy-Media-Imports/image1_190330_150225.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=800&ixlib=php-3.3.1&w=1200" alt="office content 1">
            <img class="w-full rounded-lg shadow-lg transform transition hover:scale-105 mt-4 lg:mt-10" src="https://fsa2-assets.imgix.net/assets/Legacy-Media-Imports/image1_190330_150225.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=800&ixlib=php-3.3.1&w=1200" alt="office content 2">
        </div>
    </div>
</section>
`;
    await appendToBody(aboutHTML);
  };

  const appendContactSection = async () => {
    const contactHTML = `<div class="p-6 mx-auto max-w-lg bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg rounded-lg font-[sans-serif]">
    <h1 class="text-3xl font-bold text-gray-900 text-center mb-6">Contact Us</h1>
    <form class="space-y-5">
        <input type="text" placeholder="Your Name"
            class="w-full rounded-lg border border-gray-300 py-3 px-4 bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 text-sm outline-none transition duration-150 ease-in-out" />
        <input type="email" placeholder="Your Email"
            class="w-full rounded-lg border border-gray-300 py-3 px-4 bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 text-sm outline-none transition duration-150 ease-in-out" />
        <input type="text" placeholder="Subject"
            class="w-full rounded-lg border border-gray-300 py-3 px-4 bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 text-sm outline-none transition duration-150 ease-in-out" />
        <textarea placeholder="Message" rows="5"
            class="w-full rounded-lg border border-gray-300 py-3 px-4 bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 text-sm outline-none transition duration-150 ease-in-out"></textarea>
        <button type="button"
            class="w-full py-3 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition duration-150 ease-in-out">Send Message</button>
    </form>
</div>
`;
    await appendToBody(contactHTML);
  };
  const appendFooterToHTML = async () => {
    const footerHTML = `<footer class="footer bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-10">
  <!-- Services Section -->
  <nav>
    <h6 class="footer-title text-lg font-semibold mb-4">Services</h6>
    <ul class="space-y-2">
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Branding</a></li>
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Design</a></li>
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Marketing</a></li>
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Advertisement</a></li>
    </ul>
  </nav>

  <!-- Company Section -->
  <nav>
    <h6 class="footer-title text-lg font-semibold mb-4">Company</h6>
    <ul class="space-y-2">
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">About us</a></li>
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Contact</a></li>
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Jobs</a></li>
      <li><a href="#" class="link link-hover text-gray-300 hover:text-white">Press kit</a></li>
    </ul>
  </nav>

  <!-- Social Media Section -->
  <nav>
    <h6 class="footer-title text-lg font-semibold mb-4">Social</h6>
    <div class="flex space-x-4">
      <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-blue-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      </a>
      <a href="#" aria-label="YouTube" class="text-gray-400 hover:text-red-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </a>
      <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-blue-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      </a>
    </div>
  </nav>
</footer>
`;
    await appendToBody(footerHTML);
  };

  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change", async () => {
    const size = (await commandFileHandler.stat()).size;
    const buff = Buffer.alloc(size);
    await commandFileHandler.read(buff, 0, size, 0);
    const command = buff.toString("utf-8").trim();

    await initializeHTMLFile();

    if (command === CREATE_NAVBAR) {
      await appendNavbarToHTML();
    } else if (command === CREATE_BANNER) {
      await appendBannerToHTML();
    } else if (command === CREATE_ABOUT) {
      await appendAboutSection();
    } else if (command === CREATE_CONTACT) {
      await appendContactSection();
    } else if (command === CREATE_FOOTER) {
      await appendFooterToHTML();
    }
  });

  const watcher = fs.watch("./command.txt");
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
