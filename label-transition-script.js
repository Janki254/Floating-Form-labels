const labels = document.querySelectorAll('.form-control label');

labels.forEach((label_ele) => {
    label_ele.innerHTML = label_ele.innerText
        .split('')
        .map(
            (letter, letter_index) =>
                `<span style="transition-delay:${
                    letter_index * 50
                }ms">${letter} </span>`,
        )
        .join('');
});
