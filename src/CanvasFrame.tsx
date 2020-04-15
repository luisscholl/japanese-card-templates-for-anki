import { h, render, Component, RefObject } from 'preact';
import { createRef } from 'preact';

type Props = {
  character: string,
  guides: boolean
};

type Point = {
  x: number,
  y: number
};

export default class CanvasFrame extends Component<Props> {
    penDown: boolean = false;
    // mousePositions will be used as a FIFO queue
    penPositions: Point[] = Array.from({length: 3}, () => { return {x: 0, y: 0}});
    positionsSincePenDown: number = 0;
    pageOffset: Point;
    ref: RefObject<HTMLDivElement> = createRef();
    canvasRef: RefObject<HTMLCanvasElement> = createRef();
    renderingContext: CanvasRenderingContext2D;

  constructor() {
    super();
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.adjustForResizeAndInit = this.adjustForResizeAndInit.bind(this);
    this.adjustForScroll = this.adjustForScroll.bind(this);
    window.addEventListener('resize', this.adjustForResizeAndInit);
    window.addEventListener('scroll', this.adjustForScroll);
    setTimeout(this.adjustForResizeAndInit);
  }

  render(props: Props, state: any) {
    return (
      <div class="canvas-frame" ref={ this.ref }>
        { props.guides && <div>{ props.character }</div> }
        <canvas width="1" height="1"
          onMouseDown={ this.onMouseDown } onTouchStart={ this.onTouchStart }
          onMouseMove={ this.onMouseMove } onTouchMove={ this.onTouchMove }
          onMouseUp={ this.onMouseUp } onTouchEnd={ this.onTouchEnd }
          onMouseLeave={ this.onMouseLeave } ref={ this.canvasRef }></canvas>
      </div>
    );
  }

  /* Current limitation:
   * Resizing the viewport clears canvas */
  adjustForResizeAndInit() {
    console.log('adjustForResize called');
    this.adjustForScroll();
    this.canvasRef.current.width = this.canvasRef.current.clientWidth;
    this.canvasRef.current.height = this.canvasRef.current.clientHeight;
    this.renderingContext = this.canvasRef.current.getContext('2d');
    this.renderingContext.fillStyle = '#586e75'; // Solarized Light base01
    this.renderingContext.lineWidth = 1200 / this.ref.current.clientWidth;
  }

  adjustForScroll() {
    console.log('adjustForScroll called');
    this.pageOffset = {
      x: this.ref.current.offsetLeft,
      y: this.ref.current.offsetTop
    }
  }

  drawIfPenDown(position: Point) {
    this.penPositions.unshift(position);
    this.penPositions.pop();
    if (this.penDown) {
          this.renderingContext.beginPath();
          this.renderingContext.moveTo(this.penPositions[0].x - this.pageOffset.x, this.penPositions[0].y - this.pageOffset.y);
      if (this.positionsSincePenDown >= this.penPositions.length) {
        for (let i=1; i<this.penPositions.length; i++) {
          this.renderingContext.lineTo(this.penPositions[i].x - this.pageOffset.x, this.penPositions[i].y - this.pageOffset.y);
        }
      } else {
        for (let i=1; i<this.positionsSincePenDown; i++) {
          this.renderingContext.lineTo(this.penPositions[i].x - this.pageOffset.x, this.penPositions[i].y - this.pageOffset.y);
        }
      }
      this.renderingContext.stroke();
      this.renderingContext.closePath();
    }
  }

  onMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.penDown = true;
    this.positionsSincePenDown = 0;
    this.drawIfPenDown({
      x: e.pageX,
      y: e.pageY
    });
  }

  onTouchStart(e: TouchEvent) {
    e.preventDefault();
    this.penDown = true;
    this.positionsSincePenDown = 0;
    this.drawIfPenDown({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    });
  }

  onMouseMove(e: MouseEvent) {
    e.preventDefault();
    this.positionsSincePenDown++;
    this.drawIfPenDown({
      x: e.pageX,
      y: e.pageY
    });
  }

  onTouchMove(e: TouchEvent) {
    e.preventDefault();
    this.positionsSincePenDown++;
    this.drawIfPenDown({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    });
  }

  onMouseUp(e: MouseEvent) {
    e.preventDefault();
    this.penDown = false;
    this.drawIfPenDown({
      x: e.pageX,
      y: e.pageY
    });
  }

  onTouchEnd(e: TouchEvent) {
    e.preventDefault();
    this.penDown = false;
    this.drawIfPenDown({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    });
  }

  onMouseLeave(e: MouseEvent) {
    e.preventDefault();
    this.penDown = false;
    this.drawIfPenDown({
      x: e.pageX,
      y: e.pageY
    });
  }
}