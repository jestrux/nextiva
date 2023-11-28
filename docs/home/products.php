<section class="mb-24 py-20 relative">
    <div class="top-highlight-gradient"></div>

    <div class="container">
        <div class="flex flex-col gap-2 items-center justify-center text-center">
            <h2 class="text-2xl md:text-5xl/tight">
                Nextiva Products
            </h2>
            <p class="max-w-2xl opacity-80 font-normal text-sm/loose md:text-base/loose">
                Lorem Ipsum has been the industry&#x27;s
                standard dummy text ever since the 1500s, when
                an unknown printer took a galley.
            </p>
        </div>
        <div class="mt-20 max-w-6xl mx-auto" x-data="{currentProductTab: 0}">
            <div class="grid grid-cols-3 gap-6 -mb-2.5 relative">
                <button class="tab-button-gradient border-t border-l border-r border-content/20 relative rounded-tl-xl rounded-tr-xl overflow-hidden" :class="currentProductTab == 0 ? 'pointer-events-none': 'opacity-50 hover:opacity-90'" @click="currentProductTab = 0">
                    <div class="px-6 pt-5 pb-7 text-center font-medium" style="opacity: 1">
                        Experience Cloud
                    </div>
                </button>
                <button class="tab-button-gradient border-t border-l border-r border-content/20 relative rounded-tl-xl rounded-tr-xl overflow-hidden" :class="currentProductTab == 1 ? 'pointer-events-none': 'opacity-50 hover:opacity-90'" @click="currentProductTab = 1">
                    <div class="px-6 pt-5 pb-7 text-center font-medium" style="opacity: 1">
                        Communications Cloud
                    </div>
                </button>
                <button class="tab-button-gradient border-t border-l border-r border-content/20 relative rounded-tl-xl rounded-tr-xl overflow-hidden" :class="currentProductTab == 2 ? 'pointer-events-none': 'opacity-50 hover:opacity-90'" @click="currentProductTab = 2">
                    <div class="px-6 pt-5 pb-7 text-center font-medium" style="opacity: 1">
                        Social Marketing Cloud
                    </div>
                </button>
            </div>

            <div x-show="currentProductTab == 0" class="border border-content/20 large-card-gradient relative rounded-xl overflow-hidden">
                <div class="flex items-center gap-6">
                    <div class="py-12 pl-12 flex flex-col items-start gap-6">
                        <div class="mb-">
                            <h3 class="text-3xl font-medium mb-3">
                                Get the best cloud
                            </h3>
                            <p class="opacity-80 font-normal text-sm/loose">
                                Lorem Ipsum has been the
                                industry&#x27;s standard dummy
                                text.
                            </p>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex flex-col gap-2 py-4 false">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"></path>
                                        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"></path>
                                        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"></path>
                                        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 false">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                        </div>
                        <a href="#" class="button h-11 text-sm">Learn more</a>
                    </div>
                    <div class="flex-shrink-0 w-[45%] aspect-[1/0.6] self-stretch min-h-full">
                        <img class="w-full h-full object-cover object-top" src="img/product-preview.png" alt="" />
                    </div>
                </div>
                <div class="caption-gradient py-4 px-5 flex items-center justify-between text-xs">
                    <span class="py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light"><span class="opacity-60">Case study</span></span><span>How Phat Scooters Uses Nextiva to
                        Create the Best Customer Experience
                        Every Time</span><a href="#" class="flex items-center gap-1.5">Read case study<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                        </svg></a>
                </div>
            </div>

            <div x-show="currentProductTab == 1" class="border border-content/20 large-card-gradient relative rounded-xl overflow-hidden">
                <div class="flex items-center gap-6">
                    <div class="py-12 pl-12 flex flex-col items-start gap-6">
                        <div class="mb-">
                            <h3 class="text-3xl font-medium mb-3">
                                The best communication
                            </h3>
                            <p class="opacity-80 font-normal text-sm/loose">
                                Lorem Ipsum has been the
                                industry&#x27;s standard dummy
                                text.
                            </p>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex flex-col gap-2 py-4 false">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"></path>
                                        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"></path>
                                        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"></path>
                                        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 false">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                        </div>
                        <a href="#" class="button h-11 text-sm">Learn more</a>
                    </div>
                    <div class="flex-shrink-0 w-[45%] aspect-[1/0.6] self-stretch min-h-full">
                        <img class="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1656228298977-b9240a097395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjE2NXwwfDF8c2VhcmNofDN8fHNlY3JldGFyeSUyMHBob25lfGVufDB8fHx8MTcwMTE5NjIyOHww&ixlib=rb-4.0.3&q=80&w=900" alt="" />
                    </div>
                </div>
                <div class="caption-gradient py-4 px-5 flex items-center justify-between text-xs">
                    <span class="py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light"><span class="opacity-60">Case study</span></span><span>How Phat Scooters Uses Nextiva to
                        Create the Best Customer Experience
                        Every Time</span><a href="#" class="flex items-center gap-1.5">Read case study<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                        </svg></a>
                </div>
            </div>

            <div x-show="currentProductTab == 2" class="border border-content/20 large-card-gradient relative rounded-xl overflow-hidden">
                <div class="flex items-center gap-6">
                    <div class="py-12 pl-12 flex flex-col items-start gap-6">
                        <div class="mb-">
                            <h3 class="text-3xl font-medium mb-3">
                                Keep accurate tabs on socials
                            </h3>
                            <p class="opacity-80 font-normal text-sm/loose">
                                Lorem Ipsum has been the
                                industry&#x27;s standard dummy
                                text.
                            </p>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="flex flex-col gap-2 py-4 false">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"></path>
                                        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"></path>
                                        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"></path>
                                        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 false">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z" clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 py-4 border-t border-content/5">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"></path>
                                    </svg>
                                    <h3 class="text-sm">
                                        Experience Cloud
                                    </h3>
                                </div>
                                <p class="max-w-2xl opacity-50 font-normal text-xs/relaxed pr-4">
                                    Lorem Ipsum has been the
                                    industry&#x27;s standard
                                    dummy.
                                </p>
                            </div>
                        </div>
                        <a href="#" class="button h-11 text-sm">Learn more</a>
                    </div>
                    <div class="flex-shrink-0 w-[45%] aspect-[1/0.6] self-stretch min-h-full">
                        <img class="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjE2NXwwfDF8c2VhcmNofDEzfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3MDExOTYwODR8MA&ixlib=rb-4.0.3&q=80&w=900" alt="" />
                    </div>
                </div>
                <div class="caption-gradient py-4 px-5 flex items-center justify-between text-xs">
                    <span class="py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light"><span class="opacity-60">Case study</span></span><span>How Phat Scooters Uses Nextiva to
                        Create the Best Customer Experience
                        Every Time</span><a href="#" class="flex items-center gap-1.5">Read case study<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                        </svg></a>
                </div>
            </div>
        </div>
    </div>
</section>