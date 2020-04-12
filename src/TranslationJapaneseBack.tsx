import { h, render, Component } from 'preact';
import persist from './Persist';
import TranslationJapaneseFront from './TranslationJapaneseFront';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

type State = {
  dictionary_form_kana: string,
  type: string,
  displayFront: boolean
};
class TranslationJapaneseBack extends Component<any, State> {

  constructor() {
    super();
    this.state = { 
      dictionary_form_kana: '{{dictionary_form_kana}}',
      type: '{{type}}',
      displayFront: persist.getItem() === 'display front'
    };
    persist.setItem('displayed front')
  }

  render(props: any, state: State) {
    return (
      state.displayFront ?
      <span>
        <TranslationJapaneseFront showBack={ this.showBack } />
      </span>
      :
      <div>
        <div>{'{{translation}}'}</div>
        <div>{'{{dictionary_form}}'}</div>
        { state.dictionary_form_kana !== '' && <div>{'{{dictionary_form_kana}}'}</div> }
        { state.type === 'ichidan-verb' && <div className="ichidan-verb">Ichidan verb</div> }
        { state.type === 'godan-verb' && <div className="godan-verb">Godan verb</div> }
        { state.type === 'irregular-verb' && <div className="irregular-verb">Irregular verb</div> }
      </div>);
  }

  showBack = () => {
    this.setState({ displayFront: false });
  }
}

render(<TranslationJapaneseBack />, card);