$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrollValue = $(this).scrollTop();
    let scrolledValueWithoutDecimal = scrollValue.toFixed(0);
    let firstNavigationHight = $("div.main-navigation--container").height();
    if ($(window).innerWidth() > 1199) {
      if (scrolledValueWithoutDecimal > firstNavigationHight) {
        $("div.navigation-container").css("top", `-${firstNavigationHight}px`);
      } else {
        $("div.navigation-container").css(
          "top",
          scrolledValueWithoutDecimal * -1
        );
      }
    }
  });

  // Cached Selectors
  const $window = $(window);
  const $targetElement = $(".main-navigation--container");
  const $menuButton = $("#menu-button");
  const $searchContainer = $(".main-navigation-search-container");
  const $cssMenu = $("#cssmenu");
  let isScrolled = false;

  // Initialize the CSS Menu Plugin
  $cssMenu.menumaker({
    title: "",
    format: "multitoggle",
  });

  // Update opacity based on scroll position
  function updateOpacity() {
    if ($window.scrollTop() > 0) {
      $targetElement.addClass("navigation-scrolled");
      isScrolled = true;
    } else if (
      $(window).scrollTop() === 0 &&
      $("#menu-button").hasClass("menu-opened")
    ) {
      isScrolled = true;
      $targetElement.hasClass("navigation-scrolled")
        ? null
        : $targetElement.addClass("navigation-scrolled");
    } else if (isScrolled) {
      $targetElement.removeClass("navigation-scrolled");
      isScrolled = false;
    }
  }

  // Initial opacity update on page load and scroll event
  updateOpacity();
  $window.scroll(updateOpacity);

  // Toggle navigation-scrolled on #menu-button click

  // Hover effect for submenu items

  if ($(window).innerWidth() > 1199) {
    // Add hover events
    $cssMenu
      .find("li")
      .add($targetElement.find("a"))
      .hover(
        function () {
          // Hover in
          $targetElement.addClass("navigation-scrolled");
        },
        function () {
          // Hover out
          if ($(window).scrollTop() === 0) {
            $targetElement.removeClass("navigation-scrolled");
          }
        }
      );
  }

  // Search bar toggle
  $searchContainer.on("click", ".navigation-search", () => {
    $(".searchBarOpen").addClass("search-active");
  });
  $(".searchBarOpen--closeBtn").on("click", () => {
    $(".searchBarOpen").removeClass("search-active");
  });

  // Dropdown handling
  $(".dropdown.signin-btn > .dropdown-toggle").click(function () {
    $menuButton.removeClass("menu-opened");
    $cssMenu.find("ul, .cssmenu2 ul").removeClass("open").css("display", "");
  });

  // Footer toggle button
  $(".toggleButton").click(function () {
    if ($window.width() <= 991) {
      const $ul = $(this).closest("div").next("ul");
      $ul.toggleClass("show");
      $(this).find(".fa-plus").toggle(!$ul.hasClass("show"));
      $(this).find(".fa-minus").toggle($ul.hasClass("show"));
    }
  });

  // Back to top button
  $(".backtotop-box").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  });

  // Navbar active link
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // Navbar search toggle
  $(".search-icon").click(function () {
    $(".nav-search, .navbar-search-bar-container").addClass("active");
  });
  $(".close-icon").click(function () {
    $(".nav-search, .navbar-search-bar-container").removeClass("active");
  });

  // Submenu toggle in the navigation
  $(".has-sub").click(function () {
    // const $submenu = $(this).find("ul");
    // const isOpen = $submenu.hasClass("open");
    // $("li.has-sub > span.submenu-button").removeClass("submenu-opened");
    // $("li.has-sub > ul").removeClass("open").css("display", "");

    if (!isOpen) {
      $submenu.addClass("open").css("display", "block");
      $(this).find("span.submenu-button").addClass("submenu-opened");
    }
  });
});
