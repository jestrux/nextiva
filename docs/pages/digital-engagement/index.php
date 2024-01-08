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
                var progress = node.querySelector('.scroll-progress');

                var sections = node.querySelectorAll(".scrollable-section");
                pageCount.textContent = sections.length.toString().padStart(2, '0');

                sections.forEach(function(node, index) {
                    if (index > 0) {
                        scrollSectionObserver(node, index, sections);
                    }
                });

                setTimeout(() => {
                    currentPage.textContent = "01";
                    progress.style.height = ((1 / sections.length) * 100) + '%';
                }, 50);
            });
        }

        activateScrollableSections();
    </script>

    <script src="//unpkg.com/alpinejs" defer></script>
</body>

</html>