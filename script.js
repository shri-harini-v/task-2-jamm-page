$(document).ready(function () {
  function jump(selector) {
    $(selector)
      .animate({ top: "-40px" }, 200)
      .animate({ top: "0px" }, 200)
      .delay(200)
      .queue(function (next) {
        jump(selector);
        next();
      });
  }

  jump(".jam");
  jump(".bread");
});

$(document).ready(function () {
  // Hover effect: Change button text and style
  $(".cta").hover(
    function () {
      $(this)
        .text("IT’S WORTH IT")
        .css({
          "background-color":" #41037b", // violet
          "color": "#ff4c93" // pink
        });
    },
    function () {
      $(this)
        .text("SEE PRICING")
        .css({
          "background-color": "#ff4c93", // original color
          "color": "#ffffff"
        });
    }
  );

  // Click effect: Smooth scroll to #pricing section
  $(".cta").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#pricing").offset().top
    }, 800);
  });
});


$(document).ready(function () {
  $(".gallery-img").each(function (i) {
    $(this).delay(i * 150).fadeIn(500);
  });
});

$(document).ready(function () {
  let lastScrollTop = $(window).scrollTop();

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let delta = scrollTop - lastScrollTop;

    $(".image-grid img").each(function () {
      let currentTop = parseFloat($(this).css("top")) || 0;
      let newTop = currentTop - delta * 1.5; // adjust sensitivity

      // Clamp movement range
      newTop = Math.max(-200, Math.min(200, newTop));

      $(this).css("top", `${newTop}px`);
    });

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
  let lastScrollTop = $(window).scrollTop();

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let delta = scrollTop - lastScrollTop;

    $(".partner-logos img").each(function () {
      let currentLeft = parseFloat($(this).css("left")) || 0;
      let newLeft = currentLeft - delta * 1.5; // 🚀 speed multiplier

      // Clamp movement range
      newLeft = Math.max(-200, Math.min(200, newLeft));

      $(this).css("left", `${newLeft}px`);
    });

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
  let lastScrollTop = $(window).scrollTop();

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let delta = scrollTop - lastScrollTop;

    $(".gallery-strip img").each(function () {
      let currentLeft = parseFloat($(this).css("left")) || 0;
      let newLeft = currentLeft + delta * 4.5; // 💥 speed multiplier boosted

      // Expanded clamp range for more freedom
      newLeft = Math.max(-600, Math.min(600, newLeft));

      $(this).css("left", `${newLeft}px`);
    });

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
  let lastScrollTop = $(window).scrollTop();

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let delta = scrollTop - lastScrollTop;

    // First strip: scroll down → move right
    $(".gallery-strip:not(.reverse-strip) img").each(function () {
      let currentLeft = parseFloat($(this).css("left")) || 0;
      let newLeft = currentLeft + delta * 4.5;
      newLeft = Math.max(-600, Math.min(600, newLeft));
      $(this).css("left", `${newLeft}px`);
    });

    // Second strip: scroll down → move left
    $(".reverse-strip img").each(function () {
      let currentLeft = parseFloat($(this).css("left")) || 0;
      let newLeft = currentLeft - delta * 4.5;
      newLeft = Math.max(-600, Math.min(600, newLeft));
      $(this).css("left", `${newLeft}px`);
    });

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
  let lastScrollTop = $(window).scrollTop();
  let progress = 0;

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let delta = scrollTop - lastScrollTop;

    // Check if progress bar is visible
    let bar = $(".progress-track")[0];
    let rect = bar.getBoundingClientRect();
    let isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isVisible) {
      progress += delta * 0.2;
      progress = Math.max(0, Math.min(100, progress));
      $(".progress-fill").css("width", `${progress}%`);
    }

    lastScrollTop = scrollTop;
  });
});

$(document).ready(function () {
    $('.dot').click(function () {
      var index = $(this).data('index');

      $('.dot').removeClass('active');
      $(this).addClass('active');

      $('.testimonial').removeClass('active');
      $('.testimonial').eq(index).addClass('active');
    });
  });


const bars = document.querySelectorAll('.work-bar');

bars.forEach(bar => {
  bar.addEventListener('mouseenter', () => {
    bar.classList.add('active');
  });

  bar.addEventListener('mouseleave', () => {
    bar.classList.remove('active');
  });
});

$(document).ready(function () {
    $('.faq-question').click(function () {
      const $item = $(this).closest('.faq-item');
      const $answer = $item.find('.faq-answer');
      const isActive = $item.hasClass('active');

      // Close all other answers
      $('.faq-item').not($item).each(function () {
        const $other = $(this);
        const $otherAnswer = $other.find('.faq-answer');

        $other.removeClass('active');
        $other.find('.icon').text('+');

        // Smooth close
        $otherAnswer.css('height', $otherAnswer[0].scrollHeight + 'px');
        requestAnimationFrame(() => {
          $otherAnswer.css('height', '0');
        });
      });

      if (!isActive) {
        $item.addClass('active');
        $item.find('.icon').text('-');

        // Force initial height = 0 (before transition)
        $answer.css('height', '0');

        // Allow transition to full height
        requestAnimationFrame(() => {
          const fullHeight = $answer[0].scrollHeight;
          $answer.css('height', fullHeight + 'px');
        });

        // After animation ends, remove height so content adjusts naturally
        $answer.one('transitionend', () => {
          if ($item.hasClass('active')) {
            $answer.css('height', 'auto');
          }
        });

      } else {
        $item.removeClass('active');
        $item.find('.icon').text('+');

        // Set current height before collapsing
        $answer.css('height', $answer[0].scrollHeight + 'px');

        requestAnimationFrame(() => {
          $answer.css('height', '0');
        });
      }
    });
  });

