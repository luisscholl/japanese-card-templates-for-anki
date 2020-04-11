import { h, render, Component } from 'preact';
import persist from './Persist';
import Canvas from './Canvas';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

export default class TranslationJapaneseFront extends Component {

  constructor() {
    super();
    this.state = { 
      hintVisible: false, 
      dictionary_form_kana: '{{dictionary_form_kana}}'
    };
    if (persist.getItem() !== 'displayed front') {
      persist.setItem('display front');
    }
  }

  render(props: any, state: any) {
    return (
      <div>
        <div>{'{{translation}}'}</div>
        <Canvas word="{{dictionary_form}}" guides={false} />
      </div>);
  }

  showHint = () => {
    this.setState({ hintVisible: true });
  }
}

render(<TranslationJapaneseFront />, card);