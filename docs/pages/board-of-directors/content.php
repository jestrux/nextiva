<div x-data="leadership">
    <section class="md:py-20  md:px-0 ">
        <div class=" md:max-w-6xl mx-auto">
            <h1 class="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">Meet our Board of <span class="hidden md:inline"><br></span> Directors</h1>
            <p class="mb-8  max-w-2xl opacity-80 font-normal text-sm/loose md:text-lg/loose">Our Board of Directors brings together wide experience, deep expertise, and sound judgment to help chart a strong path forward.</p>
        </div>
    </section>
    <section class="pb-20 relative">
        <div class="bottom-highlight-gradient"></div>
        <div class="md:max-w-6xl mx-auto gap-x-7 gap-y-16 grid grid-cols-4 ">
            <div class="space-y-2.5" x-on:click="selectLeader(0)">
                <div class="h-72 bg-gray-100 rounded-xl overflow-hidden"><img src="img/board-of-directors/BobBeauchamp.png" alt="nextiva leader: Bob Beauchamp, Board Member,Advisor, Investor"></div>
                <div class="space-y-1 tracking-wide">
                    <h3 class="font-medium ">Bob Beauchamp</h3>
                    <p class="text-xs text-white/70 font-light">Board Member,Advisor, Investor</p>
                </div>
            </div>
            <div class="space-y-2.5" x-on:click="selectLeader(1)">
                <div class="h-72 bg-gray-100 rounded-xl overflow-hidden"><img src="img/board-of-directors/AlanBlack.png" alt="nextiva leader: Alan Black, Founder, Surfspray Capital"></div>
                <div class="space-y-1 tracking-wide">
                    <h3 class="font-medium ">Alan Black</h3>
                    <p class="text-xs text-white/70 font-light">Founder, Surfspray Capital</p>
                </div>
            </div>
            <div class="space-y-2.5" x-on:click="selectLeader(2)">
                <div class="h-72 bg-gray-100 rounded-xl overflow-hidden"><img src="img/board-of-directors/JohnConnolly.png" alt="nextiva leader: John Connolly, Founder/Managing Directorat Eaglehead Capital"></div>
                <div class="space-y-1 tracking-wide">
                    <h3 class="font-medium ">John Connolly</h3>
                    <p class="text-xs text-white/70 font-light">Founder/Managing Directorat Eaglehead Capital</p>
                </div>
            </div>
            <div class="space-y-2.5" x-on:click="selectLeader(3)">
                <div class="h-72 bg-gray-100 rounded-xl overflow-hidden"><img src="img/board-of-directors/TracyConrad.png" alt="nextiva leader: Tracy Conrad, Chief Amazing Officer, Co-Founder"></div>
                <div class="space-y-1 tracking-wide">
                    <h3 class="font-medium ">Tracy Conrad</h3>
                    <p class="text-xs text-white/70 font-light">Chief Amazing Officer, Co-Founder</p>
                </div>
            </div>
            <div class="space-y-2.5" x-on:click="selectLeader(4)">
                <div class="h-72 bg-gray-100 rounded-xl overflow-hidden"><img src="img/board-of-directors/TomasGorny.png" alt="nextiva leader: Tomas Gorny, Chairman, CEO, &amp; Co-Founder"></div>
                <div class="space-y-1 tracking-wide">
                    <h3 class="font-medium ">Tomas Gorny</h3>
                    <p class="text-xs text-white/70 font-light">Chairman, CEO, &amp; Co-Founder</p>
                </div>
            </div>
            <div class="space-y-2.5" x-on:click="selectLeader(5)">
                <div class="h-72 bg-gray-100 rounded-xl overflow-hidden"><img src="img/board-of-directors/StephenKerns.png" alt="nextiva leader: Stephen Kerns, Managing Director, Goldman Sachs Growth Equity"></div>
                <div class="space-y-1 tracking-wide">
                    <h3 class="font-medium ">Stephen Kerns</h3>
                    <p class="text-xs text-white/70 font-light">Managing Director, Goldman Sachs Growth Equity</p>
                </div>
            </div>
        </div>
    </section>
    <template x-if="selectedLeader">
        <div>
            <div style="z-index:9998" class="fixed inset-0 bg-[#0B1029] bg-opacity-75 transition-opacity"></div>
            <div style="z-index:9999" class="fixed inset-0 overflow-hidden ">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto relative w-screen bg-amber-200 max-w-xl">
                            <div class="absolute blur-[170px] rounded-xl opacity-50 inset-y-0 w-96 bg-primary"></div>
                            <div class="flex h-full px-6 text-white flex-col overflow-y-scroll relative bg-[#0B1029] pb-6 shadow-xl">
                                <div class=" py-4 z-10 bg-primary-darker sticky top-0 w-full flex border-b justify-between">
                                    <div class="flex space-x-2.5 "><button x-on:click="previousLeader()"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-50">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1992 25.9996C44.1992 24.9227 43.3262 24.0496 42.2492 24.0496L14.5906 24.0496L25.4008 13.7552C26.1771 13.0088 26.2013 11.7743 25.4548 10.998C24.7084 10.2217 23.474 10.1975 22.6977 10.944L8.39765 24.594C8.0153 24.9616 7.79922 25.4692 7.79922 25.9996C7.79922 26.53 8.0153 27.0376 8.39765 27.4052L22.6977 41.0552C23.474 41.8017 24.7084 41.7775 25.4548 41.0012C26.2013 40.2249 26.1771 38.9904 25.4008 38.244L14.5906 27.9496L42.2492 27.9496C43.3262 27.9496 44.1992 27.0766 44.1992 25.9996Z" fill="currentColor"></path>
                                            </svg></button><button x-on:click="nextLeader()"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.80078 25.9996C7.80078 24.9227 8.67383 24.0496 9.75078 24.0496L37.4094 24.0496L26.5992 13.7552C25.8229 13.0088 25.7987 11.7744 26.5452 10.998C27.2916 10.2217 28.526 10.1975 29.3023 10.944L43.6023 24.594C43.9847 24.9616 44.2008 25.4692 44.2008 25.9996C44.2008 26.53 43.9847 27.0376 43.6023 27.4052L29.3023 41.0552C28.526 41.8017 27.2916 41.7775 26.5452 41.0012C25.7987 40.2249 25.8229 38.9904 26.5992 38.244L37.4094 27.9496L9.75078 27.9496C8.67383 27.9496 7.80078 27.0766 7.80078 25.9996Z" fill="currentColor"></path>
                                            </svg></button></div><button type="button" class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" x-on:click="selectLeader()"><span class="absolute -inset-2.5"></span><span class="sr-only">Close panel</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg></button>
                                </div>
                                <div class="relative mt-6 flex-1 space-y-14 ">
                                    <div class="flex pt-5 space-x-6">
                                        <div class="h-64 rounded-lg w-48 "><img x-bind:src="'img/board-of-directors/' + selectedLeader.avatar" src="" alt=""></div>
                                        <div class="flex-1 gap-y-8 flex flex-col justify-between">
                                            <p class="text-lg leading-relaxed tracking-wide font-medium">"Nextiva believes that customer satisfaction is the key to business success. We will provide industry leading solutions that enable businesses to understand, engage and delight their customers across multiple channels."</p>
                                            <div class="space-y-2">
                                                <p class="flex font-medium text-sm" x-text="selectedLeader.name"></p><small class="opacity-70" x-text="selectedLeader.position"></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="font-medium border-b pb-6 ">Education</h3>
                                        <div class="flex gap-8 pt-6">
                                            <div class="flex flex-col gap-y-2">
                                                <p class="text-sm">Arizona State University</p><small class="text-white/50 text-xs max-w-[14rem] ">MS, Computer Science and Engineering</small>
                                            </div>
                                            <div class="flex flex-col gap-y-2">
                                                <p class="text-sm">Arizona State University</p><small class="text-white/50 text-xs max-w-[14rem] ">MS, Computer Science and Engineering</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="font-medium text border-b pb-6">Experience</h3>
                                        <div class="flex flex-wrap gap-y-9 gap-x-10 pt-6">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex justify-between gap-10 items-center">
                                                    <p class="text-sm">Nextiva</p><small class="text-white/50 text-xs ">2023 - Present</small>
                                                </div><small class="text-white/50 text-xs tracking-wide">Chief Product &amp; Technology Officer</small>
                                            </div>
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex justify-between gap-10 items-center">
                                                    <p class="text-sm">HinFore</p><small class="text-white/50 text-xs ">2023</small>
                                                </div><small class="text-white/50 text-xs tracking-wide">Chief Executive Officer/Co-Founder</small>
                                            </div>
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex justify-between gap-10 items-center">
                                                    <p class="text-sm">Trader Interactive</p><small class="text-white/50 text-xs ">2020 - 2022</small>
                                                </div><small class="text-white/50 text-xs tracking-wide">Chief Product &amp; Technology Officer</small>
                                            </div>
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex justify-between gap-10 items-center">
                                                    <p class="text-sm">Microsoft</p><small class="text-white/50 text-xs ">1996 - 2020</small>
                                                </div><small class="text-white/50 text-xs tracking-wide">CTO / Chief Architect</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="font-medium  border-b pb-6">About Senthil</h3>
                                        <div class="text-white/70 tracking-wide text-xs/relaxed pt-6 space-y-5 max-w-lg">
                                            <p>As Chief Product and Technology Officer, Senthil Velayutham oversees all aspects of product and technology at Nextiva.</p>
                                            <p>Senthil brings with him a proven history of leading small and large geo-distributed, multi-disciplinary product teams spanning apps, services, and devices. He comes with a long and successful career of 24+ years at Microsoft Corporation having served in leadership roles for flagship products like Microsoft Exchange, Skype/Skype for Business, and most recently as CTO/Chief Architect for Microsoft Teams and then in the Microsoft Search, Assistant and Intelligence division. He also has an impressive track record that includes building startup products from incubation that evolve into successful businesses like Microsoft RoundTable and Microsoft Teams and integrating parts of big acquisitions like Skype into Microsoft.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('leadership', () => ({
            leaders: [{
                    name: "Bob Beauchamp",
                    position: "Board Member,Advisor, Investor",
                    avatar: "BobBeauchamp.png",
                },
                {
                    name: "Alan Black",
                    position: "Founder, Surfspray Capital",
                    avatar: "AlanBlack.png",
                },
                {
                    name: "John Connolly",
                    position: "Founder/Managing Directorat Eaglehead Capital",
                    avatar: "JohnConnolly.png",
                },
                {
                    name: "Tracy Conrad",
                    position: "Chief Amazing Officer, Co-Founder",
                    avatar: "TracyConrad.png",
                },
                {
                    name: "Tomas Gorny",
                    position: "Chairman, CEO, & Co-Founder",
                    avatar: "TomasGorny.png",
                },
                {
                    name: "Stephen Kerns",
                    position: "Managing Director, Goldman Sachs Growth Equity",
                    avatar: "StephenKerns.png",
                },
            ],
            selectedLeader: null,
            selectedLeaderIndex: null,
            selectLeader: function(index) {
                console.log(index);
                this.selectedLeaderIndex = index;
                this.selectedLeader = index == undefined ? null : this.leaders[index];
            }
        }))
    });
</script>