<section class="py-24 relative">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl text-center md:text-6xl md:leading-tight">Our Offices</h2>
        <div class="mt-12" x-data="{currentOfficeTab: 0}">
            <div class="grid grid-cols-4 gap-3 relative">
                <button @click="currentOfficeTab = 0" :class="currentOfficeTab == 0 && 'bg-content text-canvas'" class="rounded-xl h-14 border border-content/20 flex items-center justify-center">🇺🇸 Scottsdale</button>
                <button @click="currentOfficeTab = 1" :class="currentOfficeTab == 1 && 'bg-content text-canvas'" class="rounded-xl h-14 border border-content/20 flex items-center justify-center">🇺🇦 Kyiv</button>
                <button @click="currentOfficeTab = 2" :class="currentOfficeTab == 2 && 'bg-content text-canvas'" class="rounded-xl h-14 border border-content/20 flex items-center justify-center">🇲🇽 Guadalajara</button>
                <button @click="currentOfficeTab = 3" :class="currentOfficeTab == 3 && 'bg-content text-canvas'" class="rounded-xl h-14 border border-content/20 flex items-center justify-center">🇮🇳 Bengaluru</button>
            </div>
            <div class="mt-6">
                <div x-show="currentOfficeTab == 0" class="aspect-[1/0.4] flex gap-6">
                    <div class="flex flex-1 border border-content/20 rounded-2xl overflow-hidden">
                        <div class="flex-shrink-0 w-2/5 py-10 px-8 bg-gradient-to-r from-content/10 to-content/5 flex flex-col gap-4">
                            <h3>🇺🇸 Scottsdale</h3>
                            <p class="text-lg/loose">9451 East Via de Ventura Scottsdale, AZ 85256, United States</p><a href="#" class="hover:opacity-50 group-hover:opacity-100 mt-auto inline-flex items-center gap-3">View on Google Maps<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-0.5">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                </svg></a>
                        </div>
                        <div class="flex-1"><iframe title="9451 East Via de Ventura Scottsdale, AZ 85256, United States" width="100%" height="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgh9Vk9mVINncaMWi1TpkZYw5NicrKAZw&amp;q=9451 East Via de Ventura Scottsdale, AZ 85256, United States" allowfullscreen="" class="map-top"></iframe></div>
                    </div>
                    <div class="flex-shrink-0 w-1/4 rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="img/contact-us/scottsdale-office.png" alt=""></div>
                </div>
                <div x-cloak="true" x-show="currentOfficeTab == 1" class="aspect-[1/0.4] flex gap-6">
                    <div class="flex flex-1 border border-content/20 rounded-2xl overflow-hidden">
                        <div class="flex-shrink-0 w-2/5 py-10 px-8 bg-gradient-to-r from-content/10 to-content/5 flex flex-col gap-4">
                            <h3>🇺🇦 Kyiv</h3>
                            <p class="text-lg/loose">57 Pavla Skoropadskoho Street Kyiv 01032 Ukraine</p><a href="#" class="hover:opacity-50 group-hover:opacity-100 mt-auto inline-flex items-center gap-3">View on Google Maps<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-0.5">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                </svg></a>
                        </div>
                        <div class="flex-1"><iframe title="9451 East Via de Ventura Scottsdale, AZ 85256, United States" width="100%" height="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgh9Vk9mVINncaMWi1TpkZYw5NicrKAZw&amp;q=57 Pavla Skoropadskoho Street Kyiv 01032 Ukraine" allowfullscreen="" class="map-top"></iframe></div>
                    </div>
                    <div class="flex-shrink-0 w-1/4 rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="img/contact-us/kyiv-office.png" alt=""></div>
                </div>
                <div x-cloak="true" x-show="currentOfficeTab == 2" class="aspect-[1/0.4] flex gap-6">
                    <div class="flex flex-1 border border-content/20 rounded-2xl overflow-hidden">
                        <div class="flex-shrink-0 w-2/5 py-10 px-8 bg-gradient-to-r from-content/10 to-content/5 flex flex-col gap-4">
                            <h3>🇲🇽 Guadalajara</h3>
                            <p class="text-lg/loose">Av. Rubén Darío 425, Piso 8,Col. Circunvalación Vallarta44680 Guadalajara, Jalisco. Mexico</p><a href="#" class="hover:opacity-50 group-hover:opacity-100 mt-auto inline-flex items-center gap-3">View on Google Maps<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-0.5">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                </svg></a>
                        </div>
                        <div class="flex-1"><iframe title="9451 East Via de Ventura Scottsdale, AZ 85256, United States" width="100%" height="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgh9Vk9mVINncaMWi1TpkZYw5NicrKAZw&amp;q=Av. Rubén Darío 425, Piso 8,Col. Circunvalación Vallarta44680 Guadalajara, Jalisco. Mexico" allowfullscreen="" class="map-top"></iframe></div>
                    </div>
                    <div class="flex-shrink-0 w-1/4 rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="img/contact-us/guadalajara-office.png" alt=""></div>
                </div>
                <div x-cloak="true" x-show="currentOfficeTab == 3" class="aspect-[1/0.4] flex gap-6">
                    <div class="flex flex-1 border border-content/20 rounded-2xl overflow-hidden">
                        <div class="flex-shrink-0 w-2/5 py-10 px-8 bg-gradient-to-r from-content/10 to-content/5 flex flex-col gap-4">
                            <h3>🇮🇳 Bengaluru</h3>
                            <p class="text-lg/loose">91springboard 7th Floor, Trifecta Adatto 21, ITPL Main Road Garudachar Palya, MahadevapuraBengaluru, Karnataka 560048 India</p><a href="#" class="hover:opacity-50 group-hover:opacity-100 mt-auto inline-flex items-center gap-3">View on Google Maps<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-0.5">
                                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                                </svg></a>
                        </div>
                        <div class="flex-1"><iframe title="9451 East Via de Ventura Scottsdale, AZ 85256, United States" width="100%" height="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgh9Vk9mVINncaMWi1TpkZYw5NicrKAZw&amp;q=91springboard 7th Floor, Trifecta Adatto 21, ITPL Main Road Garudachar Palya, MahadevapuraBengaluru, Karnataka 560048 India" allowfullscreen="" class="map-top"></iframe></div>
                    </div>
                    <div class="flex-shrink-0 w-1/4 rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="img/contact-us/bengaluru-office.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-highlight-gradient vibrant"></div>
</section>