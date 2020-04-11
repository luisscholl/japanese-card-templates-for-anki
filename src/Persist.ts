import './anki-persistence';

export default {

  setItem(item: any) {
    ((window as any).Persistence as any).setItem(item);
  },

  getItem(): any {
    return ((window as any).Persistence as any).getItem();
  }

}