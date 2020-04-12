import { h, render, Component } from 'preact';
import persist from './Persist';

type PersistenceType = {
  setItem: (_: string) => void,
  getItem: () => string
};

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

export default class TranslationJapaneseFront extends Component {

  constructor() {
    super();
    if (persist.getItem() !== 'displayed front') {
      persist.setItem('display front');
    }
  }

  render(props: any, state: any) {
    return (
      <div><div>{'{{translation}}'}</div></div>);
  }
}

render(<TranslationJapaneseFront />, card);