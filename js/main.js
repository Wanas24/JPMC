$(document).ready(function () {

  // $(window).resize(checkHover)
  var targetElement = $('.flying-navigation')

  // Function to update opacity based on scroll position
  function updateOpacity() {
    if ($(window).scrollTop() > 0) {
      // targetElement.css('background-color', '#fff');
      targetElement.addClass('navigation-scrolled')
      // targetElement.css('z-index', '1000000');
    } else {
      // targetElement.css('background-color', 'transparent');
      targetElement.removeClass('navigation-scrolled')
      // targetElement.css('z-index', '10000');
    }
  }

  // Call the function on page load
  updateOpacity()

  // Call the function on scroll
  $(window).scroll(function () {
    updateOpacity()
  })
  $('.first-navigation-links-container > button').click(() => {
    $('.searchBarOpen').addClass('search-active')
  })
  $('.search-btn-flying-navbar').click(() => {
    $('.searchBarOpen').addClass('search-active')
  })
  $('.searchBarOpen--closeBtn').click(() => {
    $('.searchBarOpen').removeClass('search-active')
  })

  $('.dropdown.signin-btn > .dropdown-toggle').click(function () {
    // Remove menu-opened class from #menu-button
    $('#menu-button').removeClass('menu-opened')

    // Remove open class from #cssmenu ul
    $('#cssmenu ul').removeClass('open')

    // Remove display block from #cssmenu ul
    $('#cssmenu ul').css('display', '')

    // Add your further actions here if needed
  })
  $('.dropdown.signin-btn > .dropdown-toggle').click(function () {
    // Remove menu-opened class from #menu-button
    $('#menu-button').removeClass('menu-opened')

    // Remove open class from #cssmenu ul
    $('.cssmenu2 ul').removeClass('open')

    // Remove display block from #cssmenu ul
    $('.cssmenu2 ul').css('display', '')

    // Add your further actions here if needed
  })

  $(this).find('.fa-plus').show()
  $(this).find('.fa-minus').hide()

  $('.cssmenu2').menumaker({
    title: '',
    format: 'multitoggle'
  })

  // Footer
  $('.toggleButton').click(function () {
    // Check if the window width is less than or equal to 991px
    if ($(window).width() <= 991) {
      // Toggle the visibility of the target element using classes
      $(this).closest('div').next('ul').toggleClass('show')
      // Toggle the icon based on the presence of the 'show' class
      if ($(this).closest('.footer-item').find('ul').hasClass('show')) {
        $(this).find('.fa-plus').hide()
        $(this).find('.fa-minus').show()
      } else {
        $(this).find('.fa-plus').show()
        $(this).find('.fa-minus').hide()
      }
    }
  })
  // Back to top
  $('.backtotop-box').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'fast')
  })
})

// Navbar
$('.nav-link').click(function () {
  $('.nav-link').removeClass('active')
  $(this).addClass('active')
})

$('.search-icon').click(function () {
  $('.nav-search').addClass('active')
  $('.navbar-search-bar-container').addClass('active')
})

$('.close-icon').click(function () {
  $('.nav-search').removeClass('active')
  $('.navbar-search-bar-container').removeClass('active')
})

$(document).ready(function () {
  $('.has-sub').click(function () {
    // Check if the submenu is already open
    var isOpen = $(this).find('ul').hasClass('open')

    // Close all other submenus
    $('li.has-sub > span.submenu-button').removeClass('submenu-opened')
    $('li.has-sub > ul').removeClass('open').css('display', '')

    // Toggle the submenu state
    if (isOpen) {
      $(this).find('ul').addClass('open').css('display', 'block')
      $(this).find('span.submenu-button').addClass('submenu-opened')
    }
  })
})
