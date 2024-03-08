<?php
require __DIR__ . '/../../shared/head.php';
?>

<body class="bg-canvas text-content">
    <?php
    require __DIR__ . '/../../shared/nav.php';

    include_once "content.php";

    require __DIR__ . '/../../shared/footer.php';
    ?>

    <script>
        (function activateScrollableSections() {
            var threshold = 0.5;
            var scrollSectionStyles = document.createElement("style");
            scrollSectionStyles.innerHTML = `
                .scrollable-sections {
                    position: relative !important;
                }

                .scroll-section-slides {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: sticky; 
                    top: 96px; 
                    height: calc(95vh - 96px); 
                    width: 100%; 
                    gap: 1.5rem;
                }

                .scroll-section-slides-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .scrollable-section {
                    position: sticky !important;
                    top: 0 !important;
                    min-height: calc(95vh - 96px) !important;
                    display: flex !important;
                    align-items: center !important;
                    transition: all 0.35s ease-out;
                    opacity: 0;
                }
                
                .scroll-section-slides .scrollable-section {
                    position: absolute !important;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .scroll-section-slides .scrollable-section.visible {
                    opacity: 1;
                }

                .scroll-section-indicator {
                    position: absolute;
                    top: 2rem; 
                    bottom: 0;
                    left: 2.8rem; 
                    z-index: 10;
                }

                .scroll-section-indicator-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: sticky; 
                    top: 96px; 
                    height: calc(95vh - 96px); 
                    width: 4px; 
                    gap: 1.5rem;
                }

                .scroll-section-progress-wrapper {
                    flex :1;
                    position: relative;
                    width: 1px;
                }

                .scroll-section-progress-wrapper:before {
                    content: "";
                    position: absolute;
                    top: 0; 
                    bottom: 0;
                    left: 0; 
                    right: 0;
                    background: currentColor;
                    opacity: 0.3;
                }

                .scroll-section-progress{
                    background: currentColor;
                    transition: all 0.35s ease-out;
                }
            `;
            document.querySelector("head").appendChild(scrollSectionStyles);

            function getScrollSectionIndicator() {
                const scrollSectionIndicator = document.createElement("div");
                scrollSectionIndicator.className = "scroll-section-indicator";
                scrollSectionIndicator.innerHTML = `
                    <div class="scroll-section-indicator-wrapper">
                        <span class="scroll-section-current-page">01</span>

                        <div class="scroll-section-progress-wrapper">
                            <div class="scroll-section-progress" style="height: 20%"></div>
                        </div>

                        <span class="scroll-section-total-pages">01</span>
                    </div>
                `;

                return scrollSectionIndicator;
            }

            function getScrollSectionSlides() {
                const scrollSectionSlides = document.createElement("div");
                scrollSectionSlides.className = "scroll-section-slides";
                scrollSectionSlides.innerHTML = `
                    <div class="scroll-section-slides-wrapper">
                        
                    </div>
                `;

                return scrollSectionSlides;
            }

            function scrollSectionObserver({
                currentPage,
                progress,
                section,
                index,
                sections,
                parent,
                totalPages,
                slideSections
            }) {
                new IntersectionObserver(
                    ([e]) => {
                        var isAbove = e.boundingClientRect.top < 0;
                        var isLastPage = index == totalPages - 1;

                        var sectionIsVisible = e.intersectionRatio > threshold;
                        var page = sectionIsVisible ? index + 1 : index;

                        if (isAbove) {
                            if (!isLastPage) return;

                            page = totalPages;
                        }

                        currentPage.textContent = page.toString().padStart(2, "0");
                        var scrollPercent = ((page / totalPages) * 100) + '%';
                        progress.style.height = scrollPercent;

                        sections[index - 1].classList.toggle('visible', !sectionIsVisible);
                        section.classList.toggle('visible', sectionIsVisible || (isLastPage && isAbove));

                        slideSections.forEach(function(section, index) {
                            section.classList.toggle('visible', index == page - 1);
                        });
                    }, {
                        threshold: [threshold],
                    }
                ).observe(section);
            };

            document.querySelectorAll(".scrollable-sections").forEach(function(node) {
                var sectionSlides = getScrollSectionSlides();
                var slidesWrapper = sectionSlides.querySelector(".scroll-section-slides-wrapper");
                var slideSections = [];

                var indicator = getScrollSectionIndicator();
                var currentPage = indicator.querySelector('.scroll-section-current-page');
                var progress = indicator.querySelector('.scroll-section-progress');
                var pageCount = indicator.querySelector('.scroll-section-total-pages');
                var sections = node.querySelectorAll(".scrollable-section");

                node.prepend(sectionSlides);
                node.appendChild(indicator);

                pageCount.textContent = sections.length.toString().padStart(2, '0');

                sections.forEach(function(section, index) {
                    let new_section = section.cloneNode(true);
                    slideSections.push(new_section);
                    slidesWrapper.appendChild(new_section);

                    var sectionWidth = section.getBoundingClientRect().width;

                    if (index == 0)
                        slidesWrapper.style.maxWidth = section.getBoundingClientRect().width;
                    else if (sectionWidth > slidesWrapper.style.maxWidth) {
                        slidesWrapper.style.maxWidth = section.getBoundingClientRect().width;
                    }

                    if (index > 0) {
                        scrollSectionObserver({
                            currentPage,
                            pageCount,
                            progress,
                            section,
                            index,
                            sections,
                            parent: node,
                            totalPages: sections.length,
                            slideSections,
                        });
                    }
                });

                setTimeout(() => {
                    currentPage.textContent = "01";
                    progress.style.height = ((1 / sections.length) * 100) + '%';
                }, 50);
            });
        })();
    </script>

    <script src="//unpkg.com/alpinejs" defer></script>
</body>

</html>