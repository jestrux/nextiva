<div class="mt-8">
    <section class="md:py-20 overflow-hidden px-4 md:px-0 flex flex-col gap-10 md:gap-16 items-center justify-center relative">
        <div class="container md:px-12 flex flex-col items-center justify-center relative">
            <div class="flex-1 flex flex-col items-center text-center md:max-w-5xl"><span class="mb-4 md:text-base text-xs py-2 pl-3 pr-3.5 rounded-full bg-gradient-to-r from-content/10 via-content/10 to-content/0 font-light inline-flex items-center gap-1.5 w-fit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="mb-0.5 w-4 md:w-5">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                    </svg><span class="opacity-60">One platform that hadles it all</span></span>
                <h1 class="text-2xl md:text-6xl md:leading-tight font-medium mb-2 md:mb-4">Amazing customer experience<span class="hidden md:inline"><br></span> <!-- -->on social media</h1>
                <p class="mb-8 opacity-80 font-normal text-sm/loose md:text-lg/loose max-w-2xl">Stop using multiple solutions to market, monitor and support your customers on social media. Do it all from one integrated customer experience platform.</p>
                <div class="flex flex-col md:flex-row items-center gap-3"><a href="#" class="button">Get started</a><a href="#" class="button button-outline hover:bg-content/5">Case Studies</a></div>
            </div>
        </div>
        <div class="max-w-6xl mx-auto"><img class="w-full" src="img/social-marketing/banner.png" alt=""></div>
    </section>

    <?php
    $images = [
        "https://nextiva.seahwk.com/wp-content/uploads/2024/01/manage-media.jpg",
        "https://nextiva.seahwk.com/wp-content/uploads/2024/01/chat-messanging-app.jpg",
        "https://nextiva.seahwk.com/wp-content/uploads/2024/01/ai-power.jpg",
        "https://nextiva.seahwk.com/wp-content/uploads/2024/01/integreted-email.jpg",
        "https://nextiva.seahwk.com/wp-content/uploads/2024/01/monitor-review.jpg",
    ];
    ?>

    <style>
        .scrollable-section {
            position: sticky;
            top: 0;
            /* padding: 0 50px; */
            min-height: calc(95vh - 96px);
            transition: all 0.35s ease-out;
        }

        .scrollable-section:not(.visible) {
            opacity: 0;
            /* transform: translateY(-30%); */
        }

        .scroll-progress {
            transition: all 0.35s ease-out;
        }

        /* .scrollable-sections {
                height: 500vh;
                position: relative;
            }

            .scrollable-section{
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
            } */
    </style>

    <div class="relative scrollable-sections">
        <div class="top-highlight-gradient">
            <div class="w-full flex justify-center">
                <div class="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"></div>
            </div>
        </div>

        <div class="absolute inset-y-0" style="top: 2rem; left: 2.8rem; z-index: 10">
            <div class="flex flex-col items-center" style="position: sticky; top: 96px; height: calc(95vh - 96px); width: 4px; gap: 1.5rem">
                <span class="scroll-current-page">01</span>

                <div class="flex-1 relative" style="width: 1px; background: rgba(255, 255, 255, 0.3)">
                    <div class="bg-white scroll-progress" style="height: 20%"></div>
                </div>

                <span class="scroll-total-pages">05</span>
            </div>
        </div>

        <?php foreach ($images as $index => $image) : ?>
            <section class="<?php echo $index == 0 ? 'visible' : ''; ?> scrollable-section py-20">
                <div class="relative container">
                    <div class="mt-20 max-w-7xl mx-auto relative">
                        <div class="flex items-center gap-6">
                            <div class="py-12 pl-12 flex flex-col items-start gap-6">
                                <div class="mb-">
                                    <h3 class="text-5xl font-medium mb-3">
                                        Manage all<br />
                                        social media
                                    </h3>
                                    <p class="opacity-80 font-normal text-sm/loose">
                                        Lorem Ipsum has been the
                                        industry's standard dummy
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
                                            industry's standard
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
                                            industry's standard
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
                                            industry's standard
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
                                            industry's standard
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
                                            industry's standard
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
                                            industry's standard
                                            dummy.
                                        </p>
                                    </div>
                                </div>
                                <a href="#" class="button h-11 text-sm">Learn more</a>
                            </div>

                            <div class="flex-shrink-0 w-[45%] aspect-[1/0.6] rounded-3xl overflow-hidden" style="min-height: 60vh;">
                                <img class="w-full h-full object-cover object-top" src="<?php echo $image; ?>" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php endforeach; ?>
    </div>

</div>

<script>
    function activateScrollableSections() {
        var threshold = 0.5;

        function scrollSectionObserver(node, index, sections) {
            var totalPages = sections.length;
            var parent = node.closest('.scrollable-sections');
            var currentPage = parent.querySelector('.scroll-current-page');
            var progress = parent.querySelector('.scroll-progress');

            new IntersectionObserver(
                ([e]) => {
                    var isAbove = e.boundingClientRect.top < 0;
                    var isLastPage = index == totalPages - 1;

                    var sectionIsVisible = e.intersectionRatio > threshold;
                    var page = sectionIsVisible ? index + 1 : index;

                    console.log(index, isLastPage, isAbove);

                    if (isAbove) {
                        if (!isLastPage) return;

                        page = totalPages;
                    }

                    currentPage.textContent = page.toString().padStart(2, "0");
                    var scrollPercent = ((page / totalPages) * 100) + '%';
                    progress.style.height = scrollPercent;

                    sections[index - 1].classList.toggle('visible', !sectionIsVisible);
                    node.classList.toggle('visible', sectionIsVisible || (isLastPage && isAbove));
                }, {
                    threshold: [threshold],
                }
            ).observe(node);
        };

        document.querySelectorAll(".scrollable-sections").forEach(function(node) {
            var currentPage = node.querySelector('.scroll-current-page');
            var pageCount = node.querySelector('.scroll-total-pages');

            var sections = node.querySelectorAll(".scrollable-section");
            pageCount.textContent = sections.length.toString().padStart(2, '0');

            sections.forEach(function(node, index) {
                if (index > 0) {
                    scrollSectionObserver(node, index, sections);
                }
            });

            setTimeout(() => {
                currentPage.textContent = "01";
            }, 50);
        });
    }

    activateScrollableSections();
</script>