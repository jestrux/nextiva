<section class="py-8 md:py-12 mb-12">
    <div class="max-w-5xl mx-auto" x-data="{currentTestimonialTab: 0, numberOfTestimonials: 3}">
        <div class="border border-content/20 bg-gradient-to-r from-content/10 to-content/5 relative rounded-2xl py-3 px-2">
            <div x-show="currentTestimonialTab == 0" class="flex items-center gap-12">
                <div class="py-12 pl-14 flex flex-col gap-6">
                    <h2 class="text-2xl md:text-4xl/[1.2]">
                        “Nextiva enables us to have great
                        conversations with our fans everyday”
                    </h2>
                    <div class="mb-4">
                        Savannah Bananas,
                        <span class="opacity-60">Jesse Cole, Owner</span>
                    </div>
                </div>
                <div class="flex-shrink-0 w-1/2 aspect-[1/0.6] self-stretch min-h-full rounded-md overflow-hidden">
                    <img class="w-full h-full object-cover object-top" src="img/jesse-cole.jpg" alt="" />
                </div>
            </div>

            <div x-show="currentTestimonialTab == 1" class="flex items-center gap-12">
                <div class="py-12 pl-14 flex flex-col gap-6">
                    <h2 class="text-2xl md:text-4xl/[1.2]">
                        “What led us to looking for a new business phone was the efficiencies of Nextiva.”
                    </h2>
                    <div class="mb-4">
                        Kelly Green,
                        <span class="opacity-60">General Manager Avit</span>
                    </div>
                </div>
                <div class="flex-shrink-0 w-1/2 aspect-[1/0.6] self-stretch min-h-full rounded-md overflow-hidden">
                    <img class="w-full h-full object-cover object-top" src="img/customer-stories/kelly-green.png" alt="" />
                </div>
            </div>

            <div x-show="currentTestimonialTab == 2" class="flex items-center gap-12">
                <div class="py-12 pl-14 flex flex-col gap-6">
                    <h2 class="text-2xl md:text-4xl/[1.2]">
                        “We here really like efficient digital companies such as the one they call Nextiva.”
                    </h2>
                    <div class="mb-4">
                        Steve Wozniak,
                        <span class="opacity-60">Co-founder Apple</span>
                    </div>
                </div>
                <div class="flex-shrink-0 w-1/2 aspect-[1/0.6] self-stretch min-h-full rounded-md overflow-hidden">
                    <img class="w-full h-full object-cover object-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg/1920px-Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg" alt="" />
                </div>
            </div>
        </div>

        <div class="mt-12 flex items-center justify-center gap-4">
            <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-content/10" @click="currentTestimonialTab = currentTestimonialTab == 0 ? numberOfTestimonials - 1 : currentTestimonialTab - 1">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd"></path>
                </svg>
            </button>

            <template x-for="(_, i) in Array.from({ length: numberOfTestimonials })">
                <span class="w-2 h-2 rounded-full" :class="currentTestimonialTab == i ? 'bg-primary' : 'bg-content/20'"></span>
            </template>

            <button class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-content/10" @click="currentTestimonialTab = currentTestimonialTab == numberOfTestimonials - 1 ? 0 : currentTestimonialTab + 1">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
</section>