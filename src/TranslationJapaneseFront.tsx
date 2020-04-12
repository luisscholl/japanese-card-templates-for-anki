import { h, render, Component } from 'preact';
import persist from './Persist';

type Props = {
  showBack?: () => void
}

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

export default class TranslationJapaneseFront extends Component<Props, any> {

  constructor() {
    super();
    if (persist.getItem() !== 'displayed front') {
      persist.setItem('display front');
    }
  }

  render(props: Props, state: any) {
    return (
      <div>
        <div>{'{{translation}}'}</div>
        { props.showBack && <div><button onClick={ props.showBack }>Show back</button></div> }
      </div>);
  }
}

render(<TranslationJapaneseFront />, card);