<section class="mb-24 pt-32 pb-40 relative">
    <div class="container">
        <div class="flex flex-col gap-2 items-center justify-center text-center">
            <h2 class="text-2xl md:text-5xl/tight">
                The power of the Nextiva<span class="hidden md:inline"><br /></span>
                conversation platform
            </h2>
        </div>
        <div class="mt-20 max-w-6xl mx-auto" x-data="{currentPowerTab: 0}">
            <div class="grid grid-cols-12 gap-6" >
                <div class="col-span-5 flex flex-col gap-4">
                    <button class="border border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-xl p-5 flex flex-col gap-2 justify-between false" :class="currentPowerTab != 0 && 'opacity-30'" @click="currentPowerTab = 0">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                            </svg>
                            <h3 class="text-sm font-medium">
                                All channels together
                            </h3>
                        </div>
                        <p class="font-light text-xs/loose opacity-70">
                            House all your communication
                            channels in a single place.
                        </p>
                    </button>
                    <button class="border border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-xl p-5 flex flex-col gap-2 justify-between" :class="currentPowerTab != 1 && 'opacity-30'" @click="currentPowerTab = 1">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                            </svg>
                            <h3 class="text-sm font-medium">
                                Customer management
                            </h3>
                        </div>
                        <p class="font-light text-xs/loose opacity-70">
                            House all your communication
                            channels in a single place.
                        </p>
                    </button>
                    <button class="border border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-xl p-5 flex flex-col gap-2 justify-between" :class="currentPowerTab != 2 && 'opacity-30'" @click="currentPowerTab = 2">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                            </svg>
                            <h3 class="text-sm font-medium">
                                Team collaboration
                            </h3>
                        </div>
                        <p class="font-light text-xs/loose opacity-70">
                            House all your communication
                            channels in a single place.
                        </p>
                    </button>
                    <button class="border border-content/10 bg-gradient-to-r from-content/[0.08] via-content/[0.08] to-content/0 relative rounded-xl p-5 flex flex-col gap-2 justify-between" :class="currentPowerTab != 3 && 'opacity-30'" @click="currentPowerTab = 3">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                            </svg>
                            <h3 class="text-sm font-medium">
                                Rich insight and AI
                            </h3>
                        </div>
                        <p class="font-light text-xs/loose opacity-70">
                            House all your communication
                            channels in a single place.
                        </p>
                    </button>
                </div>
                <div class="relative col-span-7 rounded-xl overflow-hidden" style="background: rgba(23, 29, 53, 1)">
                    <img x-show="currentPowerTab == 0" class="absolute inset-0 w-full h-full scale-95 origin-bottom-right" src="img/power-of-platform.png" alt="" />
                    <img x-show="currentPowerTab == 1" class="absolute inset-0 w-full h-full scale-95 origin-bottom-right" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjE2NXwwfDF8c2VhcmNofDJ8fGN1c3RvbWVyfGVufDB8fHx8MTcwMTE3ODQ4N3ww&ixlib=rb-4.0.3&q=80&w=900" alt="" />
                    <img x-show="currentPowerTab == 2" class="absolute inset-0 w-full h-full scale-95 origin-bottom-right" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjE2NXwwfDF8c2VhcmNofDh8fGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzAxMTk3MTU4fDA&ixlib=rb-4.0.3&q=80&w=900" alt="" />
                    <img x-show="currentPowerTab == 3" class="absolute inset-0 w-full h-full scale-95 origin-bottom-right" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjE2NXwwfDF8c2VhcmNofDE0fHxkaWdpdGFsJTIwdHJlbmR8ZW58MHx8fHwxNzAxMTk3MTk2fDA&ixlib=rb-4.0.3&q=80&w=900" alt="" />
                </div>
            </div>
        </div>
        <div class="mt-20 max-w-2xl mx-auto flex flex-col gap-6">
            <p class="text-2xl/relaxed text-center">
                “NextivaOne aims to remove the friction,
                frustration, inefficiencies, and errors that
                come.”
            </p>
            <div class="flex items-center justify-center gap-3">
                <img class="w-14" src="img/yan-santos.png" alt="" />
                <div class="flex flex-col">
                    <span>Yan Santos,</span><span class="opacity-60">Founder of IBM</span>
                </div>
            </div>
        </div>
    </div>

    <div class="bottom-highlight-gradient"></div>
</section>