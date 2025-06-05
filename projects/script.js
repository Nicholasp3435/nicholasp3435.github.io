console.log('Loaded', document.currentScript.src);

const form = document.querySelector("form");
const projects = document.querySelectorAll("#projects .card");

projects.forEach(project => {
    project.querySelector('.details').classList.add('closed');
    project.querySelector('.heading').setAttribute('tabindex', 0);
});

if (form) {
    form.addEventListener('change', (event) => {
        const inputs = [...event.currentTarget.elements];
        const selected = inputs.map(input => {
            if (input.checked) {
                return input.value;
            } else {
                return null;
            }
        }).filter(input => !!input);

        projects.forEach(project => {
            if (!checkSub(project.dataset.tags.split(', '), selected)) {
                project.classList.add('hidden');
            } else {
                project.classList.remove('hidden');
            }

        })
    });
}

document.querySelectorAll('.card').forEach(card => {

    const heading = card.querySelector('.heading');

    heading.addEventListener('click', () => toggle_card(card));
    heading.addEventListener('keypress', (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle_card(card);
        }
    });
    
});

function toggle_card(card) {

    
    const details = card.querySelector('.details');

    if (details.classList.contains('opening') || details.classList.contains('closing')) {
        return;
    }

    if (details.classList.contains('closed')) {
        details.classList.remove('closed');
        details.classList.add('opening');
        setTimeout(() => {
            details.classList.remove("opening");
        }, 250);
    } else {
        details.classList.add('closing');
        setTimeout(() => {
            details.classList.remove("closing");
            details.classList.add('closed');
        }, 250);
    }
}


function checkSub(a, sub) {
    return a.join(',').includes(sub.join(','));
}