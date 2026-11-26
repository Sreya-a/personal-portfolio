// jQuery: toggle the mobile navigation menu.
$(document).ready(function () {
    $('body').addClass('js-ready');
    $('#menu-toggle').click(function () {
        $('#main-nav').toggleClass('open');
        $(this).attr('aria-expanded', $('#main-nav').hasClass('open'));
    });

    // AJAX: retrieve project information from a local JSON file.
    $('.details-button').click(function () {
        var button = $(this);
        var output = button.next('.project-details');
        if (button.attr('aria-expanded') === 'true') {
            output.prop('hidden', true);
            button.attr('aria-expanded', 'false').text('Load project details');
            return;
        }
        button.prop('disabled', true).text('Loading...');
        $.ajax({
            url: 'data/projects.json',
            dataType: 'json',
            timeout: 10000,
            success: function (projects) {
                var project = projects.find(function (item) {
                    return item.id === button.data('project');
                });
                output.text(project ? project.details : 'Project not found.').prop('hidden', false);
                button.attr('aria-expanded', 'true').text('Hide details');
            },
            error: function () {
                output.text('Could not load details. Open the website using a local HTTP server or GitHub Pages.').prop('hidden', false);
                button.text('Try again');
            },
            complete: function () { button.prop('disabled', false); }
        });
    });
});

// Validate the contact form and submit it asynchronously to Formspree.
var form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var message = document.getElementById('message').value.trim();
        var status = document.getElementById('form-status');
        var button = form.querySelector('button[type="submit"]');
        if (name.length < 2 || message.length < 10) {
            status.textContent = 'Please enter a valid name and at least 10 message characters.';
            return;
        }
        button.disabled = true;
        button.textContent = 'Sending...';
        status.textContent = 'Submitting your message...';
        $.ajax({
            url: form.action,
            method: 'POST',
            data: $(form).serialize(),
            dataType: 'json',
            headers: { Accept: 'application/json' },
            timeout: 20000,
            success: function () {
                status.textContent = 'Thank you! Your message has been submitted successfully.';
                form.reset();
            },
            error: function () {
                status.textContent = 'Submission could not be confirmed. Please check your connection or contact me directly by email.';
            },
            complete: function () {
                button.disabled = false;
                button.textContent = 'Submit';
            }
        });
    });
}
