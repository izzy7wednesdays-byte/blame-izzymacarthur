(function ($, root, undefined) {
	$(function () {
		'use strict';

        $(document).on('click', '.btn-close', function () {
            $(this).parent().toggleClass('hidden');
            $('body').removeClass('open-modal');
        });

    });
})(jQuery, this);

// wiggle clickable
document.addEventListener('click', (e) => {
    if (!e.target.closest('.open-modal')) {
        document.querySelectorAll('.open-modal').forEach(el => {
            el.classList.add('wiggle');
            setTimeout(() => el.classList.remove('wiggle'), 500);
        });
    }
});

//modals
const modals = document.querySelectorAll('.modal');
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-modal');

        modals.forEach(modal => {
            if (modal.id === targetId) {
                modal.classList.remove('hidden');
                document.body.classList.add('modal-open');
            } else {
                modal.classList.add('hidden');
            }
        });
    });
});
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').classList.add('hidden');
        document.body.classList.remove('modal-open');
    });
});
document.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (!modal.classList.contains('hidden')) {
            if (!modal.contains(e.target) && !e.target.classList.contains('open-modal')) {
                modal.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }
        }
    });
});
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modals.forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }
        });
    }
});

// audio trigger
document.querySelector('.CD').addEventListener('click', () => {
    const audio = document.getElementById('in_audio_img_4869');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.querySelector('.playbutton').addEventListener('click', () => {
    const audio = document.getElementById('in_audio_img_4869');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

