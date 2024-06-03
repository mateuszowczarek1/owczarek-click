<template>
    <h2 class="my-8 text-2xl px-4 font-semibold">Higlighted Projects</h2>
    <div class="bg-slate-300/70 rounded-xl mt-4 p-4 md:grid md:grid-cols-3 md:gap-4" id="portfolio">
        <div class="flex md:flex-row flex-col space-y-6 gap-4 items-start">
            <div>
                <img src="/homepage.jpg" alt="Homepage Screenshot" class="rounded-md md:max-w-[10vw] blur-sm hover:blur-none transition-all duration-300">
            </div>
            <div class="md:min-w-[40%]">
                <h2 class="font-semibold text-xl">Bookmarkr</h2>
                <h3 class="text-md uppercase border-t border-gray-400">laravel | inertia.js (vue) | mysql</h3>
                <p>
                    Easily manage bookmarks, create, edit, and delete entries. Share your curated catalog with others
                    for seamless collaboration
                </p>
                <p class="mt-4 underline underline-offset-8 text-slate-700 mb-9">
                    <a href="https://homepage.owczarek.click" target="_blank">Live demo</a>
                </p>
            </div>
        </div>
        <div class="flex md:flex-row flex-col space-y-6 gap-4 items-start">
            <div>
                <img src="/roomoney.jpg" alt="Roomoney Screenshot" class="rounded-md md:max-w-[10vw] blur-sm hover:blur-none transition-all duration-300">
            </div>
            <div class="md:min-w-[40%]">
                <h2 class="font-semibold text-xl">Roomoney</h2>
                <h3 class="text-md uppercase border-t border-gray-400">deno | zod | mongodb | typescript | preact</h3>
                <p>
                    Roomoney is a user-friendly app that enables you to create and manage virtual households. Once
                    you've established a household, you can invite fellow resident to join. This way, you can easily
                    keep track of all household purchases and expenditures. </p>
                <p class="mt-4 underline underline-offset-8 text-slate-700 mb-9">
                    <a href="https://github.com/mateuszowczarek1/deno-roomoney" target="_blank">GitHub Repository</a>
                </p>
            </div>
        </div>
        <div class="flex md:flex-row flex-col space-y-6 gap-4 items-start">
            <div>
                <img src="/applauncher.png" alt="AppLauncher Screenshot" class="rounded-md md:max-w-[10vw] blur-sm hover:blur-none transition-all duration-300">
            </div>
            <div class="md:min-w-[40%]">
                <h2 class="font-semibold text-xl">AppLauncher</h2>
                <h3 class="text-md uppercase border-t border-gray-400">electron.js | electron-forge | preact </h3>
                <p>
                    Electron.js fueled Windows desktop launcher that allowed my co-workers to quickly launch company's ASP.NET apps conveniently from their task bar. It also serves two static websites designed for better work organization.</p>
                <p class="mt-4 underline underline-offset-8 text-slate-700 mb-9">
                    <a href="https://github.com/mateuszowczarek1/applauncher" target="_blank">GitHub Repository</a>
                </p>
            </div>
        </div>
        <div class="flex md:flex-row flex-col space-y-6 gap-4 items-start mb-9">
            <div>
                <img src="/personalpage.jpg" alt="Personal page screenshot" class="rounded-md md:max-w-[10vw] blur-sm hover:blur-none transition-all duration-300">
            </div>
            <div class="md:min-w-[40%]">
                <h2 class="font-semibold text-xl">owczarek.click</h2>
                <h3 class="text-md uppercase border-t border-gray-400">vue | vite | typescript</h3>
                <p> Personal static page created in Vue.js 3. This is the website that you are currently visiting.</p>
                <p class="mt-4 underline underline-offset-8 text-slate-700 mb-9">
                    <a href="https://github.com/mateuszowczarek1/owczarek-click" target="_blank">GitHub Repository</a>
                </p>
            </div>
        </div>
        <div class="flex md:flex-row flex-col space-y-6 gap-4 items-start">
            <div>
                <img src="/issuu.jpg" alt="Issuu downloader screenshoot" class="rounded-md md:max-w-[10vw] blur-sm hover:blur-none transition-all duration-300">
            </div>
            <div class="md:min-w-[40%]">
                <h2 class="font-semibold text-xl">ISSUU And Calameo Extractor</h2>
                <h3 class="text-md uppercase border-t border-gray-400">php | apache | tailwind | tcpdf | imagemagick</h3>
                <p>This app allows users to download pages of free magazines published on ISSUU and Calameo. It uses Imagemagick to manipulate the files. Gives the user a zip package containing jpg images and a magazine PDF file.</p>
                <p class="mt-4 underline underline-offset-8 text-slate-700 mb-9">
                    <a href="https://github.com/mateuszowczarek1/issuuextractor" target="_blank">GitHub Repository</a>
                </p>
            </div>
        </div>
        <div class="flex md:flex-row flex-col space-y-6 gap-4 items-start">
            <div>
                <img src="/mailgenerator.jpg" alt="Mailgenerator Screenshot" class="rounded-md md:max-w-[10vw] blur-sm hover:blur-none transition-all duration-300">
            </div>
            <div class="md:min-w-[40%]">
                <h2 class="font-semibold text-xl">Home Office Mail Generator</h2>
                <h3 class="text-md uppercase border-t border-gray-400">js | bootstrap | sw </h3>
                <p>
                    Simple static website designed for generating e-mail's body and subject. Message is then passed on to the default <i>mailto:</i> application.</p>
                <p class="mt-4 underline underline-offset-8 text-slate-700 mb-9">
                    <a href="https://github.com/mateuszowczarek1/mailgenerator" target="_blank">GitHub Repository</a>
                </p>
            </div>
        </div>
    </div>
</template>