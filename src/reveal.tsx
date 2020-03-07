export default function reveal( 
  card: HTMLDivElement,
  title: HTMLElement,
  answer: HTMLElement,
) {
  let button: HTMLButtonElement = document.createElement('button');
  button.appendChild(title);
  button.onclick = () => {
    button.replaceWith(answer);
  };

  let wrapper: HTMLDivElement = document.createElement('div');
  wrapper.append(button);

  card.appendChild(wrapper);
}
