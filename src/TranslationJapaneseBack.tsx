import { h, render, Component, RefObject, createRef } from 'preact';
import Canvas from './Canvas';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

type State = {
  hintVisible: boolean,
  dictionary_form_kana: string,
  canvases: boolean[]
};

class TranslationJapaneseBack extends Component<any, State> {

  constructor() {
    super();
    this.state = { 
      hintVisible: false, 
      dictionary_form_kana: '{{dictionary_form_kana}}',
      canvases: []
    };
  }

  render(props: any, state: State) {
    return (
      <div>
        <div>{'{{translation}}'}</div>
        <div>{'{{dictionary_form}}'}</div>
        { state.dictionary_form_kana !== '' && <div>{'{{dictionary_form_kana}}'}</div> }
        <div>
          {
            state.canvases.map(drawGuides => 
              <Canvas word="{{dictionary_form}}" guides={drawGuides} />
            )
          }
        </div>
        <div>
          <button onClick={ () => this.addCanvases(false) }>Empty boxes</button>
          <button onClick={ () => this.addCanvases(true) }>Boxes with guides</button>
        </div>
      </div>);
  }

  addCanvases = (e: boolean) => {
    this.setState({ canvases: this.state.canvases.concat(e) });
  }
}

render(<TranslationJapaneseBack />, card);