import { h, render, Component } from 'preact';
import Canvas from './Canvas';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

class TranslationJapaneseFront extends Component {

  constructor() {
    super();
    this.state = { 
      hintVisible: false, 
      dictionary_form_kana: '{{dictionary_form_kana}}'
    };
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