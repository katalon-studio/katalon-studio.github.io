---
layout: null
---

$(function() {

    (function sidebar() {
        $(".sidebar").Stickyfill();
        $(".navbar-toggle").click(function(){
            $("#sidebar-nav").each(function(){
                $(this).toggleClass("hidden-sm");
                $(this).toggleClass("hidden-xs");
            });
        });
        var nav = $('#jsTOCLeftNav');
        nav
            .navgoco({
                save: false,
                openClass: 'in',
                slide: {
                    duration: 0
                }
            })
            .find('li.active')
            .first()
            .each(function () {
                var li = $(this);
                nav.navgoco('toggle', true, li.parent().data('index'));
                li.find('a').addClass('active');
            });
    })();

    (function toc() {
        var toc = $('#my_toc');
        var path = window.location.pathname;
        $('.content h2, .content h3').each(function() {
            var section = $(this);
            var url = path + '#' + section.attr('id');
            toc.append($('<li><a href="' + url + '" class="nomunge">' + section.text() + '</a></li>'));
        });
    })();

    (function dayNight() {

        function createCookie(name,value,days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + value + expires + '; path=/';
        }

        function readCookie(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }

        function eraseCookie(name) {
            createCookie(name,'',-1);
        }

        function applyNight() {
            $('body').addClass('night');
        }

        function applyDay() {
            $('body').removeClass('night');
        }

        if (readCookie('night') == 'true') {
            applyNight();
            $('#switch-style').prop('checked', true);
        } else {
            applyDay();
            $('#switch-style').prop('checked', false);
        }

        $('#switch-style').change(function() {
            if ($(this).is(':checked')) {
                applyNight();
                createCookie('night',true,999)
            } else {
                applyDay();
                eraseCookie('night')
            }
        });
    })();

    // toc
    (function onTocClick() {

        function loadHash(hashObj) {
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hashObj).offset().top-80
            }, 800);
        }

        $(".toc-nav a").on('click', function(event) {
            // $(this).addClass('active');
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;
              loadHash(hash);

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;

            } // End if
        });
        if (window.location.hash) loadHash(window.location.hash);
    })();

    // highlight toc
    (function highlightToc() {

        function highlightRightNav(heading) {
            if (heading == "title") {
                history.replaceState({}, "Top of page on " + document.location.pathname, document.location.protocol + "//" + document.location.hostname + (location.port ? ':' + location.port : '') + document.location.pathname);
                $("#my_toc a").each(function () {
                    $(this).removeClass("active");
                });
            } else {
                var targetAnchorHREF = document.location.protocol + "//" + document.location.hostname + (location.port ? ':' + location.port : '') + document.location.pathname + "#" + heading;
                // make sure we aren't filtering out that heading level
                var noFilterFound = false;
                $("#my_toc a").each(function () {
                    if (this.href == targetAnchorHREF) {
                        noFilterFound = true;
                    }
                });
                // now, highlight that heading
                if (noFilterFound) {
                    $("#my_toc a").each(function () {
                        //console.log("right-nav",this.href);
                        if (this.href == targetAnchorHREF) {
                            history.replaceState({}, this.innerText, targetAnchorHREF);
                            $(this).addClass("active");
                        } else {
                            $(this).removeClass("active");
                        }
                    });
                }
            }
        }

        var currentHeading = "";
        $(window).scroll(function () {
            var headingPositions = new Array();
            $("h1, h2, h3, h4, h5, h6").each(function () {
                if (this.id == "") this.id = "title";
                headingPositions[this.id] = this.getBoundingClientRect().top;
            });
            headingPositions.sort();
            // the headings have all been grabbed and sorted in order of their scroll
            // position (from the top of the page). First one is toppermost.
            for (var key in headingPositions) {
                if (headingPositions[key] > 0 && headingPositions[key] < 200) {
                    if (currentHeading != key) {
                        // a new heading has scrolled to within 200px of the top of the page.
                        // highlight the right-nav entry and de-highlight the others.
                        highlightRightNav(key);
                        currentHeading = key;
                    }
                    break;
                }
            }
        });
    })();

    // search

    (function search() {
        // Instanciating InstantSearch.js with Algolia credentials
        var search = instantsearch({
            appId: '{{ site.algolia.application_id }}',
            indexName: '{{ site.algolia.index_name }}',
            apiKey: '{{ site.algolia.search_only_api_key }}',
            searchFunction: function(helper) {
                if (helper.state.query === "") {
                    $('#autoContainer').empty();
                } else {
                    helper.search();
                }
            }
        });

        var hitTemplate = function(hit) {
            // var date = '';
            // if (hit.date) {
            //     date = moment.unix(hit.date).format('MMM D, YYYY');
            // }
            var url = '{{ site.baseurl }}' + hit.url;
            var title = hit._highlightResult.title.value;

            var content = hit._snippetResult && hit._snippetResult.content && hit._snippetResult.content.value;
            if (content) {
                content = '<li class="autocompleteDescription">' + content + '</li>';
            } else {
                content = '';
            }

            return '<div class="autoCompleteResult"><ul class="autocompleteProperties"><li class="autocompleteTitle"><a href="' + url + '">' + title + '</a></li>' + content + '</ul></div>';
        }

        var resultsTemplate = function(result) {
            var hits = result.hits;
            var content = ""

            hits.forEach(function(hit) {
                content += hitTemplate(hit);
            });
            content += powerByTemplate();

            return '<div class="autocompleteResults">' + content + '</div>';
        }

        var powerByTemplate = function() {
            return '<div class="autoCompleteResult"><div class="algolia-logo">' + $('.ais-search-box--powered-by').html() + '</div></div>';
        }

        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-box',
                placeholder: 'Search',
                magnifier: false,
                wrapInput: false,
                autofocus: false,
                poweredBy: true,
                reset: false,
                cssClasses: {
                    input: "search-field form-control ds-input"
                }
            })
        );
        search.addWidget(
            instantsearch.widgets.hits({
                container: '#autoContainer',
                templates: {
                    empty: 'No results',
                    allItems: resultsTemplate
                }
            })
        );
        search.addWidget(
            instantsearch.widgets.hitsPerPageSelector({
                container: '#hits-per-page-selector',
                items: [
                    {value: 6, label: '', default: true}
                ]
            })
        );
        search.start();

        var interval = setInterval(
            function() {
                var searchInput = $('.ais-search-box--input');
                if (searchInput.length > 0) {
                    searchInput.attr('type', 'search');
                    clearInterval(interval);
                }
            },
            100
        )

        $("form.search-form").submit(function(e){
            e.preventDefault();
            var a = $('.ais-hits .autocompleteTitle:first a');
            if (a.length > 0 && a.attr('href')) {
                window.location.href = a.attr("href");
            }
        });

    })();
});
